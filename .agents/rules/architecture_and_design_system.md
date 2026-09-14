# Brigiding Project Architecture & Design System Specification

This document contains the official architectural, technical, database, and design system specifications for the **Brigiding Official Personal Brand, Lead Generation & Storefront Platform**.

---

## 1. System Overview & Business Objectives

The platform serves as Brigiding's official digital hub, focusing on three core areas:
1. **Public Personal Brand**: Showcasing career identity, biography, achievements, high-fashion editorial lookbook gallery, and performance history.
2. **Lead Generation & Booking Pipeline**: Converting visitors into booking leads via direct Typeform integration and native interactive ticket reservation applications.
3. **Storefront & Merch Drops**: E-commerce catalog for limited fan drops, apparel, autographed prints, guest carts, and multi-gateway payments (Stripe, PayMongo, GCash).

---

## 2. Frontend Architecture (React + MVVM Pattern)

The frontend uses **React (Vite)** with **Vanilla CSS** and follows the **Model-View-ViewModel (MVVM)** architectural pattern:

* **Models (`client/src/models/`)**: Data interfaces representing entities (e.g. `Event`, `GalleryItem`, `Product`, `Inquiry`, `Cart`).
* **Services (`client/src/services/`)**: API client abstraction handling HTTP requests to `/api/v1/*` backend endpoints.
* **ViewModels (`client/src/viewmodels/`)**: Custom React hooks encapsulating state management, data fetching, input validation, and business logic (e.g., `useEventsVM`, `useGalleryVM`, `useTicketFormVM`).
* **Views / Components (`client/src/components/` & `client/src/pages/`)**: Pure presentation components driven by ViewModels.

---

## 3. Backend Architecture (5-Layer Modular Monolith Express API)

The backend uses **Express.js** structured into **5 distinct layers**:

```
Client Request
      ↓
1. Routes        -> Endpoint definitions & HTTP method mapping (/api/v1/*)
      ↓
2. Middleware    -> Auth JWT verification, RBAC role checks, Zod validation, Error handling
      ↓
3. Controllers   -> Request parsing, parameter extraction, and JSON response formatting
      ↓
4. Services      -> Application business logic, calculations, and Typeform webhook processing
      ↓
5. Repositories  -> Data access queries interacting with Supabase / PostgreSQL
```

---

## 4. Complete Database Schema (18 PostgreSQL Relational Tables)

Database layer managed via Supabase / PostgreSQL:

### Core Security & Users
1. `USERS`: `user_id` (PK, UUID), `email` (UNIQUE), `password_hash`, `role` (CLIENT, VIP_MEMBER, ADMIN, SUPERADMIN), `status` (ACTIVE, SUSPENDED, UNVERIFIED), `created_at`, `updated_at`.
2. `PROFILES`: `user_id` (PK/FK), `full_name`, `phone`, `avatar_url`, `instagram_handle`, `created_at`, `updated_at`.
3. `ADDRESSES`: `address_id` (PK), `user_id` (FK), `recipient_name`, `phone`, `address_line1`, `address_line2`, `city`, `state_province`, `postal_code`, `country`, `is_default_shipping`.

### Brand Content & CMS
4. `EVENTS`: `event_id` (PK), `title`, `slug` (UNIQUE), `event_type` (CONVENTION, CLUB_PERFORMANCE, INTERNATIONAL_TOUR, CORPORATE_HOSTING), `event_date`, `doors_open_time`, `venue_name`, `location_city`, `country`, `partners_text`, `description`, `cover_image_url`, `ticket_status` (UPCOMING, APPLICATIONS_OPEN, ON_SALE, SOLD_OUT, PAST), `external_ticket_url`, `is_featured`, `display_order`.
5. `GALLERY_ITEMS`: `item_id` (PK), `title`, `category` (LOOKBOOK, EDITORIAL, STAGE_PERFORMANCE, BEHIND_THE_SCENES), `image_url`, `thumbnail_url`, `alt_text`, `caption`, `photographer_credit`, `outfit_designer_credit`, `aspect_ratio`, `is_hero_showcase`, `sort_order`.
6. `PORTFOLIO_MILESTONES`: `milestone_id` (PK), `headline`, `subtitle_tag`, `description`, `media_url`, `media_type` (IMAGE, VIDEO_EMBED), `event_year`, `display_order`.
7. `SITE_ANNOUNCEMENTS`: `announcement_id` (PK), `marquee_text`, `highlight_badge`, `is_active`.

