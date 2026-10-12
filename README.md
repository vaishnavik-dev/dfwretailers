# DFW Retailers

Next.js App Router website with TypeScript and static export.

## Run

`npm install` then `npm run dev`. Open http://localhost:3000.

`npm run build` exports deployable static pages to `out/`.

## Content updates

Add retailers to `data/retailers.json` as objects with unique `id`, `name`, `city`, `category`, and optional `description` and `website` (full https URL).

Place supplied assets in `public/`, then set paths in `data/site.json`: `logo` (for example `/logo.png`), `whatsappQr` (for example `/whatsapp-qr.png`), and `whatsappUrl` (an https://chat.whatsapp.com/ or https://wa.me/ link). Null values show the intended placeholders. Rebuild after updates.

No visitor data, account system, or membership payment is collected. About copy is a draft. Domain DNS has not been changed.
