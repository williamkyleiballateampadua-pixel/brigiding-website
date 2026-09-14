# Client Design Directives & Reconciled Figma Specification

This document contains the official reconciled design rules, combining the client's explicit comments (Sept 10, 2026) with the Figma auto-layout prototype.

---

## 1. Global Design & Branding Rules

* **Typography (Max 2 Fonts)**:
  - **Headlines**: Editorial serif (`DM Serif Text` / `Playfair Display`)
  - **Body / Navigation / Buttons**: Modern sans-serif (`Manrope` / `Montserrat`)
* **Color Palette**:
  - Main Background: `#0A0D1A` (Dark Navy) & Cream `#F5F0E8` (Gallery & CTA sections)
  - Gold Accents: Gold `#C9A84C` (Logo, badges, active indicators, marquee ribbon)
  - Text Colors: White `#FFFFFF` for headlines, Warm Cream `#EFEAE0` for body text
  - Navigation Text: Silver/White (`#FFFFFF`) default $\rightarrow$ turns Gold (`#C9A84C`) on hover/active
* **Top Navigation Menu**:
  - Strictly 4 items: `HOME` | `TICKETS` | `ARTIST` | `COMMUNITY`
* **Social Media Icons**:
  - Strictly 3 icons: **IG** (Instagram), **FB** (Facebook), **YT** (YouTube) in Gold outline (`#C9A84C`)
* **Logo**: Gold Brigiding logo + gold text `BRIGIDING` (`DM Serif Text`, 24px, `#C9A84C`)

---

## 2. Homepage Section Breakdown & Logic

1. **Header / Navbar (`90px`, `#0A0D1A`)**:
   - Left: Gold logo + `BRIGIDING` title.
   - Center: 4 Nav links (`HOME`, `TICKETS`, `ARTIST`, `COMMUNITY`) with silver-to-gold hover transition and `24px x 2px` gold active indicator.
   - Right: 3 Gold outline social icons (IG, FB, YT).

2. **Hero Carousel / Slider (`720px`, `#0A0D1A`)**:
   - Full left-to-right width cinematic slider with 5-second auto-change and click triggers.
   - Indicator: 5 silver stars at bottom, turning gold for active slide.
   - 5 Slides:
     1. *Join Our Community*
     2. *FIRST DRAG RACE SLAYSIAN ROYALE SUPERSTAR*
     3. *MOTHER OF THE HOUSE OF DING*
     4. *SHOW PRODUCER*
     5. *PODCASTER: BEYOND THE BRAND*

3. **Marquee Ticker Ribbon (`65px`, Gold `#C9A84C`)**:
   - Infinite continuous marquee text: `"CONFIRMADA · CONFIRMADA · CONFIRMADA"` in dark text (`#11162E`).

4. **ART Section (Breaker & 12 Pictures)**:
   - Breaker title: `ART` (or `"An editorial life in full color"`).
   - 12 high-fashion drag pictures arranged in 3 columns x 4 rows, spanning full viewport width with minimal margins.

5. **Events Section (`events`)**:
   - Title: `events` (lowercase serif).
   - Show cards displaying date, show name, venue location, description, and "Get Tickets" action.

6. **Tickets Section ("WATCH THE BRIGHTEST STAR LIVE")**:
   - Art-gallery exhibition style layout with framed poster representations, date/time, location, and "Get Tickets" button.

7. **Join Our Community Section**:
   - Headline: `JOIN OUR COMMUNITY`
   - Subtext: *"Don't worry, darling. We're not here to fill your inbox with nonsense. Just the good stuff: upcoming shows, fabulous opportunities..."*
   - Form Fields: First Name, Last Name, Email, Mobile, Location Dropdown (*Metro Manila, Luzon, Visayas, Mindanao, United States, Canada, Thailand, Vietnam, Taiwan, Australia, Japan* in alphabetical order after PH regions).

8. **Corporate Booking Contacts**:
   - Julia, Talent Manager (Mobile & Email placeholders).

9. **Footer (`#11162E`)**:
   - Logo + `BRIGIDING`, Motto *"Art · Community · Empowerment"*, IG/FB/YT icons, copyright, and *"✦ QUEEN OF THE STAGE"* accent.
