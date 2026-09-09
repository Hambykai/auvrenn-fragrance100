"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ReleaseFormProps = {
  variant?: "inline" | "solid";
};

export function ReleaseForm({ variant = "solid" }: ReleaseFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
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
        <label htmlFor="release-email-inline" className="sr-only">
          Email address
        </label>
        <input
          id="release-email-inline"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit" aria-label="Join the release list">
          <ArrowRight size={18} />
        </button>
      </form>
    );
  }

  return (
    <form className="release-form" onSubmit={onSubmit}>
      <label htmlFor="release-email" className="sr-only">
        Email address
      </label>
      <Input
        id="release-email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        placeholder="Email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-13 rounded-none border-[var(--ink)] bg-transparent px-4 text-[13px] shadow-none focus-visible:ring-[var(--brass)]"
      />
      <Button
        type="submit"
        className="button button-dark h-13 min-h-13 rounded-none px-6 text-[10px] tracking-[0.14em] uppercase"
      >
        Notify me upon release
      </Button>
    </form>
  );
}
