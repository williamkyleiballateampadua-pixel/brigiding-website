# Implementation Plan: Architecture Documentation & Workspace Rules Setup

This plan details the creation of persistent architectural guidelines, system logic, MVVM patterns, 5-layer backend standards, and design system specifications inside the `.agents/` directory for long-term project reference.

---

## User Review Required

> [!IMPORTANT]
> **Persistent Architecture & Rules Configuration:**
> 1. We will record the complete **5-Layer Express Backend** (`Routes` $\rightarrow$ `Controllers` $\rightarrow$ `Services` $\rightarrow$ `Repositories` $\rightarrow$ `Supabase`), **React MVVM Pattern**, **18-Table Database Schema**, **6 REST API Domains**, and **Regal Navy & Gold Design System** into `.agents/rules/architecture_and_design_system.md`.
> 2. We will also create a dedicated skill folder `.agents/skills/brigiding-architecture/SKILL.md` so future agent sessions can immediately reference the full project specification without losing context.

---

## Proposed Changes

```
brigiding-website/
└── .agents/
    ├── rules/
    │   ├── git_conventions.md                 # Category/Ticket-Description Git branch rules
    │   └── architecture_and_design_system.md  # System overview, 5-layer backend, MVVM, 18-table DB schema & design tokens
    └── skills/
        └── brigiding-architecture/
            └── SKILL.md                       # Comprehensive skill reference for project architecture
```

---

### Step 1: Create Comprehensive Workspace Rule
#### [NEW] [.agents/rules/architecture_and_design_system.md](file:///c:/Users/William%20Kyle/Development/react/brigiding-website/.agents/rules/architecture_and_design_system.md)
Documents:
- **System Purpose**: Personal brand digital portfolio, lead generation, booking channels, and exclusive merch drops.
- **Frontend Architecture**: React (Vite) + MVVM pattern (`Models` interfaces, `Services` API clients, `ViewModels` custom hooks, `Components` presentation views).
- **Backend Architecture (5-Layer Monolithic Express API)**:
  1. `Routes`: URL mapping (`/api/v1/*`).
  2. `Middleware`: Auth JWT verification, RBAC, Zod validation, Error handling.
  3. `Controllers`: Request parsing & response formatting.
  4. `Services`: Business logic, calculations, Typeform parser.
  5. `Repositories` & `Supabase DB`: PostgreSQL query execution.
- **Full Database Schema (18 Tables & ENUMs)**: USERS, PROFILES, ADDRESSES, EVENTS, GALLERY_ITEMS, PORTFOLIO_MILESTONES, SITE_ANNOUNCEMENTS, BOOKING_INQUIRIES, TICKET_APPLICATIONS, CATEGORIES, PRODUCTS, PRODUCT_VARIANTS, CARTS, CART_ITEMS, ORDERS, ORDER_ITEMS, PAYMENTS, SHIPMENTS.
- **Design Tokens**: Dark Navy (`#080C14`), Regal Gold (`#D4AF37`), Editorial Cream (`#F7F4EE`), `Playfair Display` serif headlines, `Montserrat` body.

---

### Step 2: Create Persistent Custom Skill
#### [NEW] [.agents/skills/brigiding-architecture/SKILL.md](file:///c:/Users/William%20Kyle/Development/react/brigiding-website/.agents/skills/brigiding-architecture/SKILL.md)
Creates a reusable skill instruction file detailing how to maintain, extend, and implement features matching the Brigiding project conventions.

---

## Verification Plan

1. Verify `.agents/rules/architecture_and_design_system.md` file format and completeness.
2. Verify `.agents/skills/brigiding-architecture/SKILL.md` YAML frontmatter and instruction guidelines.
3. Commit documentation to git on branch `chore/architecture-documentation`.
