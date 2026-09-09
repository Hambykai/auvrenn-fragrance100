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

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
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
      <Button
        type="submit"
        className="button button-light mt-4 h-13 min-h-13 w-full rounded-none text-[10px] tracking-[0.14em] uppercase"
      >
        Send message
      </Button>
    </form>
  );
}
