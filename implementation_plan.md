# Implementation Plan: 4 Dedicated Pages (Home, Tickets, Artist, Community)

This implementation plan outlines the creation of the 4 dedicated pages corresponding to the top navigation items (`HOME`, `TICKETS`, `ARTIST`, `COMMUNITY`), strictly adhering to your client's September 10, 2026 directives.

---

## User Review Required

> [!IMPORTANT]
> **Page-by-Page Client Directives & Structure:**
>
> 1. **`HOME` Page (`pages/Home.tsx`):**
>    - Navbar $\rightarrow$ 5-Slide 5-Star Auto-Carousel $\rightarrow$ Marquee Ticker Ribbon $\rightarrow$ Featured DragCon Brasil Banner $\rightarrow$ **`ART` Breaker & 12 Pictures (3x4 Grid)** $\rightarrow$ **`events` Section** $\rightarrow$ Press Quote $\rightarrow$ **`JOIN OUR COMMUNITY` Form** $\rightarrow$ Julia Talent Manager Contact Box $\rightarrow$ Footer.
>
> 2. **`TICKETS` Page (`pages/TicketsPage.tsx`):**
>    - **Art Gallery Exhibition Style Layout** with framed poster art and staggered vertical offsets.
>    - Headline: **`WATCH THE BRIGHTEST STAR LIVE`** (`DM Serif Text`).
>    - 3–4 Show Displays: Framed Poster, Date & Time, Location, **`Get Tickets`** button.
>    - Corporate Contact Box (Julia, Talent Manager).
>
> 3. **`ARTIST` Page (`pages/ArtistPage.tsx`):**
>    - **Clean Editorial Layout**: Straight to photo of Brigiding **not in drag** + placeholder for long write-up.
>    - **Removed Items** (per client instructions): No real name, no drag name, no location, no event timeline.
>    - Corporate Contact Box (Julia, Talent Manager).
>
> 4. **`COMMUNITY` Page (`pages/CommunityPage.tsx`):**
>    - Headline: **`COME FOR BRIGIDING. STAY FOR THE WORLD OF DING.`** (`DM Serif Text`).
>    - Full Client Subtext: *"There’s more to Brigiding than the lashes, the looks, and the legendary performances. As the first Drag Race Slaysian Royale Superstar..."*
>    - Fillable Form: First Name, Last Name, Email, Mobile, Location Dropdown (*Metro Manila, Luzon, Visayas, Mindanao, United States, Canada, Thailand, Vietnam, Taiwan, Australia, Japan*).
>    - Corporate Contact Box (Julia, Talent Manager).

---

## Proposed Changes

```
brigiding-website/
└── client/
    └── src/
        ├── components/
        │   ├── common/
        │   │   ├── Navbar.tsx          # 4-link nav switching between HOME, TICKETS, ARTIST, COMMUNITY
        │   │   └── Footer.tsx
        │   ├── tickets/
        │   │   └── ArtGalleryTickets.tsx# Art gallery exhibition framed posters with staggered vertical levels
        │   └── contacts/
        │       └── JuliaContactBox.tsx # Reusable Julia Talent Manager contact box
        ├── pages/
        │   ├── Home.tsx                # Storytelling Homepage
        │   ├── TicketsPage.tsx         # Dedicated Tickets Page ("WATCH THE BRIGHTEST STAR LIVE")
        │   ├── ArtistPage.tsx          # Dedicated Artist/About Page (Photo out of drag + write-up)
        │   └── CommunityPage.tsx       # Dedicated Community Page ("COME FOR BRIGIDING...")
        └── App.tsx                     # Dynamic page router driven by top navbar
```

---

## Execution Steps

### Step 1: Reusable Julia Contact Component
- Create `client/src/components/contacts/JuliaContactBox.tsx` for corporate events and performance bookings.

### Step 2: Art Gallery Ticket Exhibition Component
- Create `client/src/components/tickets/ArtGalleryTickets.tsx` featuring framed poster representations, date/time, location, and "Get Tickets" action in staggered vertical offsets.

### Step 3: Create Dedicated Pages
- `pages/TicketsPage.tsx` (`WATCH THE BRIGHTEST STAR LIVE`)
- `pages/ArtistPage.tsx` (Out of drag photo + long bio write-up)
- `pages/CommunityPage.tsx` (`COME FOR BRIGIDING. STAY FOR THE WORLD OF DING.` + full subtext)

### Step 4: Router Wiring in `App.tsx`
- Connect `Navbar` active state to seamlessly switch between `Home`, `TicketsPage`, `ArtistPage`, and `CommunityPage`.

---

## Verification Plan

1. Open `http://localhost:5173`.
2. Click **`HOME`**: Verify full storytelling landing page (Carousel $\rightarrow$ ART 12 pictures $\rightarrow$ `events` $\rightarrow$ Community form).
3. Click **`TICKETS`**: Verify headline `WATCH THE BRIGHTEST STAR LIVE` & framed gallery staggered posters.
4. Click **`ARTIST`**: Verify clean bio page with out-of-drag photo placeholder, no real name/timeline, and Julia contact details.
5. Click **`COMMUNITY`**: Verify headline `COME FOR BRIGIDING. STAY FOR THE WORLD OF DING.`, full client text, and form.
