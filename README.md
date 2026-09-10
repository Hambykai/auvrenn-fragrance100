# Auvrenn

Independent fragrance house site for **Terra**, the debut 75 ml Eau de Parfum. Professional, simple to navigate, and ready for the next scent when you are.

You do **not** need Vercel. Emails go out through a Cloudflare Worker (the same host as [auvrenn.com](https://auvrenn.com)) using Resend.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://127.0.0.1:43145](http://127.0.0.1:43145).

## Pages

- `/` — debut home
- `/fragrance` — Terra
- `/story` — the house
- `/shop` — waitlist
- `/faq` — release questions
- `/contact` — studio correspondence

Primary navigation is four links: Terra, Story, Shop, Contact. FAQ lives in the footer.

## Adding a new scent

All product copy and photography are in `lib/site.ts`.

1. Add a new object to `releases` (name, notes, images, `status`).
2. Put bottle photography in `public/images/` using the same Auvrenn bottle.
3. Set `status` to `"coming-soon"` for a waitlist, or `"live"` when you are ready to sell.

Until a chapter is named, keep it in `reservedReleases`. Home, Shop, and the header status read from this file so you do not have to redesign the site.

## Email (Resend + Cloudflare)

Waitlist and contact posts go to `/api/release-list` and `/api/contact`. Locally, Next.js handles those. On auvrenn.com, the Cloudflare Worker in `worker.ts` sends them with Resend.

`auvrenn.com` is already verified in Resend. Set:

```
RESEND_FROM="Auvrenn <hello@auvrenn.com>"
RESEND_TO=your-inbox@email.com
RESEND_API_KEY=re_xxxxxxxxx
```

Never commit `RESEND_API_KEY`.

Deploy (from this folder, logged into Cloudflare):

```bash
npx wrangler login
npx wrangler secret put RESEND_API_KEY
npm run deploy
```

`RESEND_TO` and `RESEND_FROM` are in `wrangler.json`.

## Stack

Next.js (static export), Cloudflare Worker, Resend, TypeScript, Tailwind CSS, shadcn/ui.
