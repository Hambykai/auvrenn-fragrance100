import { NextResponse } from "next/server";
import { isValidEmail, sendOwnerEmail } from "@/lib/resend-mail";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      company?: string;
    };

    if (body.company) {
      return NextResponse.json({ ok: true });
    }

    const email = body.email?.trim().toLowerCase() ?? "";
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await sendOwnerEmail({
      subject: `Auvrenn release list: ${email}`,
      text: [
        "A visitor joined the Terra release list.",
        "",
        `Email: ${email}`,
        `Source: auvrenn.com release list`,
      ].join("\n"),
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not save this email.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
