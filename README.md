# 🚀 Funnel Architect — Claude Code Plugin

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive Claude Code plugin for building high-converting sales funnels. Strategy, design, copy, deployment, and optimization — all inside your editor. v 1.0.0 - Warning: There are bound to be issues as it's just been released! Please follow our contributing, security rules, and get me here if you need help or want to discuss: https://www.skool.com/agashic-5136

## What It Does

Tell Claude what you're selling and who you're selling to. Funnel Architect handles the rest:

- **Picks the right funnel type** for your product and price point
- **Generates production-ready pages** (HTML/CSS, React, Next.js, or Astro)
- **Writes conversion copy** using proven frameworks (AIDA, PAS, StoryBrand)
- **Optimizes for speed** (Core Web Vitals, lazy loading, critical CSS)
- **Deploys anywhere** (Vercel, Netlify, Cloudflare Pages)
- **Connects your stack** (email, payments, CRM, analytics)

## Why Funnel Architect?

| Without this plugin | With Funnel Architect |
|---|---|
| Research funnel types manually | Claude picks the optimal funnel for your offer |
| Wire up pages, forms, and CTAs from scratch | 16 production-ready templates across 12 funnel types |
| Hire a copywriter or wing it | 5 specialist agents write, review, and optimize copy |
| Hope your pages load fast | Automated Lighthouse audits and mobile checks on every save |
| Deploy manually | One command to Vercel, Netlify, or Cloudflare |

**Who it's for**: Creators, SaaS founders, coaches, and marketers who want to ship funnels fast without leaving their editor.

## Quick Start

```bash
# 1. Clone the plugin
git clone https://github.com/ominou5/funnel-architect-plugin.git

# 2. Launch Claude Code with the plugin loaded
claude --plugin-dir ./funnel-architect-plugin

# 3. Verify it loaded — skills and agents should appear
/help                              # lists available skills
/agents                            # lists available agents

# 4. Try it out
/agashic-funnel-architect:funnel-select    # pick the right funnel type
# or just ask in plain English:
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
├── skills/                       # 28 skills total
│   ├── funnel-strategy/      # Discovery & blueprint
│   ├── funnel-select/        # Funnel type matcher
│   ├── funnel-hacking/      # Reverse-engineer live funnels
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
│   ├── evergreen-webinar-funnel/ # Evergreen webinar + templates
│   ├── high-ticket-funnel/   # High-ticket + templates
│   ├── membership-funnel/    # Membership + templates
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

- **Mobile Check** (PostToolUse) — validates viewport, touch targets, and fixed widths after every file write ⚠️ *Currently bash-only; Node.js rewrite in progress for Windows/cross-platform support*
- **Lighthouse Audit** (PostToolUse, async) — runs performance analysis in the background
- **Funnel Validation** (Stop) — checks link integrity and structure before completing a session

## Example Prompts

```
"Build an opt-in funnel for my free SEO checklist targeting small business owners"

"Create a webinar registration page for my AI course launching March 15th"

"Audit this landing page for conversion issues and fix the top 3"

"Optimize this page for mobile — it's getting 60% mobile traffic"

"Deploy my funnel to Vercel with a custom domain"

"Hack this funnel: https://example.com/sales-page — rebuild it for my brand"

"Write 5 headline variants for A/B testing my SaaS landing page"
```

## Integrations

**Pre-configured** in `.mcp.json`:
- **Payments**: Stripe (`@stripe/agent-toolkit`)

**Supported via skills** (add your own MCP server):
- Analytics (GA4), CRM (HubSpot), Email (Mailchimp), Hosting (Vercel, Firebase, Supabase)

See [MCP_INTEGRATIONS.md](MCP_INTEGRATIONS.md) for setup instructions.

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
