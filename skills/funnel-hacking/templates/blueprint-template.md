# Funnel Hack — Build Blueprint

> Generated from funnel hack analysis. This is the build specification for the `funnel-builder` agent.
> Replace all `[bracketed]` placeholders before delegating.

---

## Funnel Overview

| Field | Value |
|---|---|
| User's Brand | [brand name] |
| Product/Service | [what they sell] |
| Target Audience | [who they sell to] |
| Price Point | [amount] |
| Funnel Type | [type — maps to `skills/[type]-funnel/SKILL.md`] |
| Source Funnel(s) | [URL(s) analyzed] |
| Number of Pages | [count] |

---

## Brand & Design System

Apply via `skills/design-system/SKILL.md` with these overrides:

```css
:root {
  /* Brand Overrides */
  --accent: [user's primary brand color];
  --accent-hover: [darker variant];
  --accent-glow: [transparent variant];
  --bg-primary: [background color];
  --bg-secondary: [secondary bg];
  --text-primary: [text color];
}
```

- **Font**: [user's font or default Inter]
- **Logo**: [path or URL to logo file]
- **Visual Vibe**: [inspired by source: e.g., bold and urgent / clean and minimal]

---

## Funnel Map

```
[Traffic Source]
     │
     ▼
[Page 1: Name] ──── Primary CTA ────▶ [Page 2: Name]
     │                                       │
     │ (exit intent)                    Primary CTA
     ▼                                       │
[Exit Popup]                                 ▼
                                   [Page 3: Name]
                                        │
                                   Primary CTA
                                        │
                                        ▼
                                   [Page 4: Name]
```

---

## Page Specifications

### Page 1: [Page Name]

**Type**: [squeeze / sales / VSL / etc.]
**Build Reference**: `skills/[funnel-type]/templates/[template].html`

#### Sections

| # | Section | Content Direction | Elements |
|---|---|---|---|
| 1 | Hero | [Original headline and sub-head for user's offer] | Headline, sub-head, CTA button, [hero image/video] |
| 2 | Problem | [3 pain points framed for user's audience] | Pain point bullets, empathy copy |
| 3 | Solution | [Product introduction — user's voice] | Product reveal, benefit list, image |
| 4 | Social Proof | [User's testimonials / proof] | Testimonial cards, trust logos |
| 5 | Offer Stack | [User's offer + bonuses + pricing] | Benefit stack, price anchor, CTA |
| 6 | Guarantee | [User's guarantee details] | Badge, guarantee copy, CTA |
| 7 | FAQ | [User's top objections as Q&A] | Accordion, 5-8 questions |
| 8 | Final CTA | [Urgency-driven close] | Countdown, CTA, scarcity line |

#### Copy — Page 1

- **Headline**: [Original headline — benefit-driven, using formula from `skills/funnel-copy/SKILL.md`]
- **Sub-headline**: [Original sub-head expanding on the headline]
- **CTA Text**: "[Original CTA copy — action + result]"
- **Pain Points**:
  1. [Pain point for user's audience]
  2. [Pain point for user's audience]
  3. [Pain point for user's audience]
- **Benefit Bullets**:
  1. ✅ [Benefit — what they get]
  2. ✅ [Benefit — what they get]
  3. ✅ [Benefit — what they get]
- **Guarantee Copy**: "[User's guarantee — duration + promise + risk reversal]"
- **Urgency Copy**: "[Deadline / scarcity mechanism]"

#### JS Functionality — Page 1

| Feature | Behavior Spec |
|---|---|
| [e.g., Countdown Timer] | [Evergreen, 24h from first visit, stored in localStorage] |
| [e.g., Exit-Intent Popup] | [Triggers on mouse-leave after 30s on page, shows once per session] |
| [e.g., Sticky CTA Bar] | [Appears after scrolling past hero section] |
| [e.g., Scroll Animations] | [Fade-in using IntersectionObserver, 0.1 threshold] |

---

### Page 2: [Page Name]

> Repeat the same structure for each additional page...

---

## Integrations

| Integration | Provider | Reference Skill | Configuration |
|---|---|---|---|
| Email | [Mailchimp / ConvertKit / ActiveCampaign] | `skills/marketing-stack/SKILL.md` | Form ID: [TBD], List/Tag: [TBD] |
| Payment | [Stripe / PayPal] | `skills/marketing-stack/SKILL.md` | Price ID: [TBD], Success URL: /thank-you |
| Analytics | [GA4 / Pixel / etc.] | `skills/analytics-setup/SKILL.md` | Tracking ID: [TBD] |
| Hosting | [Netlify / Vercel / Cloudflare] | `skills/deploy-[provider]/SKILL.md` | Domain: [TBD] |

---

## Build Delegation Prompts

### To `funnel-builder`:
> Build a [funnel type] funnel based on this blueprint. Build [X] pages: [list page names]. Use `skills/[type]-funnel/SKILL.md` as the base reference. Apply the design system from `skills/design-system/SKILL.md` with the brand overrides listed above. Implement all JS functionality specified per page. Connect email forms to [provider] per `skills/marketing-stack/SKILL.md`.

### To `copy-doctor`:
> Review and sharpen all copy across [X] pages of this [funnel type] funnel. Ensure headlines follow proven formulas from `skills/funnel-copy/SKILL.md`. Tighten CTAs, strengthen objection handlers, and verify the benefit stack is compelling. All copy must be original — no source funnel text.

### To `conversion-optimizer`:
> Run the full conversion audit from `skills/conversion-audit/SKILL.md` on all [X] pages. Score each page and provide specific recommendations. Target score: 70/100 minimum per page.

### To `page-speed-optimizer`:
> Audit all [X] pages for page speed per `skills/page-speed/SKILL.md`. Target: LCP < 2.5s, CLS < 0.1, total page weight < 500KB.

---

## Verification Reminders

After build, run verification checklist from Step 6 of `skills/funnel-hacking/SKILL.md`:
- [ ] All copy is original
- [ ] No source assets used
- [ ] All JS functionality works
- [ ] Mobile responsive
- [ ] Page speed passes
- [ ] Conversion audit ≥ 70/100
- [ ] Links validated via `scripts/validate-funnel-structure.js`
- [ ] A/B test recommendations provided via `skills/ab-testing/SKILL.md`
