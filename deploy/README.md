# Kindling — website

Static site. No build step.

## Deploy to Vercel
1. Drop this folder into a new Vercel project (drag-and-drop on vercel.com/new, or `vercel` CLI from inside it).
2. Framework preset: **Other**. Build command: **none**. Output directory: **/** (root).
3. Deploy. `index.html` is the landing page.

Pages: index (landing) · product · how-it-works · customers · offerings · manifesto.
`vercel.json` enables clean URLs (e.g. `/product` instead of `/product.html`).
