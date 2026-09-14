# Implementation Plan: Brigiding Personal Brand & Lead Generation Platform

This implementation plan outlines the architecture, database schema, REST API domains, and deployment workflow for the **Brigiding Personal Brand & Lead Generation Website**. The plan incorporates your detailed business requirements, 18-table relational schema, 6-domain API specification, and modular monolithic architecture (Express backend + React MVVM frontend).

---

## Phased Rollout Overview

- **Phase 1 (Immediate Execution):** 
  - **Step 1:** Git Repository Initialization & GitHub Remote Push Guide.
  - **Step 2:** Local Preparation of Supabase SQL Migrations (18 tables), Seed Data, & Supabase SDK Setup.
  - **Step 3:** Vercel Deployment Config (`vercel.json`) & Environment Variable Templates (`.env.example`).
- **Phase 2:** Express REST API Layer & Supabase Repository Integration (Domains 1–3).
- **Phase 3:** React Frontend (MVVM) Design System, Public Brand & Lead Capture (Typeform + Ticket Forms).
- **Phase 4:** Merch Storefront, Payments (Stripe/PayMongo), & Admin Management Dashboard (Domains 4–6).

---

## User Review Required

> [!IMPORTANT]
> **Start-from-Scratch Strategy (GitHub $\rightarrow$ Supabase $\rightarrow$ Vercel):**
> We will guide you step-by-step right from the beginning:
> 1. Initialize local Git repository & setup `.gitignore`.
> 2. Create local SQL migration scripts (`001_initial_schema.sql` & `002_seed_data.sql`), Supabase SDK helpers, and Vercel configuration files.
> 3. Connect your project to GitHub, Supabase, and Vercel.

---

## Step-by-Step Complete Beginner Guide

### Step 1: GitHub Repository Setup
1. Open GitHub ([github.com](https://github.com)) and click **New Repository**.
2. Name it `brigiding-website`, set visibility to **Public** or **Private**, and click **Create repository** (do not check "Initialize with README").
3. Copy the repository URL (e.g., `https://github.com/<your-username>/brigiding-website.git`).
4. In our project terminal, we will run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Project structure, Supabase migrations & Vercel config"
   git branch -M main
   git remote add origin https://github.com/<your-username>/brigiding-website.git
   git push -u origin main
   ```

### Step 2: Free Supabase Setup (Database)
1. Sign up for free at [supabase.com](https://supabase.com).
2. Click **New Project**, name it `brigiding-website`, set your database password, and select your region.
3. In **Project Settings $\rightarrow$ API**, copy your `Project URL`, `anon / public key`, and `service_role key`.
4. Go to **SQL Editor** in Supabase dashboard:
   - Paste content from `server/src/db/migrations/001_initial_schema.sql` $\rightarrow$ Click **Run**.
   - Paste content from `server/src/db/migrations/002_seed_data.sql` $\rightarrow$ Click **Run**.

### Step 3: Free Vercel Setup (Continuous Deployment)
1. Sign up at [vercel.com](https://vercel.com) using your GitHub account.
2. Click **Add New... $\rightarrow$ Project**.
3. Import `brigiding-website` from your GitHub repos.
4. Under **Environment Variables**, add `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY`.
5. Click **Deploy**! (Every push to GitHub will now automatically deploy your website!).

---

## Proposed Changes

```
brigiding-website/
├── .gitignore                  # Excludes node_modules, .env, build artifacts
├── vercel.json                 # Vercel deployment configuration (Frontend SPA + Serverless Express API)
├── .env.example                # Shared environment variable template
├── client/                     # React Frontend (MVVM Architecture)
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
│       ├── styles/             # Design Tokens & Typography
│       ├── models/             # Interfaces matching DB Schema
│       ├── viewmodels/         # MVVM State logic
│       ├── services/           # REST API client
│       └── components/         # Hero, Gallery, Events, Typeform CTA, Store
│
└── server/                     # Express Backend & Supabase DB Layer
    ├── package.json
    ├── vercel.json             # Serverless Express handler config
    └── src/
        ├── db/
        │   ├── supabase.ts     # Supabase Client setup
        │   └── migrations/
        │       ├── 001_initial_schema.sql # Complete 18-table schema DDL
        │       └── 002_seed_data.sql      # Seed data (Events, Gallery, Announcements)
        ├── repositories/       # Supabase data access
        ├── services/           # Business logic & Typeform Webhook
        ├── controllers/        # Request/Response handlers
        └── routes/             # REST API routes (Domains 1-6)
```

---

### Phase 1 Execution Details

#### [NEW] [.gitignore](file:///c:/Users/William%20Kyle/Development/react/brigiding-website/.gitignore)
- Git ignore file preventing node_modules, dist, .env, logs, and system files from being committed.

#### [NEW] [001_initial_schema.sql](file:///c:/Users/William%20Kyle/Development/react/brigiding-website/server/src/db/migrations/001_initial_schema.sql)
Creates custom ENUM types and all 18 PostgreSQL tables matching your domain model:
- `USERS`, `PROFILES`, `ADDRESSES`, `EVENTS`, `GALLERY_ITEMS`, `PORTFOLIO_MILESTONES`, `SITE_ANNOUNCEMENTS`, `BOOKING_INQUIRIES`, `TICKET_APPLICATIONS`, `CATEGORIES`, `PRODUCTS`, `PRODUCT_VARIANTS`, `CARTS`, `CART_ITEMS`, `ORDERS`, `ORDER_ITEMS`, `PAYMENTS`, `SHIPMENTS`.

#### [NEW] [002_seed_data.sql](file:///c:/Users/William%20Kyle/Development/react/brigiding-website/server/src/db/migrations/002_seed_data.sql)
- Seed script for events (*DragCon Brasil 2026*), Lookbook photos, ticker announcements, and product categories.

#### [NEW] [server/src/db/supabase.ts](file:///c:/Users/William%20Kyle/Development/react/brigiding-website/server/src/db/supabase.ts)
- Supabase SDK client initialization script with environment variable validation.

#### [NEW] [vercel.json](file:///c:/Users/William%20Kyle/Development/react/brigiding-website/vercel.json)
- Routing rules for Express serverless function API (`/api/*`) and React SPA build.

#### [NEW] [.env.example](file:///c:/Users/William%20Kyle/Development/react/brigiding-website/.env.example)
- Documents required environment variable keys for local dev and cloud deployment.

---

### Phase 2: Express Backend REST API Layer (Domains 1–3)
- Authentication & User Profiles (`/api/v1/auth`, `/api/v1/profile`)
- Brand Content, Events & CMS (`/api/v1/site`, `/api/v1/events`, `/api/v1/gallery`, `/api/v1/milestones`)
- Lead Generation & Typeform Ingestion (`/api/v1/inquiries`, `/api/v1/tickets/apply`, `/api/v1/webhooks/typeform`)

---

### Phase 3: React Frontend (MVVM) & Design System
- High-fashion regal dark navy & gold design system.
- Typeform redirect CTA integration for bookings & inquiries.
- Ticket application modal with Supabase persistence.

---

### Phase 4: Merchandise Storefront & Admin CMS
- API Domains 4–6 (Catalog, Cart, Payments, Admin Lead Pipeline).

---

## Verification Plan

### Phase 1 Verification
1. Verify git repository status (`git status`) and `.gitignore` file.
2. Verify SQL migration files syntax (`001_initial_schema.sql`, `002_seed_data.sql`).
3. Verify Supabase client instantiation logic and `vercel.json` routing configuration.
