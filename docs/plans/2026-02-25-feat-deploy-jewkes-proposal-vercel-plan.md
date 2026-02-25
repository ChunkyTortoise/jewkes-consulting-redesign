---
title: Deploy Jewkes Consulting Proposal to Vercel
type: feat
status: active
date: 2026-02-25
---

# Deploy Jewkes Consulting Proposal to Vercel

The interactive AI integration proposal for The Jewkes Firm, LLC is content-complete and design-polished. It needs a public Vercel URL so Jordan Jewkes can review and share it. The deployment is zero-config — no environment variables, no secrets, no backend services required.

---

## Enhancement Summary

**Deepened on:** 2026-02-25
**Research agents used:** deployment-verification-agent, security-sentinel, performance-oracle, best-practices-researcher, julik-frontend-races-reviewer, spec-flow-analyzer

### Key Improvements Discovered

1. **Security headers are missing** — a `vercel.json` with CSP, HSTS, X-Frame-Options, etc. must be added before deploy. The proposal is labeled "Confidential" and contains client pricing/strategy.
2. **Search engine indexing risk** — `metadata.robots` must be set to `noindex` before the public URL is shared; without this, Google can index the confidential proposal.
3. **Bundle bloat** — `recharts` (~300 KB) is installed but never used in any proposal component. Removing it is the single largest performance win.
4. **Font wiring bug** — `next/font` variables are declared but never applied to `<body>`, meaning fonts may load from Google at runtime (FOUT risk on first paint).
5. **Two real JS bugs in navigation.tsx** — body scroll lock cleanup is unsafe under React 19 concurrent mode; scroll progress bar hard-mounts/unmounts defeating its own CSS transition.
6. **Static export** (`output: 'export'`) is appropriate for this site and reduces cold-start latency from ~200ms to ~5-30ms edge cache.

### New Acceptance Criteria Added

- Build verified locally before Vercel deploy
- `vercel.json` with security headers committed before deploy
- `noindex` set in metadata + `robots.txt`
- GitHub repo set to private
- URL stability via `--prod` flag
- Content update runbook defined
- Mobile verified on iOS Safari 390px + Chrome Android 375px

---

## Acceptance Criteria

- [ ] `pnpm build` exits 0 locally before initiating Vercel deploy
- [ ] `vercel.json` with security headers committed to `main`
- [ ] `metadata.robots` set to `noindex` + `/public/robots.txt` added
- [ ] GitHub repo set to private on github.com
- [ ] Site is live on Vercel at a stable production URL (deployed with `--prod`)
- [ ] All 11 proposal sections render correctly in production
- [ ] Sticky navigation scroll-tracking works in production
- [ ] Mobile responsive layout verified on iOS Safari 390px and Chrome Android 375px
- [ ] Vercel Analytics confirmed active (pageview event in Network tab)
- [ ] Lighthouse Performance score ≥ 85 on live URL
- [ ] Live URL sent to Jordan Jewkes via email (traceable channel)
- [ ] Rollback path confirmed: prior deployment snapshot accessible in Vercel dashboard

---

## Context

**Repo:** `https://github.com/ChunkyTortoise/jewkes-consulting-redesign` (branch: `main`, clean working tree)

**Why this deploys cleanly:**
- `typescript.ignoreBuildErrors: true` — no TS errors will block the build (see Performance note about removing this)
- `images.unoptimized: true` — static image serving (see Performance note about removing this)
- Zero `process.env` usage — no env vars to configure in Vercel dashboard
- `@vercel/analytics` already wired in `app/layout.tsx` — activates automatically
- pnpm lockfile present — Vercel auto-detects pnpm, no extra config needed
- No `vercel.json` needed for deploy detection — Next.js auto-detected

**Leading-edge stack note:** Next.js 16 + React 19 + Tailwind v4 is cutting-edge. After deploy, do a hard visual comparison between `pnpm dev` output and the live Vercel URL. Any layout differences indicate Tailwind v4 PostCSS config differences between environments.

---

## Phase 0 — Pre-Deploy Fixes (Required Before Deploy)

