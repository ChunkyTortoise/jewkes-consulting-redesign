![Tests](https://img.shields.io/badge/tests-20%20passing-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Vercel](https://img.shields.io/badge/Vercel-live-brightgreen)

# Jewkes Consulting — AI Integration Proposal

Interactive proposal site built for The Jewkes Firm, LLC presenting an AI integration strategy for plaintiff personal injury and medical malpractice practice.

## Live Demo

[https://jewkes-consulting-redesign.vercel.app](https://jewkes-consulting-redesign.vercel.app)

## Architecture

- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: Tailwind CSS + Radix UI primitives
- **Language**: TypeScript 5 (strict mode)
- **Deploy**: Vercel (edge network, automatic previews)
- **Security**: strict CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy headers

## Project Structure

```
jewkes-consulting-redesign/
├── app/                   # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
├── public/                # Static assets
├── next.config.js         # Security headers config
└── tailwind.config.ts     # Design system tokens
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm test         # run test suite
```

## Security Headers

Configured via `next.config.js`:
- `Content-Security-Policy` — restricts script/style sources
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

## Sections

Hero | Opportunity | OpenClaw | Tools (11) | Deliverables | RAG Knowledge Bases (10) | Pricing | Compliance | Next Steps

## Local Development

```bash
pnpm install
pnpm dev
```

Requires Node 22.x and pnpm >= 10.

## Build

```bash
pnpm build
```

Static output goes to `out/` (`output: 'export'` in next.config.mjs).

## Deploy

Push to `main` — Vercel auto-deploys. Security headers and `noindex` configured in `vercel.json`.
