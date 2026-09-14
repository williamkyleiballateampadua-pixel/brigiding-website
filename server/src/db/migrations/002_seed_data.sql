-- Seed Site Announcement Ticker
INSERT INTO site_announcements (announcement_id, marquee_text, highlight_badge, is_active)
VALUES (
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'CONFIRMADA • SÃO PAULO DRAGCON BRASIL 2026 • BRIGIDING LIVE IN CONCERT • BOOKING INQUIRIES OPEN',
    'CONFIRMADA',
    TRUE
) ON CONFLICT DO NOTHING;

-- Seed Sample Events
INSERT INTO events (event_id, title, slug, event_type, event_date, doors_open_time, venue_name, location_city, country, partners_text, description, cover_image_url, ticket_status, is_featured, display_order)
VALUES 
(
    'e1111111-1111-1111-1111-111111111111',
    'São Paulo DragCon Brasil 2026',
    'dragcon-brasil-2026',
    'CONVENTION',
    '2026-11-14 18:00:00+00',
    '6:00 PM GMT-3',
    'Expo Center Norte',
    'São Paulo',
    'Brazil',
    'Official World of Wonder Appearance',
    'Join Brigiding live on the mainstage for exclusive performances, meet-and-greet sessions, and limited fan drops.',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200',
    'APPLICATIONS_OPEN',
    TRUE,
    1
),
(
    'e2222222-2222-2222-2222-222222222222',
    'D Intervention S3 Launch Party',
    'd-intervention-s3-launch',
    'CLUB_PERFORMANCE',
    '2026-10-24 21:00:00+00',
    '9:00 PM PHT',
    'O Bar Manila',
    'Manila',
    'Philippines',
    'Drag Race Philippines Alum Night',
    'High-octane choreography and showstopping solo numbers featuring Brigiding.',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200',
    'UPCOMING',
    TRUE,
    2
) ON CONFLICT (slug) DO NOTHING;

-- Seed Product Categories
INSERT INTO categories (category_id, name, slug, description, is_active)
VALUES
('c1111111-1111-1111-1111-111111111111', 'Official Apparel', 'official-apparel', 'High-fashion graphic tees, hoodies, and tour merch.', TRUE),
('c2222222-2222-2222-2222-222222222222', 'Autographed Prints', 'autographed-prints', 'Limited edition signed editorial posters and lookbook prints.', TRUE),
('c3333333-3333-3333-3333-333333333333', 'Exclusive Fan Drops', 'exclusive-fan-drops', 'VIP passes, enamel pins, and custom drag accessories.', TRUE)
ON CONFLICT (slug) DO NOTHING;

-- Seed Portfolio Milestones
INSERT INTO portfolio_milestones (milestone_id, headline, subtitle_tag, description, media_url, media_type, event_year, display_order)
VALUES
('m1111111-1111-1111-1111-111111111111', 'Slaysian Pride Mainstage', 'International Tour Highlight', 'Headlining the Slaysian Pride mainstage festival with live vocals and choreography.', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000', 'IMAGE', 2025, 1),
('m2222222-2222-2222-2222-222222222222', 'The Theatre at Solaire', 'Solo Drag Gala', 'Selling out two consecutive nights of theatrical drag extravaganza in Manila.', 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000', 'IMAGE', 2024, 2)
ON CONFLICT DO NOTHING;