These must be done before `vercel --prod`. They are not optional.

### 0a. Add `vercel.json` with Security Headers

Create `/Users/cave/Projects/jewkes-consulting-redesign/vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none';"
        },
        { "key": "X-Frame-Options",           "value": "DENY" },
        { "key": "X-Content-Type-Options",    "value": "nosniff" },
        { "key": "X-XSS-Protection",          "value": "1; mode=block" },
        { "key": "Referrer-Policy",           "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy",        "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

**CSP notes:**
- `va.vercel-scripts.com` — required for `@vercel/analytics` to load
- `vitals.vercel-insights.com` — required for analytics beacons
- `'unsafe-inline'` for scripts — required by Next.js App Router hydration
- `frame-ancestors 'none'` — prevents clickjacking (redundant with X-Frame-Options for modern browsers)
- Google Fonts are self-hosted via `next/font` — no external font CDN needed in CSP

### 0b. Add `noindex` to Metadata and `robots.txt`

The proposal is labeled "Confidential" and contains client pricing. Without this, Google can index it.

**`app/layout.tsx`** — add to the `metadata` export:
```tsx
export const metadata: Metadata = {
  // ...existing fields...
  robots: {
    index: false,
    follow: false,
  },
}
```

**Create `/public/robots.txt`:**
```
User-agent: *
Disallow: /
```

### 0c. Make GitHub Repo Private

The source repo at `github.com/ChunkyTortoise/jewkes-consulting-redesign` contains:
- Client name and law firm details
- Full pricing and engagement tiers
- Competitive strategy for their practice areas

Go to GitHub → Settings → Danger Zone → Change visibility → Private.

### 0d. Add `.env` to `.gitignore`

The current `.gitignore` covers `.env*.local` but not plain `.env`. Precaution for future use:

```
# add to .gitignore
.env
```

### 0e. Add Node.js + pnpm Version Pinning to `package.json`

```json
{
  "packageManager": "pnpm@10.5.2",
  "engines": {
    "node": "22.x",
    "pnpm": ">=10.0.0"
  }
}
```

This ensures Vercel uses Node 22 (the current LTS) rather than defaulting to 20.x, and prevents pnpm version mismatch failures.

---

## Phase 1 — Deploy

### Verify Build Locally First

```bash
cd /Users/cave/Projects/jewkes-consulting-redesign
pnpm install --frozen-lockfile
pnpm build
# Must exit 0. ignoreBuildErrors suppresses TS errors but NOT missing imports.

