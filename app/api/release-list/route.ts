import { handleReleaseRequest, processEnvMail } from "@/lib/email";

export async function POST(request: Request) {
  return handleReleaseRequest(request, processEnvMail());
}
