---
name: funnel-select
description: >
  Decision-tree skill that recommends the optimal funnel type based on the user's
  business model, price point, audience, and goals. Returns a ranked recommendation
  with reasoning.
---

# Funnel Selector

Use this decision tree to recommend the best funnel type for the user's situation.

## Decision Tree

```
START
│
├─ What is the primary goal?
│  │
│  ├─ Collect leads / grow email list
│  │  ├─ Offering a PDF/checklist/template? → OPT-IN FUNNEL
│  │  ├─ Want to segment / qualify leads? → QUIZ FUNNEL
│  │  ├─ Promoting a book? → BOOK FUNNEL
│  │  └─ Building anticipation for a launch? → WAITLIST FUNNEL
│  │
│  ├─ Sell a product or service
│  │  ├─ Price < $50?
│  │  │  ├─ Want to upsell immediately? → TRIPWIRE FUNNEL
│  │  │  └─ Simple one-time sale? → DIRECT RESPONSE FUNNEL
│  │  ├─ Price $50–$500?
│  │  │  ├─ Physical product? → E-COMMERCE FUNNEL
│  │  │  └─ Digital product/service? → DIRECT RESPONSE FUNNEL
│  │  ├─ Price $500–$2,000?
│  │  │  ├─ Need to educate first? → WEBINAR FUNNEL
│  │  │  └─ Community/cohort model? → CHALLENGE FUNNEL
│  │  ├─ Price $2,000+?
│  │  │  ├─ Need qualification? → APPLICATION FUNNEL
│  │  │  └─ Event-based education? → SUMMIT FUNNEL
│  │  └─ Recurring revenue?
│  │     ├─ Software product? → SAAS FUNNEL
│  │     └─ Content/community? → MEMBERSHIP FUNNEL
│  │
│  ├─ Recruit affiliates / partners
│  │  └─ → AFFILIATE FUNNEL
│  │
│  └─ Complex multi-stage sale
│     └─ → MULTI-STEP FUNNEL
```

## Funnel Comparison Table

| Funnel | Pages | Complexity | Best For | Conversion Benchmark |
|---|---|---|---|---|
| Opt-in | 2 | ⭐ | Email list building | 30–50% opt-in |
| Quiz | 3–5 | ⭐⭐ | Lead segmentation | 40–60% completion |
| Book | 3–4 | ⭐⭐ | Authority building | 5–15% purchase |
| Waitlist | 2 | ⭐ | Pre-launch buzz | 20–40% signup |
| Tripwire | 3–4 | ⭐⭐ | Buyer acquisition | 3–8% purchase |
| Direct Response | 3–5 | ⭐⭐⭐ | Mid-ticket sales | 1–5% purchase |
| E-commerce | 3–5 | ⭐⭐⭐ | Physical products | 2–4% purchase |
| Webinar | 4–6 | ⭐⭐⭐ | High-ticket education | 2–10% of attendees |
| Challenge | 5–8 | ⭐⭐⭐⭐ | Community engagement | 5–15% of participants |
| Summit | 5–8 | ⭐⭐⭐⭐ | List building + sales | 10–30% registration |
| Application | 4–6 | ⭐⭐⭐ | Premium services | 5–20% application |
| SaaS | 4–6 | ⭐⭐⭐⭐ | Software trials | 2–10% trial→paid |
| Membership | 4–6 | ⭐⭐⭐⭐ | Recurring content | 3–8% conversion |
| Affiliate | 3–4 | ⭐⭐ | Partner recruitment | 10–25% signup |
| Multi-step | 5–10 | ⭐⭐⭐⭐⭐ | Complex B2B sales | Varies |

## Output

After running the decision tree, present:

1. **Primary Recommendation** — The best-fit funnel type with reasoning
2. **Alternative** — A second option if the first doesn't resonate
3. **Page List** — The specific pages that will be built
4. **Estimated Build Time** — How long the funnel will take to generate
