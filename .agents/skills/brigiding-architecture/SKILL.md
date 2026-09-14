---
name: brigiding-architecture
description: Project architecture reference, 5-layer Express backend guidelines, React MVVM pattern, 18-table schema, and client design system rules for the Brigiding Website platform.
---

# Brigiding Architecture & Coding Standards

When building, modifying, or extending features in this repository, follow these mandatory guidelines:

## 1. Client Design System Rules (See .agents/rules/client_design_directives.md)
- **Typography (Max 2 Fonts)**: `DM Serif Text` (editorial headlines) and `Manrope` (body, navigation, buttons).
- **Navigation (Top Menu)**: Strictly 4 links: `HOME`, `TICKETS`, `ARTIST`, `COMMUNITY`. Silver text turning Gold (`#C9A84C`) on hover/active.
- **Social Icons**: Strictly 3 icons: **IG** (Instagram), **FB** (Facebook), **YT** (YouTube) in Gold outline (`#C9A84C`).
- **Hero Carousel**: 5-slide 5-second auto-change carousel with 5 star indicators (silver $\rightarrow$ gold).
- **ART Section**: 12 pictures in 3 columns x 4 rows.
- **Form Dropdown Locations**: Metro Manila, Luzon, Visayas, Mindanao, United States, Canada, Thailand, Vietnam, Taiwan, Australia, Japan.

## 2. Frontend Standards (React + MVVM)
- **State Management**: Encapsulate component state and API side-effects inside custom ViewModel hooks (`client/src/viewmodels/`).
- **Styling**: Always use CSS design tokens defined in `client/src/styles/variables.css`. Maintain `#0A0D1A` dark navy, `#C9A84C` gold, and `#F5F0E8` cream palette.

## 3. Backend Standards (5-Layer Express API)
- `Routes` $\rightarrow$ `Middleware` $\rightarrow$ `Controllers` $\rightarrow$ `Services` $\rightarrow$ `Repositories` $\rightarrow$ `Supabase DB`.

## 4. Git Workflow
- Always create feature/chore branches using the `Category/Ticket-Description` pattern:
  - `feature/homepage-storytelling-carousel`
  - `chore/update-config`
  - `bugfix/fix-issue-name`
