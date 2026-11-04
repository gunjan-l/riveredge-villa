# SPEC: Riveredge Villa Direct Booking & WhatsApp Referral Website

## Problem Statement

Villa host lists Riveredge Villa on Airbnb. Airbnb charges high service fees (14–20%) to guests and hosts. Potential guests discover Riveredge Villa on Airbnb, copy villa name, and search Google to find direct booking options to save money. Currently, no dedicated landing page exists when guests search "Riveredge Villa" on Google. Host loses direct bookings, and guests either return to Airbnb or book alternative accommodations.

## Solution

Ultra-fast, SEO-optimized one-page website targeting branded search terms ("Riveredge Villa"). Page establishes instant trust by highlighting Airbnb Superhost credentials, shows high-resolution property highlights, and provides clear direct-booking price savings (15–20% off platform rates). Interactive date and guest selector lets visitors construct exact inquiry with one click, redirecting them directly to WhatsApp chat with host via pre-filled message.

## User Stories

1. As a prospective guest searching "Riveredge Villa" on Google, I want to find official direct website immediately so that I know I am contacting real property owner.
2. As a prospective guest, I want to see clear side-by-side fee comparison between Airbnb and direct booking so that I understand savings of booking direct.
3. As a prospective guest, I want to view high-quality photos of riverfront, bedrooms, private pool, and living areas so that I can evaluate property quality.
4. As a prospective guest, I want to see full breakdown of villa specs (number of bedrooms, bathrooms, max occupancy) so that I know if it fits my group size.
5. As a prospective guest, I want to review list of amenities (WiFi, pool, AC, kitchen, private parking, chef availability) so that I confirm all required comforts exist.
6. As a prospective guest, I want to select check-in date, check-out date, and guest count on website so that I do not have to type repetitive trip details manually.
7. As a prospective guest, I want clicking WhatsApp CTA to launch WhatsApp app with pre-filled booking inquiry containing my selected dates and guest count so that initiating conversation with host is effortless.
8. As a mobile phone visitor, I want sticky "Book via WhatsApp" bar fixed at bottom of screen so that I can initiate contact instantly from any scroll depth.
9. As a prospective guest, I want to view exact location map and nearby landmarks so that I can plan transportation and travel logistics.
10. As a prospective guest, I want to see real past guest reviews and Superhost badges so that I feel safe sending deposit outside Airbnb.
11. As a prospective guest, I want to read FAQ covering payment methods, security deposit, check-in policies, and cancellation terms so that all common questions are answered upfront.
12. As a search engine crawler (Googlebot), I want valid Schema.org `LodgingBusiness` structured JSON-LD and OpenGraph meta tags so that Riveredge Villa ranks prominently with rich search snippets.
13. As property owner, I want single configuration file containing contact number, villa copy, pricing, and photo paths so that updates require editing only one central file without touching component code.
14. As property owner, I want Google Analytics event firing on WhatsApp button clicks so that I can track conversion rate from Google search to chat lead.

## Implementation Decisions

- **Framework**: Static Astro architecture compiled to pure static HTML/CSS. Zero client runtime JS overhead on static content; minimal island hydration only for interactive date/guest picker.
- **Styling**: Tailwind CSS for responsive mobile-first utility layout.
- **Data Architecture**: Central configuration module defining all site parameters: phone number, address, geographic coordinates, pricing rules, amenities list, photo paths, and Airbnb review snippets.
- **WhatsApp Integration Contract**: Standard `https://wa.me/<number>?text=<encoded_string>` schema. Dynamic formatter takes date range and guest count state, generates formatted multiline text inquiry, and updates button href in real-time.
- **Structured Data**: JSON-LD payload injected into page `<head>` conforming to Schema.org `LodgingBusiness` and `VacationRental` definitions including address, coordinates, price range, and amenity features.
- **Hosting Target**: Pure static build output compatible with Cloudflare Pages, Vercel, or GitHub Pages.

## Testing Decisions

- **Good Test Definition**: Tests must exercise external behavior only (rendered DOM attributes, URL generation, valid JSON-LD schema) and never assert private component state or internal variables.
- **Target Modules**:
  1. WhatsApp URL Builder logic: Verifies output against date/guest combinations and edge cases (dates omitted, singular vs plural guests, URL encoding).
  2. Structured Data Generation: Validates JSON-LD payload against Schema.org specification fields.
  3. Static Page Build Verification: Build pipeline asserts zero broken links and successful compilation.

## Out of Scope

- In-app payment processing or credit card gateway (payments handled via host WhatsApp conversation / UPI / bank transfer).
- Two-way live iCal synchronization with Airbnb calendar.
- User accounts, login, or authentication system.
- Multi-property management dashboard.

## Further Notes

- Setup requires replacing placeholder phone number in configuration file with host's real international WhatsApp number.
- Images scaffolded with royalty-free riverfront villa photography, structured for instant replacement in `public/images/`.
