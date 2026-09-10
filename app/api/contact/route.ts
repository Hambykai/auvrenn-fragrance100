import { NextResponse } from "next/server";
import { isValidEmail, sendOwnerEmail } from "@/lib/resend-mail";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      firstName?: string;
      lastName?: string;
      email?: string;
      subject?: string;
      message?: string;
      company?: string;
    };

    if (body.company) {
      return NextResponse.json({ ok: true });
    }

    const firstName = body.firstName?.trim() ?? "";
    const lastName = body.lastName?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const subject = body.subject?.trim() || "Studio note";
    const message = body.message?.trim() ?? "";

    if (!firstName || !lastName || !isValidEmail(email) || !message) {
      return NextResponse.json(
        { error: "Please complete every field with a valid email." },
        { status: 400 }
      );
    }

    await sendOwnerEmail({
      subject: `Auvrenn contact: ${subject}`,
      text: [
        "A visitor wrote to Auvrenn.",
        "",
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not send this note.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
