# Implementation Plan: Detailed Figma Code & Screenshot Analysis & Homepage Build

This plan analyzes the Figma auto-layout code and 4 screenshot images you provided, answers your question about the code contents, and outlines the precise implementation strategy.

---

## 1. Analysis: What did the code you sent contain?

> [!NOTE]
> **Answer:** The code you pasted is **NOT** just the hero page! It is the complete Figma layout code for the **ENTIRE Homepage Landing Page** (total height `5108px` by `1440px` width). It contains all **10 major sections**:
>
> 1. `navigation-bar`: `90px` sticky top header (`#0A0D1A`) with logo, links, and gold social icons.
> 2. `hero-section`: `720px` 50/50 split hero with editorial text on left & DragCon Brasil portrait on right.
> 3. `marquee-ticker`: `65px` gold ribbon ticker (`#C9A84C`) scrolling `"CONFIRMADA · CONFIRMADA"`.
> 4. `featured-event-banner`: `448px` spotlight card (`#11162E`) for *São Paulo DragCon Brasil 2026*.
> 5. `gallery-intro`: `248px` section header (`#F5F0E8` Cream) `"An editorial life in full color"`.
> 6. `gallery-grid-masonry`: `1544px` section (`#F5F0E8` Cream) with 3 rows of masonry lookbook photos.
> 7. `event-highlights-section`: `789px` section (`#11162E`) `"Catch the fire live"` with 3 show cards.
> 8. `press-quote-section`: `445px` section (`#0A0D1A`) with gold star icon & editorial quote.
> 9. `call-to-action-section`: `479px` section (`#F5F0E8` Cream) `"Ready for your front-row moment?"`.
> 10. `footer`: `280px` footer (`#11162E`) with logo, motto `"Art · Community · Empowerment"`, and copyright.

---

## 2. Client Modifications Applied to the Figma Code

We merge the Figma layout code with your client's specific design directives:

| Feature | Figma Code / Mockup | Client's Specific Revision |
| :--- | :--- | :--- |
| **Top Nav Links** | `HOME · EVENTS · TICKETS · ABOUT · CONTACT` | Limit to **4 Links ONLY**: `HOME`, `TICKETS`, `ARTIST`, `COMMUNITY` |
| **Social Icons** | 4 generic vector boxes | Limit to **3 Icons ONLY**: **IG** (Instagram), **FB** (Facebook), **YT** (YouTube) in Gold outline (`#C9A84C`) |
| **Nav Text Colors** | White `#FFFFFF` | Silver/White (`#FFFFFF`) default $\rightarrow$ turns Gold (`#C9A84C`) on hover/active |
| **Fonts** | `DM Serif Text` & `Manrope` | Max 2 fonts: `DM Serif Text` (headlines) & `Manrope` (body/buttons/nav) |
| **Colors** | `#0A0D1A` Navy, `#C9A84C` Gold, `#F5F0E8` Cream | Strict adherence to exact hex codes from Figma CSS |

---

## Proposed Changes

```
brigiding-website/
└── client/
    ├── index.html                      # Includes DM Serif Text & Manrope Google Fonts
    └── src/
        ├── styles/
        │   ├── variables.css           # Color tokens: #0A0D1A, #11162E, #C9A84C, #F5F0E8
        │   ├── typography.css          # DM Serif Text (headlines) & Manrope (body/nav)
        │   ├── animations.css          # Marquee ticker ribbon animation
        │   └── main.css                # Layout containers & button styles
        ├── components/
        │   ├── common/
        │   │   ├── Navbar.tsx          # 90px #0A0D1A header, logo, 4 links, IG/FB/YT gold icons
        │   │   ├── MarqueeTicker.tsx   # 65px gold #C9A84C ribbon ticker
        │   │   └── Footer.tsx          # 280px #11162E footer with motto & copyright
        │   ├── hero/
        │   │   └── HeroSection.tsx     # 720px 50/50 hero split matching screenshot 1
        │   ├── events/
        │   │   ├── ShowHighlight.tsx   # 448px São Paulo DragCon Brasil 2026 showcase banner
        │   │   └── UpcomingShows.tsx   # 789px Catch the Fire Live 3-card section
        │   ├── gallery/
        │   │   └── LookbookGallery.tsx # 1792px Cream section matching screenshot 2
        │   ├── quotes/
        │   │   └── QuoteBanner.tsx     # 445px Press quote section matching screenshot 3
        │   └── forms/
        │       └── BookingCtaSection.tsx# 479px Front-row CTA section matching screenshot 4
        └── pages/
            └── Home.tsx                # Complete 10-section single-page layout
```

---

## Verification Plan

1. **Exact Visual Match Check:**
   - Launch dev server (`npm run dev`) and open `http://localhost:5173`.
   - Compare side-by-side with your 4 uploaded screenshots.
   - Verify font rendering (`DM Serif Text` headlines & `Manrope` body).
   - Verify hover effect on Nav links (Silver $\rightarrow$ Gold `#C9A84C`).
   - Verify 3 social icons (IG, FB, YT) in Gold outline.
