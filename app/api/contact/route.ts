import { handleContactRequest, processEnvMail } from "@/lib/email";

export async function POST(request: Request) {
  return handleContactRequest(request, processEnvMail());
}
