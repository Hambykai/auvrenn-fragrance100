# Auvrenn

Independent fragrance house site for **Terra**, the debut 75 ml release. Mobile-first so the house, fragrance, shop waitlist, FAQ, and contact pages actually render and scroll on phones.

## Run locally

```bash
cp .env.example .env.local
# set RESEND_API_KEY, RESEND_TO, and optionally RESEND_FROM
npm install
npm run dev
```

Open [http://127.0.0.1:43145](http://127.0.0.1:43145).

## Email (Resend)

Waitlist and contact submissions are posted to `/api/release-list` and `/api/contact`, then sent through Resend to `RESEND_TO`.

`auvrenn.com` is already verified in Resend. Use:

```
RESEND_FROM="Auvrenn <hello@auvrenn.com>"
RESEND_TO=your-inbox@email.com
RESEND_API_KEY=re_xxxxxxxxx
```

Never commit `RESEND_API_KEY`. On Vercel, add the same variables in Project Settings → Environment Variables.

## Pages

- `/` — debut home
- `/fragrance` — Terra composition
- `/story` — the house
- `/shop` — 75 ml waitlist
- `/faq` — release questions
- `/contact` — studio correspondence

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Resend.
