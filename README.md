# 🚀 Funnel Architect — Claude Code Plugin

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive Claude Code plugin for building high-converting sales funnels. Strategy, design, copy, deployment, and optimization — all inside your editor.

## What It Does

Tell Claude what you're selling and who you're selling to. Funnel Architect handles the rest:

- **Picks the right funnel type** for your product and price point
- **Generates production-ready pages** (HTML/CSS, React, Next.js, or Astro)
- **Writes conversion copy** using proven frameworks (AIDA, PAS, StoryBrand)
- **Optimizes for speed** (Core Web Vitals, lazy loading, critical CSS)
- **Deploys anywhere** (Vercel, Netlify, Cloudflare Pages)
- **Connects your stack** (email, payments, CRM, analytics)

## Quick Start

```bash
# Clone the plugin
git clone https://github.com/ominou5/funnel-architect-plugin.git

# Add to your Claude Code plugins directory
# (see Claude Code docs for plugin installation)

# Start Claude Code in your project
claude

# Then ask:
# "Build me an opt-in funnel for a free marketing checklist"
```

## Plugin Structure

```
funnel-architect-plugin/
├── .claude-plugin/
│   └── plugin.json          # Plugin manifest
├── agents/
│   ├── funnel-builder.md     # Primary builder
│   ├── conversion-optimizer.md
│   ├── page-speed-optimizer.md
│   ├── copy-doctor.md
│   └── deploy-assistant.md
├── skills/                       # 27 skills total
│   ├── funnel-strategy/      # Discovery & blueprint
│   ├── funnel-select/        # Funnel type matcher
│   ├── conversion-ux/        # CRO patterns
│   ├── page-speed/           # Performance optimization
│   ├── mobile-responsive/    # Mobile-first design
│   ├── design-system/        # Visual language & tokens
│   ├── funnel-copy/          # Copywriting frameworks
│   ├── ab-testing/           # Testing strategy
│   ├── conversion-audit/     # Funnel audit framework
│   ├── analytics-setup/      # GA4, Meta Pixel, UTMs
│   ├── marketing-stack/      # Email, payments, CRM
│   ├── optin-funnel/         # Opt-in + templates
│   ├── webinar-funnel/       # Webinar + templates
│   ├── saas-funnel/          # SaaS + templates
│   ├── vsl-funnel/           # Video Sales Letter + templates
│   ├── product-launch-funnel/# PLF + templates
│   ├── tripwire-funnel/      # Tripwire + templates
│   ├── challenge-funnel/     # Challenge + templates
│   ├── application-funnel/   # Application + templates
│   ├── evergreen-webinar-funnel/
│   ├── high-ticket-funnel/
│   ├── membership-funnel/
│   ├── ecommerce-funnel/     # E-commerce + templates
│   ├── deploy-netlify/       # Netlify deployment
│   ├── deploy-vercel/        # Vercel deployment
│   ├── deploy-cloudflare/    # Cloudflare Pages deployment
│   └── dns-management/       # Custom domain setup
├── hooks/
│   └── hooks.json            # Automated checks
├── scripts/
│   ├── mobile-check.sh       # Mobile responsiveness check
│   ├── lighthouse-audit.js   # Performance audit
│   └── validate-funnel-structure.js
├── .mcp.json                 # Pre-configured MCP servers
├── settings.json             # Default agent config
├── marketplace.json          # Distribution metadata
├── CHANGELOG.md
├── CONTRIBUTING.md
└── LICENSE (MIT)
```

## Agents

| Agent | Role |
|---|---|
| **Funnel Builder** | Primary builder — designs funnel flows, generates pages, applies conversion patterns |
| **Conversion Optimizer** | CRO specialist — analyzes pages, recommends improvements |
| **Page Speed Optimizer** | Performance expert — audits and fixes Core Web Vitals |
| **Copy Doctor** | Copywriter — headlines, CTAs, objection handlers |
| **Deploy Assistant** | DevOps — deploys to Vercel, Netlify, or Cloudflare |

## Supported Funnel Types (12)

| Funnel | Pages | Best For |
|---|---|---|
| **Opt-In** | Squeeze → Thank You | Lead magnets, email list building |
| **Webinar** | Registration → Confirmation → Live Room → Offer | Courses, coaching, high-ticket |
| **SaaS** | Landing → Signup → Onboarding → Pricing | Software products, free trials |
| **VSL** | Video Page → Order → Upsell | Info products, courses ($97–$2K) |
| **Product Launch** | Opt-In → PLC 1–3 → Sales Page | Courses, programs, memberships |
| **Tripwire** | Opt-In → $7–$47 Offer → Upsell | Buyer list building, ad offset |
| **Challenge** | Registration → Daily Pages → Offer | Community, coaching ($197–$997) |
| **Application** | Landing → Application → Booking | Coaching, consulting ($2K+) |
| **Evergreen Webinar** | Registration → Auto-Play → Offer | Scaling proven webinars 24/7 |
| **High-Ticket** | Authority Content → Sales Page → Call | Programs, services ($3K+) |
| **Membership** | Landing → Trial → Onboarding → Dashboard | Communities, content libraries |
| **E-Commerce** | Product Page → Cart → Checkout → Upsell | Physical/digital products, DTC |

## Automated Hooks

The plugin runs checks automatically as you build:

- **Mobile Check** (PostToolUse) — validates viewport, touch targets, and fixed widths after every file write
- **Lighthouse Audit** (PostToolUse, async) — runs performance analysis in the background
- **Funnel Validation** (Stop) — checks link integrity and structure before completing a session

## Example Prompts

```
"Build an opt-in funnel for my free SEO checklist targeting small business owners"

"Create a webinar registration page for my AI course launching March 15th"

"Audit this landing page for conversion issues and fix the top 3"

"Optimize this page for mobile — it's getting 60% mobile traffic"

"Deploy my funnel to Vercel with a custom domain"

"Write 5 headline variants for A/B testing my SaaS landing page"
```

## Pre-Configured Integrations

The plugin includes MCP server definitions for:
- **Analytics**: Google Analytics 4
- **Payments**: Stripe
- **CRM**: HubSpot
- **Email**: Mailchimp
- **Hosting**: Vercel, Firebase, Supabase

Add your API keys to activate. See `.mcp.json` for configuration.

## Contributing

We welcome PRs! The fastest way to contribute:

1. **Fork** → **Branch** (`feat/`, `fix/`, `docs/`) → **PR**
2. Test locally with `claude --plugin-dir ./`
3. Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages

**Highest-impact contributions**: new funnel templates, copy frameworks, and skill improvements.

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines, PR template, and code standards.

Found a security issue? See [SECURITY.md](SECURITY.md).

## License

MIT — see [LICENSE](LICENSE)