# Verify no process.env usage (plan states zero — confirm)
grep -r "process\.env" ./app ./components 2>/dev/null || echo "CLEAN"
```

**Stop if build exits non-zero.** Fix the error before deploying.

### Option A — Vercel CLI (recommended — fastest, no browser required)

```bash
cd /Users/cave/Projects/jewkes-consulting-redesign
npx vercel --prod
```

Interactive prompts:
- "Set up and deploy?" → Yes
- "Which scope?" → ChunkyTortoise
- "Link to existing project?" → No (first deploy)
- "Project name?" → `jewkes-consulting-redesign`
- "In which directory?" → `./` (default)
- Accept auto-detected Next.js settings, no env vars to add

**Save the production URL printed at the end.** It is stable across future `--prod` deploys.

### Option B — GitHub Import (requires repo to be public or Vercel authorized)

> ⚠️ This conflicts with 0c (private repo). Only use if Vercel is authorized via OAuth to read private repos.

1. Go to vercel.com/new
2. Import `ChunkyTortoise/jewkes-consulting-redesign`
3. Framework: **Next.js** (auto-detected)
4. Build command: `next build` (default)
5. Output directory: `.next` (default)
6. Environment variables: **none** — leave empty
7. Click **Deploy**

---

## Phase 2 — Post-Deploy Verification (Within 5 Minutes)

### Visual Checks

```bash
# Smoke test
curl -I https://<vercel-url>.vercel.app
# Expect: HTTP 200, content-type: text/html
```

- [ ] Homepage loads without blank screen
- [ ] No hydration errors in browser console (`Warning: Text content did not match`)
- [ ] All 11 sections scroll into view
- [ ] Navigation highlights correct section on scroll
- [ ] Back-to-top button appears after scrolling
- [ ] Pricing "Show Full Table" toggle works
- [ ] No broken images (placeholder images load from `/public/`)

### Security Header Verification

```bash
curl -I https://<vercel-url>.vercel.app | grep -E "x-frame|x-content|strict-transport|content-security"
# Expect headers from vercel.json to appear
```

### Mobile Verification

- [ ] iOS Safari at 390px — check hero, nav, and pricing sections
- [ ] Chrome Android at 375px — check mobile menu open/close
- [ ] Body scroll locks when mobile menu is open (known bug in navigation.tsx — see Phase 3)

### Analytics Verification

- [ ] Open Network tab in browser DevTools
- [ ] Reload the page
- [ ] Confirm request to `va.vercel-scripts.com` or `/_vercel/insights/event`
- [ ] Check Vercel dashboard → Analytics tab — pageview should appear within 60 seconds

### Performance Baseline

Run Lighthouse on the live URL via Chrome DevTools or PageSpeed Insights:

| Metric | Target |
|--------|--------|
| Performance | ≥ 85 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| LCP | < 2.5s |

Save these scores for future comparison if Jordan requests edits.

---

## Phase 3 — Performance & Code Quality Improvements (Post-Deploy)

These are not blockers for the initial deploy but should be addressed before the proposal goes through extensive review cycles.

### P1 — Remove Unused `recharts` (~300 KB bundle savings)

`recharts` is a production dependency but is not imported anywhere in the 11 proposal components. Removing it is the single largest performance win.

```bash
cd /Users/cave/Projects/jewkes-consulting-redesign
pnpm remove recharts
# Also remove the chart UI component if unused:
# rm components/ui/chart.tsx
```

**Impact:** ~250-350 KB reduction in JavaScript bundle (minified), ~80-90 KB gzipped.

### P2 — Fix Font Variable Wiring

The `next/font` font variables are declared but never applied to the `<body>` element, meaning fonts may fall back to a Google Fonts request at runtime.

**`app/layout.tsx`:**
```tsx
// Change from:
const _lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"] })
const _merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"] })

// To:
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],  // only used weights
  variable: "--font-lato",
})
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],  // only used weights
  variable: "--font-merriweather",
})

// Apply to body:
<body className={`${lato.variable} ${merriweather.variable} font-sans antialiased`}>
```

**`app/globals.css`** — update `@theme inline` block:
```css
--font-sans: var(--font-lato), sans-serif;
--font-serif: var(--font-merriweather), Georgia, serif;
```

**Impact:** Eliminates potential FOUT on first paint; removes 2 unnecessary Google Fonts network requests; reduces font payload by ~30% (removing unused weights 300/900).

### P3 — Add Static Export to `next.config.mjs`

This site has no API routes, no ISR, and no server-side dynamic content. Static export reduces first-byte latency from ~200ms (serverless cold start) to ~5-30ms (edge cache).

```js
// next.config.mjs
const nextConfig = {
  output: 'export',
  // Remove: typescript.ignoreBuildErrors (fix the errors instead)
  // Remove: images.unoptimized (use optimizer defaults)
}

export default nextConfig
```

**Caveat:** Test locally with `pnpm build && pnpm start` after adding `output: 'export'` — some `'use client'` components may need review.

### P4 — Fix Body Scroll Lock Bug in `navigation.tsx`

The scroll lock cleanup unconditionally clears `overflow = ""`, which is unsafe under React 19 concurrent mode and will break if any other component also sets `overflow`.

```tsx
// navigation.tsx — fix the scroll lock effect
useEffect(() => {
  if (!mobileOpen) return;
  const prior = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  return () => { document.body.style.overflow = prior; };
}, [mobileOpen]);
```

### P5 — Fix Scroll Progress Bar Mount/Unmount

The progress bar conditionally renders via `{scrolled && (...)}`, which hard-mounts/unmounts at the 40px scroll threshold, defeating its own 150ms CSS transition.

```tsx
// navigation.tsx — render always, control via opacity
<div
  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-navy-mid/30 transition-opacity duration-300 ${
    scrolled ? "opacity-100" : "opacity-0"
  }`}
>
  <div
    className="h-full bg-gold/60 transition-[width] duration-150 ease-out"
    style={{ width: `${scrollProgress}%` }}
  />
</div>
```

