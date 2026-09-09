# Auvrenn

Independent fragrance house site for **Terra**, the debut 75 ml release. This is a mobile-first rebuild of auvrenn.com so the house, fragrance, shop waitlist, FAQ, and contact pages actually render and scroll on phones.

The original live site clipped overflow, sized hero images with percentage heights that collapse on iOS, and shipped a large desktop editor script. Phones often showed a blank or frozen screen. This app keeps the same copy and photography and lays everything out so it works from a 390px phone up to desktop.

## Run locally

```bash
npm install
npm run dev -- --port 43145 --hostname 127.0.0.1
```

Open [http://127.0.0.1:43145](http://127.0.0.1:43145).

## Pages

- `/` — debut home
- `/fragrance` — Terra composition
- `/story` — the house
- `/shop` — 75 ml waitlist
- `/faq` — release questions
- `/contact` — studio correspondence

The release list and contact form confirm locally. They do not send email unless you add a backend later.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
