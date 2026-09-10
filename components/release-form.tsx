"use client";

import { FormEvent, useId, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ReleaseFormProps = {
  variant?: "inline" | "solid";
};

export function ReleaseForm({ variant = "solid" }: ReleaseFormProps) {
  const fieldId = useId();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || pending) return;
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/release-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          company: event.currentTarget.company.value,
        }),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error || "Could not join the list.");
      }
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not join the list.");
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="release-confirmation">
        <span>Release list confirmed</span>
        <p>
          We’ll send launch timing and first-access details to your inbox.
        </p>
        <button type="button" onClick={() => setSubmitted(false)}>
          Use another email
        </button>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <form className="newsletter-form" onSubmit={onSubmit}>
        <label htmlFor={`${fieldId}-inline`} className="sr-only">
          Email address
        </label>
        <input
          id={`${fieldId}-inline`}
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="Email address"
          value={email}
          disabled={pending}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          aria-hidden
        />
        <button
          type="submit"
          aria-label="Join the release list"
          disabled={pending}
        >
          <ArrowRight size={18} />
        </button>
        {error ? <p className="form-error">{error}</p> : null}
      </form>
    );
  }

  return (
    <form className="release-form" onSubmit={onSubmit}>
      <label htmlFor={fieldId} className="sr-only">
        Email address
      </label>
      <Input
        id={fieldId}
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        placeholder="Email address"
        value={email}
        disabled={pending}
        onChange={(event) => setEmail(event.target.value)}
        className="h-13 rounded-none border-[var(--ink)] bg-transparent px-4 text-[13px] shadow-none focus-visible:ring-[var(--brass)]"
      />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden
      />
      <Button
        type="submit"
        disabled={pending}
        className="button button-dark h-13 min-h-13 rounded-none px-6 text-[10px] tracking-[0.14em] uppercase"
      >
        {pending ? "Sending…" : "Notify me upon release"}
      </Button>
      {error ? <p className="form-error">{error}</p> : null}
    </form>
  );
}
