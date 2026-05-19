# Concept: Multi-size Banner System

## Overview
A "Multi-size Banner System" provides a structured way to display promotional and informational content across a dashboard. By categorizing banners into **SM**, **MD**, and **XL**, developers can prioritize information based on urgency and visual impact.

## Banner Classifications

### 1. Banner SM (Alert/Notice)
- **Use Case**: Critical updates, time-sensitive deals, or system alerts.
- **Design**: Thin horizontal bar at the top of the page.
- **Interactivity**: Usually dismissible (Close button).

### 2. Banner MD (Featured Promotion)
- **Use Case**: Mid-level marketing, loyalty programs, or secondary features.
- **Design**: Card-like structure integrated into the main content flow.
- **Interactivity**: Action-oriented (Join button, CTA).

### 3. Banner XL (Hero/Promo Slider)
- **Use Case**: Main marketing campaigns, seasonal events, or high-impact visuals.
- **Design**: Full-width hero section, often utilizing sliders ([[Swiper-js-Integration]]).
- **Interactivity**: Interactive navigation (Pagination, Swiping).

## Implementation in POS
The [[POS-Dashboard-POC]] demonstrates all three sizes simultaneously:
- **SM**: At the very top for flash deals.
- **XL**: Below the header for seasonal festivals.
- **MD**: Mid-page for rewards membership.

## Sources
- [[POS-Dashboard-POC]]
- [[Swiper-js-Integration]]
