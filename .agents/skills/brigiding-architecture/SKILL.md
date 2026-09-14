---
name: brigiding-architecture
description: Project architecture reference, 5-layer Express backend guidelines, React MVVM pattern, 18-table schema, and design system rules for the Brigiding Website platform.
---

# Brigiding Architecture & Coding Standards

When building, modifying, or extending features in this repository, follow these mandatory guidelines:

## 1. Frontend Standards (React + MVVM)
- **State Management**: Encapsulate component state and API side-effects inside custom ViewModel hooks (`client/src/viewmodels/`).
- **Styling**: Always use CSS design tokens defined in `client/src/styles/variables.css`. Maintain the regal navy (`#0B0F19`) and gold (`#D4AF37`) high-fashion editorial aesthetic.
- **Components**: Keep components focused on UI rendering. Derive layout and interaction logic from ViewModels.

## 2. Backend Standards (5-Layer Express API)
- **Routes (`server/src/routes/`)**: Map HTTP verbs to controller methods under `/api/v1/`.
- **Middleware (`server/src/middleware/`)**: Perform authentication, RBAC, and Zod input validation.
- **Controllers (`server/src/controllers/`)**: Extract request parameters and delegate business logic to Services. Do not write raw DB queries in controllers.
- **Services (`server/src/services/`)**: Implement business logic, validations, and data transformations.
- **Repositories (`server/src/repositories/`)**: Perform database queries using `supabasePublic` or `supabaseAdmin`.

## 3. Database Schema (18 Tables)
- Use exact column names matching `server/src/db/migrations/001_initial_schema.sql`.
- Enforce RLS policies for public data reads and lead submissions.

## 4. Git Workflow
- Always create feature/chore branches using the `Category/Ticket-Description` pattern:
  - `feature/add-component-name`
  - `chore/update-config`
  - `bugfix/fix-issue-name`
