---
name: funnel-hacking
description: >
  Reverse-engineer any live public sales funnel and rebuild it — adapted for
  the user's brand, copy, and offer — without copyright infringement. Handles
  single pages or entire multi-page funnels. Uses Russell Brunson's
  Hook/Story/Offer framework to deconstruct what makes a funnel convert,
  then delegates the build to the funnel-builder agent.
---

# Funnel Hacking

Reverse-engineer any live sales funnel, understand why it converts, and rebuild it for your user's brand and offer.

> **What is Funnel Hacking?** A term coined by Russell Brunson — strategically analyzing successful funnels to understand their structure, psychology, and conversion mechanics, then using those patterns to build your own. It is NOT copying. You are studying the blueprint, not photocopying the building.

---

## Ethics & Guardrails

Before you begin, internalize these rules. They are non-negotiable.

| ✅ DO | ❌ DO NOT |
|---|---|
| Study layout structure and section order | Copy any headline, sentence, or paragraph verbatim |
| Identify the funnel type and flow pattern | Reuse any images, logos, or brand assets from source |
| Analyze the Hook / Story / Offer framework | Use the source brand name, trademarks, or taglines |
| Note which JS functionality drives conversions | Clone CSS stylesheets wholesale |
| Adapt proven conversion patterns for the user | Represent the output as the source brand's work |

If you are unsure whether something crosses the line, rewrite it from scratch or ask the user.

---

## Step 1: Intake — Collect URLs & Context

Ask the user for the following. Skip anything they've already provided.

### Required
1. **URLs** — One or more live public URLs to analyze. Can be a single landing page or a full multi-page funnel.
   - Example: "Give me the URL(s) of the funnel you want to reverse-engineer."
2. **What they sell** — Their product, service, course, SaaS, etc.
3. **Who they sell to** — Their target audience.
4. **Their price point** — Determines funnel complexity.

### Optional (ask if not provided)
5. **Brand assets** — Name, logo, colors, fonts, domain. If they have a brand guide or existing site, ask for the URL.
6. **What they love** about the source funnel — Specific elements they want to keep vs. change.
7. **Existing assets** — Testimonials, case studies, media, email lists, payment processor.

### Intake Format

Record the intake in this structure before proceeding:

```
FUNNEL HACK INTAKE
==================
Source URLs:
  1. [URL] — [user's description of what this page is, if provided]
  2. [URL]
  ...

User's Business:
  Product/Service: [what they sell]
  Audience: [who they sell to]
  Price Point: [amount]
  Brand: [name, colors, fonts — or "TBD, will gather"]

What They Love About Source: [specific elements]
What They Want Changed: [specific elements]
Existing Assets: [testimonials, media, email provider, payment processor]
```

---

## Step 2: Crawl & Extract — Analyze Every Page

For **each URL** provided, use your page-reading tools (`read_url_content`, browser tools) to fetch the full page content. Then perform this systematic extraction.

> **If the user provides multiple URLs**, analyze them in funnel order (entry page first, thank-you page last). If the order isn't clear, ask.

### 2A. Page Classification

Determine what type of page this is:

| Page Type | Markers |
|---|---|
| Squeeze / Opt-in | Email form, lead magnet offer, no pricing |
| Sales Page | Long-form copy, pricing, buy button, testimonials |
| VSL Page | Video above the fold, copy below, single CTA |
| Webinar Registration | Date/time, registration form, speaker bio |
| Checkout / Order Form | Payment fields, order summary, guarantee |
| Upsell (OTO) | "Wait! One-time offer", countdown, add-to-order button |
| Downsell | Reduced offer after upsell decline |
| Thank You / Confirmation | "You're in!", delivery instructions, next steps |
| Application | Multi-field form, qualification questions |
| Bridge Page | Pre-frame content before the main offer |

### 2B. Funnel Type Classification

After classifying all pages, determine which funnel type this is. Reference `skills/funnel-select/SKILL.md` for the full decision tree:

| Funnel Pattern | Page Sequence |
|---|---|
| Opt-in | Squeeze → Thank You |
| Tripwire | Squeeze → Sales → Thank You |
| Webinar | Registration → Confirmation → Replay → Sales |
| VSL | VSL Page → Order Form → Thank You |
| Product Launch | Pre-launch (x3) → Cart Open → Sales → Checkout |
| Application | Landing → Application Form → Confirmation |
| Challenge | Registration → Daily Content (x5) → Offer |
| SaaS | Landing → Pricing → Signup → Onboarding |
| Membership | Sales → Checkout → Welcome/Login |
| E-commerce | Product → Cart → Checkout → Confirmation |
| High-Ticket | Landing → VSL/Webinar → Application → Call Booking |

### 2C. Hook / Story / Offer Breakdown

For each page, extract using Russell Brunson's framework:

**HOOK** — What grabs attention?
- Main headline (formula used: benefit-driven, curiosity, urgency, etc.)
- Sub-headline
- Above-the-fold visual (hero image, video, animation)
- Any scroll-stopping elements (counters, tickers, bold claims)

**STORY** — What builds connection and credibility?
- Origin story or founder narrative
- Problem/agitation messaging (PAS, AIDA framework used?)
- Case studies, testimonials, social proof
- Before/after comparisons
- "Why this is different" positioning
- Authority credentials, press logos, certifications

**OFFER** — What's being presented?
- Core offer description
- Price point and pricing psychology (anchoring, strikethrough, payment plans)
- Bonus stack (list every bonus, its stated value)
- Guarantee type (30-day, 60-day, results-based, unconditional)
- Urgency/scarcity (countdown timer, limited spots, price increase)
- Risk reversal language
- CTA copy (exact button text and placement frequency)

### 2D. Layout & Design Analysis

Document the section-by-section structure of each page:

```
PAGE LAYOUT: [page name]
========================
Section 1: [Hero / Above the Fold]
  - Elements: [headline, sub-headline, CTA, hero image/video]
  - Layout: [centered, split, full-width video]

Section 2: [Problem / Agitation]
  - Elements: [pain point bullets, "sound familiar?" copy]
  - Layout: [text block, icon grid]

Section 3: [Solution / Introduction]
  ...continue for every section...
```

Note these design patterns:
- **Color scheme** — Primary, secondary, accent, background colors (approximate hex values)
- **Typography** — Headline font style, body font style, sizes
- **Spacing** — Tight or airy? Section padding patterns
- **Visual hierarchy** — What draws the eye first, second, third?
- **Image style** — Photography, illustrations, mockups, icons
- **Overall vibe** — Corporate, friendly, luxury, urgent, minimal, bold

### 2E. JavaScript Functionality Audit

Identify every interactive/dynamic element. These must be replicated in the build:

| Functionality | What to Look For |
|---|---|
| Countdown timer | Fixed date, evergreen, or session-based |
| Exit-intent popup | Overlay triggered on mouse-leave or back button |
| Sticky CTA bar | Fixed header/footer with CTA that stays on scroll |
| Scroll-triggered reveals | Sections that animate in on scroll (fade, slide) |
| Video player | Auto-play, gated (watch before CTA unlocks), custom controls |
| Pricing toggle | Monthly/annual switch, tier selector |
| Progress bar | Multi-step form or checkout progress indicator |
| Social proof notifications | "John from NY just purchased" toast popups |
| Accordion / FAQ | Expandable Q&A sections |
| Testimonial carousel | Rotating testimonial slider |
| Form validation | Real-time field validation, multi-step forms |
| Analytics events | Pixel tracking, scroll depth, click events |
| A/B test indicators | URL parameters, cookie-based variants |
| Chat widget | Live chat or chatbot integration |
| Order bump checkbox | Add-on offer on checkout page |

### 2F. Fill Out the Analysis Template

For each page analyzed, fill out the analysis template at `skills/funnel-hacking/templates/analysis-template.md`. This creates a structured record Claude and the user can reference during the build.

---

## Step 3: Discovery — Fill the Gaps

After analysis, you may have gaps that only the user can fill. Conduct a focused Q&A session. **Only ask what's missing** — don't repeat questions they've already answered.

