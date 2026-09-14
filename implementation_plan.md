# Implementation Plan: Bottom-Up UI Build & Reconciled Design System

This implementation plan adopts a **Bottom-Up Development Workflow** for the Brigiding website frontend:
1. **Initialize Styles**: Populate `variables.css`, `typography.css`, and `animations.css` using our design rules.
2. **Build Components Bottom-Up**: Implement common layout components (`Navbar.tsx`, `Footer.tsx`) first, followed by feature sections (`HeroCarousel.tsx`, `ArtGallery.tsx`, `EventsSection.tsx`, `CommunitySection.tsx`).
3. **Assemble the Page**: Wire components together inside `pages/Home.tsx` and run verification.

---

## 1. Recommendation Analysis: Why this approach is ideal

> [!TIP]
> **Why the Bottom-Up workflow is recommended:**
> - **Foundation First**: Defining CSS variables and typography rules first guarantees that all components use centralized tokens (`#0A0D1A` Navy, `#C9A84C` Gold, `DM Serif Text`, `Manrope`) with zero style duplication.
> - **Structural Framing**: Building `Navbar.tsx` and `Footer.tsx` first creates the header/footer frame of the application.
> - **Isolated Section Execution**: Building feature components (`HeroCarousel`, `ArtGallery`, `EventsSection`, `CommunitySection`) sequentially prevents clutter and ensures each section matches the client specs before page assembly.

---

## 2. Reconciled Client Design Specifications

| Component | Design Rules & Specifics |
| :--- | :--- |
| **Navbar.tsx** | `90px` height, `#0A0D1A` background. **4 Links ONLY**: `HOME`, `TICKETS`, `ARTIST`, `COMMUNITY` (Silver text turning Gold `#C9A84C` on hover). **3 Social Icons ONLY**: **IG**, **FB**, **YT** in Gold outline. |
| **HeroCarousel.tsx** | **5-Slide Carousel** (5-sec timer) with **5 Silver Star indicators** turning Gold for active slide. Slides: *Join Our Community*, *First Drag Race Slaysian Royale Superstar*, *Mother of the House of Ding*, *Show Producer*, *Podcaster: Beyond the Brand*. |
| **ArtGallery.tsx** | Breaker title **`ART`** + **12 Pictures total** (3 columns $\times$ 4 rows) spanning full viewport width. |
| **EventsSection.tsx** | Lowercase heading **`events`** with show cards (*D Intervention S3 Party*, *Drag Arena International*, *DDXCXOTA Dance Party*). |
| **CommunitySection.tsx** | **`JOIN OUR COMMUNITY`** form with location dropdown (*Metro Manila, Luzon, Visayas, Mindanao, United States, Canada, Thailand, Vietnam, Taiwan, Australia, Japan* in alphabetical order after PH regions). |
| **Footer.tsx** | `#11162E` background, motto *"Art · Community · Empowerment"*, IG/FB/YT gold icons, copyright, and *"✦ QUEEN OF THE STAGE"* accent. |

---

## User Review Required

> [!IMPORTANT]
> **Preserved Rules in `.agents/`:**
> The master logic has been committed to Git and saved in:
> 1. [`.agents/rules/client_design_directives.md`](file:///c:/Users/William%20Kyle/Development/react/brigiding-website/.agents/rules/client_design_directives.md)
> 2. [`.agents/skills/brigiding-architecture/SKILL.md`](file:///c:/Users/William%20Kyle/Development/react/brigiding-website/.agents/skills/brigiding-architecture/SKILL.md)

---

## Proposed Execution Steps

```
brigiding-website/
└── client/
    ├── index.html                      # Imports DM Serif Text & Manrope Google Fonts
    └── src/
        ├── styles/                     # STEP 1: INITIALIZE STYLES
        │   ├── variables.css           # Color tokens: #0A0D1A, #11162E, #C9A84C, #F5F0E8
        │   ├── typography.css          # DM Serif Text (headlines) & Manrope (body/nav)
        │   ├── animations.css          # Star pulse & continuous marquee ticker ribbon
        │   └── main.css                # Full-width layout wrappers & button styles
        ├── components/                 # STEP 2: BUILD COMPONENTS BOTTOM-UP
        │   ├── common/
        │   │   ├── Navbar.tsx          # 90px header with 4 links, silver-to-gold hover, IG/FB/YT gold icons
        │   │   ├── MarqueeTicker.tsx   # Solid gold ribbon ticker ("CONFIRMADA")
        │   │   └── Footer.tsx          # Footer with motto, IG/FB/YT, copyright
        │   ├── hero/
        │   │   └── HeroCarousel.tsx    # 5-slide auto-carousel with 5 star indicators
        │   ├── art/
        │   │   └── ArtGallery.tsx      # ART breaker + 12 pictures in 3x4 grid
        │   ├── events/
        │   │   └── EventsSection.tsx   # "events" section with 3 show cards
        │   └── community/
        │       └── CommunitySection.tsx# "JOIN OUR COMMUNITY" form with PH & international locations
        └── pages/                      # STEP 3: ASSEMBLE PAGE
            └── Home.tsx                # Single-page storytelling landing page
```

---

## Verification Plan

1. **Step-by-Step Verification:**
   - Verify design tokens in `variables.css` and font loading in `index.html`.
   - Test `Navbar.tsx` 4 nav links and IG/FB/YT gold outline icons.
   - Test `HeroCarousel.tsx` 5-second auto-slide and 5 star indicators (silver $\rightarrow$ gold).
   - Test `ArtGallery.tsx` 12-picture 3x4 layout.
   - Verify `Home.tsx` assembly at `http://localhost:5173`.
