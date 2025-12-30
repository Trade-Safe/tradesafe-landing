# TradeSafe Landing Page

AI-Powered Discipline System for Retail Traders

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- A Vercel account (free)
- A GitHub account

### 1. Setup Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

The file already contains your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://ukqzkiphndcnmnpmoqfy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_1Szc-72ZCTeOe7v0m4a6_A_d4UHqdMl
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📦 Deployment to Vercel

### Option A: Deploy via GitHub (Recommended)

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `tradesafe-landing`
   - Public or Private (your choice)
   - Click "Create repository"

2. **Upload Your Code**
   - Download this entire project folder
   - On GitHub, click "uploading an existing file"
   - Drag and drop ALL files (including hidden files like .gitignore)
   - Click "Commit changes"

3. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

4. **Add Environment Variables in Vercel**
   - In project settings, go to "Environment Variables"
   - Add these two variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL = https://ukqzkiphndcnmnpmoqfy.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY = sb_publishable_1Szc-72ZCTeOe7v0m4a6_A_d4UHqdMl
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at: `https://tradesafe-xxx.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## 🌐 Custom Domain Setup

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add domain: `trade-safe.ai`
   - Vercel will give you nameservers

2. **In NameCheap**
   - Go to your domain management
   - Select "Custom DNS"
   - Add Vercel's nameservers:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```
   - Save changes

3. **Wait for DNS Propagation**
   - Usually takes 1-24 hours
   - Check status: https://www.whatsmydns.net/

## 📊 Supabase Database

Your waitlist table structure:

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT
);
```

To view signups:
1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to "Table Editor" → "waitlist"

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Email Capture**: Custom API route

## 📁 Project Structure

```
tradesafe-landing/
├── app/
│   ├── api/subscribe/     # API endpoint for email capture
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── HowItWorks.tsx
│   ├── Footer.tsx
│   └── EmailForm.tsx      # Email form with popup
├── lib/
│   └── supabase.ts        # Supabase client
└── public/                # Static assets
```

## ✅ Testing Checklist

Before going live:

- [ ] Test email submission
- [ ] Verify emails appear in Supabase
- [ ] Test duplicate email prevention
- [ ] Check popup appears correctly
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check page load speed

## 🚨 Troubleshooting

**Email not submitting:**
- Check browser console for errors
- Verify Supabase credentials in Vercel
- Check Supabase table exists and has correct columns

**DNS not working:**
- Wait 24 hours for full propagation
- Clear browser cache
- Try incognito mode

**Build fails on Vercel:**
- Check all files uploaded to GitHub
- Verify package.json is present
- Check Vercel build logs for specific errors

## 📧 Support

For issues, check:
- Vercel logs: Project → Deployments → Click deployment → Logs
- Supabase logs: Dashboard → Logs
- Browser console: F12 → Console tab

## 🎯 Next Steps

1. Deploy and test
2. Launch Google Ads campaign
3. Monitor email signups
4. Prepare for MVP development

---

**Built with ❤️ for retail traders**