### Lead Generation & Ticket Applications
8. `BOOKING_INQUIRIES`: `inquiry_id` (PK), `user_id` (FK, NULLABLE), `full_name`, `email`, `organization_name`, `service_type` (CORPORATE_PERFORMANCE, CHOREOGRAPHY_WORKSHOP, HOSTING_MC, BRAND_COLLAB, FESTIVAL_BOOKING), `target_date`, `budget_range`, `message`, `status` (NEW, IN_REVIEW, CONTACTED, CONTRACTED, CLOSED), `admin_notes`, `source` (DIRECT_FORM, TYPEFORM_WEBHOOK).
9. `TICKET_APPLICATIONS`: `application_id` (PK), `event_id` (FK), `full_name`, `email`, `mobile_number`, `number_of_tickets`, `preferred_show_time`, `accessibility_notes`, `terms_accepted`, `status` (SUBMITTED, WAITLISTED, APPROVED, REJECTED, CONVERTED_TO_TICKET).

### E-Commerce & Merch Storefront
10. `CATEGORIES`: `category_id` (PK), `name`, `slug` (UNIQUE), `description`, `is_active`.
11. `PRODUCTS`: `product_id` (PK), `category_id` (FK), `name`, `slug` (UNIQUE), `sku` (UNIQUE), `description`, `base_price`, `compare_at_price`, `is_exclusive_drop`, `status` (DRAFT, ACTIVE, ARCHIVED).
12. `PRODUCT_VARIANTS`: `variant_id` (PK), `product_id` (FK), `title`, `sku` (UNIQUE), `price_adjustment`, `stock_quantity`, `low_stock_alert`.
13. `CARTS`: `cart_id` (PK), `user_id` (FK, NULLABLE), `session_token` (UNIQUE).
14. `CART_ITEMS`: `cart_item_id` (PK), `cart_id` (FK), `variant_id` (FK), `quantity`.
15. `ORDERS`: `order_id` (PK), `user_id` (FK, NULLABLE), `status`, `total_amount`.
16. `ORDER_ITEMS`: `order_item_id` (PK), `order_id` (FK), `variant_id` (FK), `quantity`, `price_at_purchase`.
17. `PAYMENTS`: `payment_id` (PK), `order_id` (FK), `gateway` (STRIPE, PAYMONGO, GCASH, MAYA), `status`, `amount`.
18. `SHIPMENTS`: `shipment_id` (PK), `order_id` (FK), `tracking_number`, `status`.

---

## 5. REST API Domain Structure (6 Domains)

* **Domain 1: Auth & User Profiles**: `/api/v1/auth/register`, `/api/v1/auth/login`, `/api/v1/auth/profile`.
* **Domain 2: Brand Content, Events & CMS**: `/api/v1/site/meta`, `/api/v1/events`, `/api/v1/gallery`, `/api/v1/milestones`.
* **Domain 3: Lead Generation & Typeform Ingestion**: `/api/v1/inquiries`, `/api/v1/tickets/apply`, `/api/v1/webhooks/typeform`.
* **Domain 4: Storefront & Merchandise**: `/api/v1/categories`, `/api/v1/products`, `/api/v1/cart`.
* **Domain 5: Checkout, Orders & Payments**: `/api/v1/orders`, `/api/v1/payments`.
* **Domain 6: Admin Management & Lead Pipeline**: `/api/v1/admin/*`.

---

## 6. Design System Tokens & Aesthetics

* **Color Palette**:
  * Regal Navy Background: `#0B0F19` & Deep `#080C14`
  * Card Surfaces: `#121827`
  * Regal Gold Accents: Metallic gradient (`#D4AF37` $\rightarrow$ `#E5C058` $\rightarrow$ `#F5E6B3`)
  * Warm Cream Text & Highlights: `#F7F4EE`
* **Typography**:
  * Editorial Serif Headlines: `Playfair Display`
  * Clean Geometric Body: `Montserrat`
* **Git Conventions**:
  * Always use standard branch prefixing: `feature/`, `bugfix/`, `hotfix/`, `chore/`, `refactor/`.
