import {
  handleContactRequest,
  handleReleaseRequest,
  type MailEnv,
} from "./lib/email";

export interface Env extends MailEnv {
  ASSETS: { fetch: typeof fetch };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (request.method === "POST" && path === "/api/release-list") {
      return handleReleaseRequest(request, env);
    }
    if (request.method === "POST" && path === "/api/contact") {
      return handleContactRequest(request, env);
    }
    if (path.startsWith("/api/")) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
