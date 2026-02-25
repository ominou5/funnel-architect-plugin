---
name: conversion-ux
description: >
  Conversion-focused UX patterns for sales funnel pages. Apply these patterns
  to every page to maximize conversion rates. Covers layout, CTA placement,
  social proof, urgency, and friction reduction.
---

# Conversion UX Patterns

Apply these patterns to every funnel page. These are not suggestions — they are requirements for high-converting funnels.

## Above the Fold (First Viewport)

Every page must have these 3 elements visible without scrolling:

1. **Headline** — Clear, benefit-driven, addresses the #1 pain point
2. **Sub-headline** — Expands on the headline, introduces the solution
3. **Primary CTA** — Visible, high-contrast button with action-oriented text

```html
<!-- Pattern: Hero Section -->
<section class="hero">
  <h1>Headline: Desired Outcome</h1>
  <p class="subtitle">Sub-headline: How you'll get there</p>
  <a href="#action" class="cta-primary">Action-Oriented CTA Text →</a>
</section>
```

## CTA Button Rules

| Rule | Good ✅ | Bad ❌ |
|---|---|---|
| Action-oriented | "Get My Free Guide" | "Submit" |
| First-person | "Start My Trial" | "Start Your Trial" |
| Benefit-focused | "Unlock 50% More Sales" | "Click Here" |
| Urgency | "Claim My Spot (Only 12 Left)" | "Register" |
| Specificity | "Download the 7-Step Checklist" | "Download" |

### CTA Placement
- **Always** above the fold
- **Repeat** after every major value block (every 2–3 scroll lengths)
- **Sticky** CTA bar on mobile (bottom of viewport)
- **Final** CTA with full benefit stack at page bottom

## Social Proof Patterns

### Testimonial Card
```html
<div class="testimonial">
  <img src="avatar.jpg" alt="Customer Name" class="testimonial-avatar">
  <blockquote>
    <p>"Specific result they achieved with your product."</p>
    <cite>
      <strong>Full Name</strong>
      <span>Title, Company</span>
    </cite>
  </blockquote>
</div>
```

### Trust Bar
```html
<div class="trust-bar">
  <span>As featured in:</span>
  <img src="logo1.svg" alt="Publication 1">
  <img src="logo2.svg" alt="Publication 2">
  <img src="logo3.svg" alt="Publication 3">
</div>
```

### Stats Row
```html
<div class="stats-row">
  <div class="stat"><strong>10,000+</strong><span>Customers Served</span></div>
  <div class="stat"><strong>4.9/5</strong><span>Average Rating</span></div>
  <div class="stat"><strong>30-Day</strong><span>Money-Back Guarantee</span></div>
</div>
```

## Urgency Patterns (Use Authentically)

- **Countdown timer** — Only for real deadlines (course enrollment, live event)
- **Limited spots** — Only if genuinely limited ("12 of 50 spots remaining")
- **Price increase** — Only if price is actually changing
- **Seasonal** — "Enroll before [date] to join the spring cohort"

## Friction Reduction

### Form Optimization
- **Minimize fields** — Only ask for what you need at this stage
  - Opt-in: Email only (name optional)
  - Purchase: Email, name, payment
  - Application: More fields acceptable
- **Single-column layout** — Never side-by-side fields on forms
- **Progress indicator** — For multi-step forms
- **Inline validation** — Show errors in real-time, not on submit

### Navigation
- **Remove top nav** on landing pages — No escape routes
- **Single CTA** — One primary action per page (secondary allowed in footer)
- **Exit intent** — Optional popup when cursor moves to close tab

## Visual Hierarchy

1. **Headline** (largest text, bold)
2. **Sub-headline** (medium text)
3. **CTA button** (high contrast, standout color)
4. **Body copy** (readable, 16px+ on desktop, 18px+ on mobile)
5. **Supporting text** (smaller, lighter — fine print, disclaimers)

## Mobile UX Requirements

- Touch targets: **minimum 44x44px**
- CTA button: **full width on mobile**
- Font size: **minimum 16px** (prevents iOS zoom on input focus)
- Spacing: **generous padding** between tap targets
- Sticky CTA: **fixed bottom bar** on scroll
