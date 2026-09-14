# TradeSafe Landing Page

Public landing page for **TradeSafe**.

> **Your AI Trading Copilot**  
> Turn backtested strategies into consistent, profitable trading.

Production: https://trade-safe.ai

---

## About TradeSafe

TradeSafe is evolving from its original behavioral trading discipline concept into a broader trading technology platform.

The next generation of TradeSafe is being designed around:

- AI-assisted trading workflows
- Market regime analysis
- Strategy routing
- Risk governance
- Safe execution
- Deterministic, event-driven trading automation

The automated trading engine itself is developed separately from this public landing page.

This repository contains only the **TradeSafe marketing website, waitlist workflow and related public-facing functionality**.

---

## Current Status

TradeSafe is currently in **research and development**.

The landing page is used to:

- present the current product direction;
- communicate development progress;
- collect waitlist registrations;
- provide future early-access updates.

Automated live trading is not currently offered through the landing page.

---

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS
- **Database:** Supabase / PostgreSQL
- **Transactional Email:** Resend
- **Hosting & Deployments:** Vercel
- **Source Control:** GitHub

---

## Waitlist Workflow

The canonical waitlist flow is:

```text
Landing page CTA
        ↓
Email modal / form
        ↓
POST /api/waitlist
        ↓
Supabase waitlist table
        ↓
Resend welcome email
