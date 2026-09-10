const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type MailEnv = {
  RESEND_API_KEY?: string;
  RESEND_TO?: string;
  RESEND_FROM?: string;
};

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim());
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function sendOwnerEmail(
  env: MailEnv,
  input: { subject: string; text: string; replyTo?: string }
) {
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.RESEND_FROM || "Auvrenn <hello@auvrenn.com>",
      to: env.RESEND_TO || "hambykair@gmail.com",
      subject: input.subject,
      text: input.text,
      ...(input.replyTo ? { reply_to: input.replyTo } : {}),
    }),
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as {
      message?: string;
    } | null;
    throw new Error(payload?.message || `Resend error ${response.status}`);
  }
}

export async function handleReleaseRequest(request: Request, env: MailEnv) {
  try {
    const body = (await request.json()) as {
      email?: string;
      company?: string;
    };

    if (body.company) {
      return json({ ok: true });
    }

    const email = body.email?.trim().toLowerCase() ?? "";
    if (!isValidEmail(email)) {
      return json({ error: "Please enter a valid email address." }, 400);
    }

    await sendOwnerEmail(env, {
      subject: `Auvrenn release list: ${email}`,
      text: [
        "A visitor joined the Terra release list.",
        "",
        `Email: ${email}`,
        "Source: auvrenn.com release list",
      ].join("\n"),
      replyTo: email,
    });

    return json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not save this email.";
    return json({ error: message }, 500);
  }
}

export async function handleContactRequest(request: Request, env: MailEnv) {
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
      return json({ ok: true });
    }

    const firstName = body.firstName?.trim() ?? "";
    const lastName = body.lastName?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const subject = body.subject?.trim() || "Studio note";
    const message = body.message?.trim() ?? "";

    if (!firstName || !lastName || !isValidEmail(email) || !message) {
      return json(
        { error: "Please complete every field with a valid email." },
        400
      );
    }

    await sendOwnerEmail(env, {
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

    return json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not send this note.";
    return json({ error: message }, 500);
  }
}

export function processEnvMail(): MailEnv {
  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_TO: process.env.RESEND_TO,
    RESEND_FROM: process.env.RESEND_FROM,
  };
}
