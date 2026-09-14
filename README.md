````markdown
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
````

The main CTAs, including:

```text
Join the waitlist
Follow the project
```

should use the same canonical registration workflow.

Waitlist submissions should be:

* validated server-side;
* normalized before persistence;
* duplicate-safe;
* stored in Supabase;
* followed by a welcome email for new registrations.

Repeated submissions from an existing subscriber should not create duplicate records or repeatedly send welcome emails.

---

## Environment Variables

Create a local `.env.local` file when running the project locally.

Required variables may include:

```env
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-publishable-key>
RESEND_API_KEY=<your-resend-api-key>
```

Additional environment variables may be required depending on the final production configuration.

### Security

Never commit:

* private API keys;
* service-role credentials;
* database passwords;
* authentication tokens;
* `.env.local`.

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser and must never contain server-side secrets.

Supabase access must remain protected by the intended database permissions and Row Level Security policies.

---

## Local Development

### Requirements

* Node.js 18+
* npm
* access to the required development environment variables

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Quality Checks

Before merging changes into `main`, run the applicable checks:

```bash
npm run build
```

TypeScript:

```bash
npx tsc --noEmit
```

Lint:

```bash
npm run lint
```

Also verify manually:

* desktop rendering;
* mobile rendering;
* English content;
* French content;
* waitlist CTA behavior;
* successful Supabase registration;
* duplicate registration handling;
* welcome email delivery;
* internal and external links.

---

## Deployment

Production deployments are handled through **Vercel**.

Recommended workflow:

```text
feature/fix branch
        ↓
Pull Request
        ↓
Vercel Preview
        ↓
Review + automated checks
        ↓
Merge into main
        ↓
Vercel Production deployment
        ↓
trade-safe.ai
```

Do not push unreviewed production changes directly to `main`.

---

## Repository Scope

This repository is intentionally limited to the public TradeSafe website and related services.

It should not contain:

* proprietary trading strategy specifications;
* automated strategy-engine implementation;
* broker execution logic;
* RiskGovernor implementation;
* research datasets;
* private backtest results;
* broker credentials.

---

## Related Project

The new deterministic trading engine is developed separately in the private repository:

```text
tch-trading-system
```

That project covers the internal architecture for areas such as:

```text
Market Data
→ Feature Engine
→ Market Regime
→ Strategy Routing
→ Strategy Logic
→ Risk Governance
→ Execution
```

The two repositories must remain operationally separate:

```text
tradesafe-landing
→ public product / marketing / waitlist

tch-trading-system
→ private trading-system research and engineering
```

Internal TCH strategy specifications and proprietary research must not be copied into this public repository.

---

## Project Structure

High-level structure:

```text
tradesafe-landing/
├── app/
│   ├── api/
│   │   └── waitlist/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── NextGeneration.tsx
│   ├── EmailModal.tsx
│   ├── EmailForm.tsx
│   └── ...
│
├── emails/
│   └── WaitlistWelcome.tsx
│
├── lib/
│   └── supabase.ts
│
├── messages/
│   ├── en.json
│   └── fr.json
│
└── public/
```

This structure should be updated if the implementation materially changes.

---

## Product Messaging

Current primary positioning:

```text
Your AI Trading Copilot
```

Current supporting message:

```text
Turn backtested strategies into consistent, profitable trading.
```

The landing page also introduces the next generation of TradeSafe as a system under active research and development.

Public messaging must remain consistent with the actual development status of the product.

---

## Maintenance

When the product positioning or architecture changes, keep the following aligned:

* landing-page copy;
* English and French translations;
* browser metadata;
* SEO title and description;
* Open Graph metadata;
* welcome email;
* waitlist workflow;
* this README.

Avoid leaving historical launch dates, pricing, feature promises or obsolete positioning in the repository.

---

## License / Ownership

TradeSafe is a proprietary project maintained by **Trade-Safe**.

All rights reserved.

````
