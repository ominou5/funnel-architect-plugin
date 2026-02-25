---
name: ab-testing
description: >
  A/B testing strategy and implementation for funnel pages. Defines what to test,
  how to structure variants, statistical significance thresholds,
  and common testing patterns.
---

# A/B Testing

Test everything. Opinions are nice — data is better.

## What to Test (Priority Order)

| Priority | Element | Expected Impact |
|---|---|---|
| 🔴 P0 | Headline | 10–50% lift |
| 🔴 P0 | CTA text + color | 5–30% lift |
| 🟡 P1 | Hero image/video | 5–20% lift |
| 🟡 P1 | Form fields (fewer vs. more) | 10–40% lift |
| 🟡 P1 | Social proof placement | 5–15% lift |
| 🟢 P2 | Page layout (long vs. short) | 5–20% lift |
| 🟢 P2 | Pricing display | 5–25% lift |
| 🟢 P2 | Urgency messaging | 3–15% lift |
| 🔵 P3 | Color scheme | 2–10% lift |
| 🔵 P3 | Font choices | 1–5% lift |

## Testing Rules

1. **Test one variable at a time** — Change only the element being tested
2. **50/50 split** — Equal traffic to each variant
3. **Minimum sample size** — At least 100 conversions per variant before calling a winner
4. **Statistical significance** — Wait for 95% confidence before declaring a winner
5. **Run for at least 7 days** — Captures day-of-week variations
6. **Document everything** — Record hypothesis, variant details, and results

## Test Hypothesis Template

```
HYPOTHESIS: If we change [element] from [current] to [proposed],
then [metric] will [increase/decrease] by [estimated %]
because [reasoning based on conversion principles].

TEST SETUP:
- Control (A): [Current version description]
- Variant (B): [New version description]
- Primary metric: [Conversion rate / Click rate / etc.]
- Secondary metric: [Revenue / Engagement / etc.]
- Required sample: [Number] visitors per variant
- Estimated duration: [X] days at [Y] daily visitors
```

## Common Tests by Page Type

### Opt-In Page
- Headline: Problem-focused vs. Solution-focused
- CTA: "Get Free Access" vs. "Download Now" vs. "Send Me the Guide"
- Form: Email only vs. Name + Email
- Social proof: Subscriber count vs. Testimonial

### Sales Page
- Long-form vs. Short-form copy
- Video sales letter vs. Text
- Testimonials at top vs. After offer
- Payment: One-time vs. Payment plan (default)

### Pricing Page
- 2 plans vs. 3 plans
- Annual default vs. Monthly default
- Feature comparison table vs. Simple list
- "Most Popular" badge placement

## Results Tracking

After each test, log:

```
TEST: [Test Name]
DATE: [Start] → [End]
TRAFFIC: [Total visitors] ([Per variant])
RESULTS:
  Control: [X]% conversion ([N] conversions)
  Variant: [Y]% conversion ([N] conversions)
WINNER: [Control/Variant]
LIFT: [+/- X]%
CONFIDENCE: [X]%
NEXT: [What to test next based on learnings]
```
