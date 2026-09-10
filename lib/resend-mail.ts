import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim());
}

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }
  return new Resend(apiKey);
}

export function getMailConfig() {
  return {
    from: process.env.RESEND_FROM || "Auvrenn <hello@auvrenn.com>",
    to: process.env.RESEND_TO || "hambykair@gmail.com",
  };
}

export async function sendOwnerEmail(input: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const resend = getResendClient();
  const { from, to } = getMailConfig();
  const { data, error } = await resend.emails.send({
    from,
    to,
    subject: input.subject,
    text: input.text,
    ...(input.replyTo ? { replyTo: input.replyTo } : {}),
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
