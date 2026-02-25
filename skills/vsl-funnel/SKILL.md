---
name: vsl-funnel
description: >
  Video Sales Letter funnel. A high-converting format that uses a
  long-form video to present the offer, followed by an order page.
  Best for info products, courses, and coaching in the $97–$2,000 range.
---

# VSL Funnel

The Video Sales Letter funnel replaces long-form sales copy with a persuasive video. The viewer watches, then clicks a CTA that appears after a timed delay.

## Flow

```
Traffic → VSL Page → Order Page → Thank You / Upsell
```

| Page | Purpose | Key Element |
|---|---|---|
| VSL Page | Deliver sales message via video | Auto-play video, delayed CTA button |
| Order Page | Capture payment | Order form, guarantee, testimonials |
| Upsell (optional) | One-click upsell after purchase | Single CTA, limited offer |
| Thank You | Confirm purchase, deliver access | Login details, next steps |

## VSL Page Requirements

### Video Player
- **Autoplay** (muted with unmute prompt on mobile)
- **No controls** visible — no scrub bar, no skip (optional, controversial)
- **Timed CTA reveal** — button appears after 60–80% of video plays
- Simple embed: Wistia, Vimeo Pro, or Bunny Stream preferred (no YouTube — ads distract)

### Timed CTA Pattern
```javascript
// Reveal CTA button after X seconds
const video = document.querySelector('video');
const cta = document.querySelector('.cta-delayed');
const REVEAL_SECONDS = 900; // 15 minutes

video.addEventListener('timeupdate', () => {
  if (video.currentTime >= REVEAL_SECONDS) {
    cta.classList.add('visible');
  }
});
```

### Page Layout
- **Minimal**: headline + video + CTA only
- **No navigation** — no distractions
- **Dark background** — keeps focus on video
- Optional: countdown timer below video for urgency

## VSL Script Framework (for copywriter reference)

```
1. Pattern Interrupt (0:00–0:30)
   Hook that stops the scroll — bold claim, curiosity, controversy

2. Story / Problem (0:30–5:00)
   Relatable origin story that mirrors the viewer's pain

3. Solution Reveal (5:00–8:00)
   Introduce the product as the bridge from pain to outcome

4. Proof (8:00–12:00)
   Testimonials, case studies, results, credentials

5. Offer Stack (12:00–16:00)
   Core product + bonuses with value anchoring

6. Price Reveal & Close (16:00–18:00)
   Price drop, guarantee, urgency, final CTA

7. FAQ / Objection Crusher (18:00–20:00)
   Address remaining doubts
```

## Conversion Benchmarks

| Metric | Target |
|---|---|
| VSL page view → watch 25% | > 50% |
| Watch 25% → watch 75% | > 40% |
| Watch 75% → click CTA | > 15% |
| Click CTA → purchase | > 5% |
| Overall visitor → purchase | > 1.5% |

## A/B Tests
- CTA reveal time (earlier vs. later)
- Headline above video vs. no headline
- Video thumbnail (play button styles)
- Order page: one-step vs. two-step checkout
- Upsell offer vs. no upsell