### P6 — Add Resize Handler to Close Mobile Menu

Without this, opening the mobile menu then resizing the viewport to desktop keeps the body scroll lock active invisibly.

```tsx
// navigation.tsx — add inside the component
useEffect(() => {
  if (!mobileOpen) return;
  const handleResize = () => {
    if (window.innerWidth >= 1024) setMobileOpen(false);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [mobileOpen]);
```

### P7 — Add `@vercel/speed-insights`

Speed Insights tracks real Core Web Vitals from actual visitors. Complement to Analytics (which tracks page views).

```bash
pnpm add @vercel/speed-insights
```

```tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

// Inside body:
<SpeedInsights />
```

Enable in Vercel dashboard → Project → Speed Insights tab → Enable.

---

## Content Update Runbook

When Jordan requests changes after reviewing the URL:

1. Make edits to the relevant component in `/components/proposal/`
2. Run `pnpm build` locally — verify exit 0
3. Push to `main`: `git add -p && git commit -m "content: [description]" && git push origin main`
4. If using GitHub integration: Vercel auto-deploys on push to `main`
5. If using CLI: run `npx vercel --prod` — **same production URL, updated content**
6. Notify Jordan via the same channel the URL was sent: "Updated — please hard-refresh (Cmd+Shift+R)"
7. The URL does not change on re-deploy when using `--prod`

---

## Rollback Procedure

**Time to rollback: under 60 seconds**

1. Go to `vercel.com/ChunkyTortoise/jewkes-consulting-redesign/deployments`
2. Find the prior deployment (each has a unique immutable URL)
3. Click the three-dot menu → "Promote to Production"
4. Production traffic instantly routes to the prior snapshot — no rebuild, no git revert

**Rollback does not fix:** If this is the first deploy with a bug, there is no prior snapshot. In that case, push a fix commit and redeploy.

---

## Monitoring Plan (First 24 Hours)

| Check | When | Location | Alert Condition |
|-------|------|----------|-----------------|
| Deployment status | Immediately | Vercel dashboard → Deployments | Any red status → rollback |
| First pageview | +5 min after sending URL | Vercel Analytics tab | No view within 24h → follow up with Jordan |
| 5xx errors | +1h | Vercel Logs | Any 5xx → rollback |
| Blank page | On share | Open in incognito | Hydration error → check console → rollback |
| Mobile rendering | On share | Send from phone | Layout broken → fix and redeploy |

---

## MVP Files

### vercel.json

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none';" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### public/robots.txt

```
User-agent: *
Disallow: /
```

### smoke-test.sh

```bash
#!/bin/bash
URL="${1:-https://jewkes-consulting-redesign.vercel.app}"
echo "Testing $URL..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
XFRAME=$(curl -sI "$URL" | grep -i "x-frame-options")
if [ "$STATUS" = "200" ]; then
  echo "✅ Site live — HTTP $STATUS"
else
  echo "❌ Unexpected status — HTTP $STATUS"
  exit 1
fi
if [ -n "$XFRAME" ]; then
  echo "✅ Security headers present — $XFRAME"
else
  echo "⚠️  X-Frame-Options header missing — check vercel.json"
fi
```

---

## Sources

- Repo: `github.com/ChunkyTortoise/jewkes-consulting-redesign`
- Vercel docs: https://vercel.com/docs/frameworks/nextjs
- Vercel security headers: https://vercel.com/docs/edge-network/headers
- Next.js font optimization: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Client contact: Jordan Jewkes (meeting held Feb 23, 2026)
- Research agents: deployment-verification-agent · security-sentinel · performance-oracle · best-practices-researcher · julik-frontend-races-reviewer · spec-flow-analyzer
