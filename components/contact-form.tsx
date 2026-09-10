"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const subjects = [
  "Release information",
  "Press & partnerships",
  "Retail inquiry",
  "Other inquiry",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error || "Could not send this note.");
      }
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send this note.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="contact-success">
        <p className="eyebrow">Message received</p>
        <h2>Thank you</h2>
        <p>We’ll reply within two business days.</p>
        <button
          type="button"
          className="editorial-link light"
          onClick={() => setSent(false)}
        >
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          First name
          <Input required name="firstName" autoComplete="given-name" />
        </label>
        <label>
          Last name
          <Input required name="lastName" autoComplete="family-name" />
        </label>
      </div>
      <label>
        Email address
        <Input
          required
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
        />
      </label>
      <label>
        Subject
        <select name="subject" defaultValue={subjects[0]} required>
          {subjects.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Your message
        <Textarea required name="message" rows={5} />
      </label>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden
      />
      {error ? <p className="form-error light">{error}</p> : null}
      <Button
        type="submit"
        disabled={pending}
        className="button button-light mt-4 h-13 min-h-13 w-full rounded-none text-[10px] tracking-[0.14em] uppercase"
      >
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