### Brand & Identity
- What is your brand name?
- Do you have brand colors? (Provide hex codes, or say "pick something modern")
- Do you have a preferred font? (Or should I use the design system defaults from `skills/design-system/SKILL.md`?)
- Do you have a logo file? (Path or URL)

### Offer Details
- What is the name of your product/service?
- What is the main promise or transformation you deliver?
- What is your price point? Any payment plan options?
- What bonuses will you offer? (list with names and descriptions)
- What guarantee do you offer? (duration and terms)
- What is your lead magnet? (if applicable — name and format)

### Social Proof
- Do you have customer testimonials? (names, results, quotes)
- Do you have case studies or before/after data?
- Do you have any press features, certifications, or trust logos?
- How many customers/subscribers/users do you have? (for social proof counters)

### Technical Setup
- What email provider do you use? (Mailchimp, ConvertKit, ActiveCampaign, etc.) → Reference `skills/marketing-stack/SKILL.md`
- What payment processor? (Stripe, PayPal, etc.) → Reference `skills/marketing-stack/SKILL.md`
- Where will this be hosted? (Netlify, Vercel, Cloudflare) → Reference `skills/deploy-netlify/SKILL.md`, `skills/deploy-vercel/SKILL.md`, or `skills/deploy-cloudflare/SKILL.md`
- Do you have a custom domain?

### Creative Direction
- Which elements from the source funnel do you absolutely want to keep? (e.g., "I love the countdown timer and the testimonial section layout")
- What do you want to change? (e.g., "I don't want a VSL, I want text-based sales copy")
- Any pages you want to add or remove from the funnel flow?

---

## Step 4: Generate the Funnel Blueprint

Using the analysis from Step 2 and the user's answers from Step 3, produce a **Funnel Blueprint** — the complete build specification.

Fill out the blueprint template at `skills/funnel-hacking/templates/blueprint-template.md`.

The blueprint must include:

### 4A. Funnel Map

```
Traffic Source → [Page 1: Name] → [Page 2: Name] → [Page 3: Name] → ...
                      │                  │                  │
                 [Primary CTA]     [Primary CTA]     [Primary CTA]
                      │                  │                  │
                      └──────────→ ──────┘──────────→──────┘
```

### 4B. Per-Page Build Spec

For each page, specify:

1. **Page type** — Mapped to the closest existing skill template
2. **Sections in order** — Every section with its purpose and content direction
3. **Copy direction** — Original headlines, sub-heads, bullets, and CTAs (all rewritten from scratch using the user's voice and offer — reference `skills/funnel-copy/SKILL.md` for formulas)
4. **Design direction** — Color palette, typography, spacing adapted from the source analysis (reference `skills/design-system/SKILL.md` for system tokens)
5. **JS functionality** — Every interactive element to build, with behavior specs
6. **Integrations** — Forms, payment, email, analytics connections

### 4C. Copy Transformation Notes

For every piece of copy, document how you're transforming it:

| Source Pattern | User's Version | Framework Used |
|---|---|---|
| Source headline formula | Rewritten headline for user's offer | Benefit-driven (ref: `skills/funnel-copy/SKILL.md`) |
| Source CTA copy | Rewritten CTA for user's action | Action-result pattern |
| Source urgency mechanism | Adapted urgency for user's timeline | Scarcity / deadline |

> **Critical**: Every line of copy must be original. Use the formulas and frameworks from `skills/funnel-copy/SKILL.md` — never the source's actual words.

### 4D. Present the Blueprint to the User

Present the complete blueprint and ask:
- "Does this capture what you want?"
- "Any sections you want to add, remove, or change?"
- "Are you happy with the copy direction?"
- "Ready to build?"

Wait for explicit confirmation before proceeding to the build.

---

## Step 5: Build — Delegate to Agents

Once the blueprint is approved, delegate the build. **Do not build the pages yourself** — use the Task tool to delegate to the specialist agents.

### Build Delegation Sequence

**1. Delegate to `funnel-builder`:**

> Use the Task tool to ask `funnel-builder` to build the funnel using the approved blueprint. Include:
> - The full blueprint spec (or path to the blueprint file)
> - The funnel type skill to reference (e.g., `skills/webinar-funnel/SKILL.md`, `skills/optin-funnel/SKILL.md`)
> - The design system to apply (`skills/design-system/SKILL.md`) with customizations from the user's brand
> - All JS functionality requirements
> - All integration requirements

Example delegation prompt:
```
Build a [funnel type] funnel based on the approved Funnel Hack Blueprint at [path].

Pages to build:
1. [Page name] — [type] — Reference: skills/[funnel-type]/templates/[template].html
2. [Page name] — [type]
...

Design: Use skills/design-system/SKILL.md with these overrides:
  --accent: [user's brand color]
  --bg-primary: [user's bg color]
  Font: [user's font]

JS Features Required:
  - [countdown timer — evergreen, 24h from visit]
  - [exit-intent popup — show after 30s or on exit]
  - [sticky CTA bar — appears after scrolling past hero]
  ...

Integrations:
  - Email: [provider] — ref: skills/marketing-stack/SKILL.md
  - Payment: [processor] — ref: skills/marketing-stack/SKILL.md
```

**2. Delegate copy polish to `copy-doctor`:**

> Use the Task tool to ask `copy-doctor` to review and sharpen the copy on all built pages. Reference `skills/funnel-copy/SKILL.md` for frameworks.

**3. Delegate audits to `conversion-optimizer` and `page-speed-optimizer`:**

> Use the Task tool to ask `conversion-optimizer` to run the full audit from `skills/conversion-audit/SKILL.md` on every page.
>
> Use the Task tool to ask `page-speed-optimizer` to audit page speed using `skills/page-speed/SKILL.md`.

**4. Delegate mobile check:**

> Ensure all pages pass mobile responsiveness checks per `skills/mobile-responsive/SKILL.md`.

**5. Deploy when ready:**

> When the user approves the final build, delegate to `deploy-assistant` using the appropriate deployment skill (`skills/deploy-netlify/SKILL.md`, `skills/deploy-vercel/SKILL.md`, or `skills/deploy-cloudflare/SKILL.md`).

---

## Step 6: Verification — Final Checklist

Before presenting the finished funnel to the user, verify:

### Copyright & Originality
- [ ] All headlines are original (not copied from source)
- [ ] All body copy is original
- [ ] All CTA copy is original
- [ ] No source images, logos, or brand assets used
- [ ] No source brand name or trademarks referenced
- [ ] No CSS stylesheets copied wholesale
- [ ] Design is inspired-by, not identical-to

### Conversion Completeness
- [ ] Every conversion element from source is replicated or improved
- [ ] All JS functionality works (timers, popups, sticky bars, etc.)
- [ ] Funnel flow matches or improves on source (entry → value → conversion)
- [ ] CTAs appear above the fold on every page
- [ ] Social proof is placed near decision points
- [ ] Urgency/scarcity mechanisms are active
- [ ] Guarantee is clearly stated
- [ ] Forms submit correctly to email provider
- [ ] Payment integration works (if applicable)

### Quality Standards
- [ ] Mobile responsive at all breakpoints — ref: `skills/mobile-responsive/SKILL.md`
- [ ] Page speed < 3s LCP — ref: `skills/page-speed/SKILL.md`
- [ ] Conversion audit score ≥ 70/100 — ref: `skills/conversion-audit/SKILL.md`
- [ ] All links functional (no 404s) — run `scripts/validate-funnel-structure.js`
- [ ] SEO basics in place (title, meta, h1) — ref: `skills/analytics-setup/SKILL.md`
- [ ] A/B test recommendations provided — ref: `skills/ab-testing/SKILL.md`

---

## Quick Reference: Funnel Type → Skill Mapping

When you identify the source funnel type in Step 2, use this table to find the right build skill:

| Identified Funnel Type | Build Skill | Template Location |
|---|---|---|
| Opt-in / Squeeze | `skills/optin-funnel/SKILL.md` | `skills/optin-funnel/templates/` |
| Tripwire | `skills/tripwire-funnel/SKILL.md` | `skills/tripwire-funnel/templates/` |
| Webinar | `skills/webinar-funnel/SKILL.md` | `skills/webinar-funnel/templates/` |
| Evergreen Webinar | `skills/evergreen-webinar-funnel/SKILL.md` | `skills/evergreen-webinar-funnel/templates/` |
| VSL | `skills/vsl-funnel/SKILL.md` | `skills/vsl-funnel/templates/` |
| Product Launch | `skills/product-launch-funnel/SKILL.md` | `skills/product-launch-funnel/templates/` |
| Challenge | `skills/challenge-funnel/SKILL.md` | `skills/challenge-funnel/templates/` |
| Application / High-Ticket | `skills/application-funnel/SKILL.md` | `skills/application-funnel/templates/` |
| High-Ticket (multi-step) | `skills/high-ticket-funnel/SKILL.md` | `skills/high-ticket-funnel/templates/` |
| SaaS | `skills/saas-funnel/SKILL.md` | `skills/saas-funnel/templates/` |
| Membership | `skills/membership-funnel/SKILL.md` | `skills/membership-funnel/templates/` |
| E-commerce | `skills/ecommerce-funnel/SKILL.md` | `skills/ecommerce-funnel/templates/` |

## Quick Reference: JS Functionality Patterns

Common JS patterns to replicate and how to build them:

```javascript
// Evergreen Countdown Timer (session-based)
function startCountdown(hours) {
  const key = 'funnel_deadline';
  let deadline = localStorage.getItem(key);
  if (!deadline) {
    deadline = Date.now() + hours * 60 * 60 * 1000;
    localStorage.setItem(key, deadline);
  }
  // Update display every second
  setInterval(() => {
    const remaining = deadline - Date.now();
    if (remaining <= 0) { /* expired logic */ return; }
    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const s = Math.floor((remaining % 60000) / 1000);
    document.querySelector('.countdown').textContent =
      `${h}h ${m}m ${s}s`;
  }, 1000);
}

// Exit-Intent Popup
document.addEventListener('mouseout', (e) => {
  if (e.clientY < 0 && !sessionStorage.getItem('exit_shown')) {
    document.querySelector('.exit-popup').classList.add('active');
    sessionStorage.setItem('exit_shown', 'true');
  }
});

// Sticky CTA Bar (appears after scrolling past hero)
const observer = new IntersectionObserver(([entry]) => {
  document.querySelector('.sticky-cta').classList
    .toggle('visible', !entry.isIntersecting);
}, { threshold: 0 });
observer.observe(document.querySelector('.hero'));

// Scroll-Triggered Fade-In
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// Social Proof Toast Notifications
const names = ['Sarah from Austin', 'Mike from London', 'Priya from Mumbai'];
function showProofToast() {
  const name = names[Math.floor(Math.random() * names.length)];
  const toast = document.querySelector('.proof-toast');
  toast.textContent = `${name} just signed up!`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}
setInterval(showProofToast, 15000);
```

## Quick Reference: Hook / Story / Offer Extraction

Use this template when analyzing each page:

```
HOOK (what grabs attention):
  Headline: [exact text]
  Headline Formula: [benefit-driven | curiosity | urgency | question | command]
  Sub-headline: [exact text]
  Visual Hook: [hero image | video | animation | bold stat]
  Scroll Stopper: [counter | ticker | social proof bar | before-after]

STORY (what builds connection):
  Framework: [PAS | AIDA | StoryBrand | Before-After-Bridge | none]
  Pain Points Addressed: [list]
  Credibility Elements: [founder story | credentials | press | data]
  Testimonial Pattern: [quote + photo | video | case study | results only]
  Differentiation: [how they position vs alternatives]

OFFER (what's being presented):
  Core Offer: [name and description]
  Price: [amount] | Anchored Against: [higher amount]
  Payment Options: [one-time | plan | trial]
  Bonuses: [list with stated values]
  Guarantee: [type and duration]
  Urgency: [countdown | limited | price increase | seasonal]
  CTA Text: [exact button text]
  CTA Count: [how many times CTA appears on page]
```
