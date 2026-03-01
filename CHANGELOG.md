# Changelog

All notable changes to the Funnel Architect plugin will be documented in this file.

## [1.1.0] - 2025-03-01

### Added
- **Funnel Hacking** skill (`skills/funnel-hacking/`) — reverse-engineer any live public funnel and rebuild it for the user's brand
  - Full 6-step autonomous workflow: Intake → Crawl & Extract → Discovery → Blueprint → Build Delegation → Verification
  - Hook/Story/Offer analysis framework (Russell Brunson methodology)
  - JavaScript functionality audit and replication patterns
  - Structured templates: `analysis-template.md` and `blueprint-template.md`
  - Cross-references all 12 funnel type skills and all 5 agents
  - Ethics guardrails to prevent copyright infringement

### Changed
- `CLAUDE.md` — added funnel hacking delegation row and workflow trigger section
- `agents/funnel-builder.md` — added `funnel-hacking` to skills list
- Skill count: 27 → 28

## [1.0.0] - 2025-02-24

### Added
- Plugin manifest and core architecture
- CLAUDE.md orchestrator (Funnel Architect persona)

#### Skills (27 total)
- 6 core skills: funnel-strategy, funnel-select, conversion-ux, page-speed, mobile-responsive, design-system
- 3 cross-cutting skills: funnel-copy, ab-testing, conversion-audit
- 4 deployment skills: deploy-netlify, deploy-vercel, deploy-cloudflare, dns-management
- 2 integration skills: analytics-setup, marketing-stack
- 12 funnel type skills: optin, webinar, saas, vsl, product-launch, tripwire, challenge, application, evergreen-webinar, high-ticket, membership, ecommerce
- 16 production-ready HTML templates across all 12 funnel types

#### Agents (5)
- funnel-builder, conversion-optimizer, page-speed-optimizer, copy-doctor, deploy-assistant

#### Hooks
- PostToolUse: sync mobile responsiveness check (mobile-check.sh)
- PostToolUse: async Lighthouse performance audit (lighthouse-audit.js)
- Stop: link integrity validation (validate-funnel-structure.js)

#### Integrations
- Pre-configured MCP server: Stripe (@stripe/agent-toolkit)
- MCP integration guide for GA4, HubSpot, Mailchimp, Vercel, Firebase, Supabase

#### Documentation
- README, CONTRIBUTING.md, SECURITY.md, MCP_INTEGRATIONS.md, LICENSE (MIT)
