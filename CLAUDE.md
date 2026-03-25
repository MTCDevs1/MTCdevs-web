# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also runs TypeScript check)
npm run lint     # ESLint
```

## Architecture

One-page marketing website for **GoDev** — a digital solutions company targeting SMBs.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion ·  Lucide React

**Key conventions:**
- All section components live in `src/components/` and are assembled in `src/app/page.tsx`
- Every section component is a `"use client"` component using Framer Motion `useInView` for scroll-triggered entrance animations
- Legal pages (`/privacy`, `/terms`) are in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`
- Global design tokens (colors, glow effects, grid background, gradient text) are defined as CSS utilities in `src/app/globals.css` — prefer those classes over inline Tailwind for visual effects
- The dark background color is `#07070f`, set in both `globals.css` and `layout.tsx`

**Animation pattern:** Use inline `initial`/`animate`/`transition` props rather than the `variants` + `custom` pattern — the current framer-motion version has strict TypeScript types that reject the `TargetResolver` variant signature.

**Contact:** `contact@godev.com` · WhatsApp `+59895694578`

**Sections order:** Hero → Problems → Solutions → WhyGoDev → Process → BeforeAfter → Portfolio → LeadMagnet → Contact → Footer + FloatingWhatsApp (fixed overlay)

**Portfolio section** is a placeholder — it's designed to be swapped out with real project cards later.

**Contact form** currently simulates submission with a `setTimeout`. Wire up to a real backend/email service (e.g. Resend, Formspree) when ready.
