# Contributing to Funnel Architect

Thank you for your interest in contributing! This plugin is open-source under the MIT license and welcomes community contributions.

## Quick Start

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/funnel-architect-plugin.git`
3. **Branch** from `main`: `git checkout -b feat/my-feature`
4. **Make your changes** following the guidelines below
5. **Test** locally: run `claude` from inside the plugin directory
6. **Push** and open a PR

## Branch Naming

| Prefix | Use Case | Example |
|---|---|---|
| `feat/` | New funnel type, skill, or agent | `feat/quiz-funnel` |
| `fix/` | Bug fixes in hooks, scripts, or agents | `fix/lighthouse-timeout` |
| `docs/` | Documentation improvements | `docs/deployment-guide` |
| `refactor/` | Code cleanup, no behavior change | `refactor/mobile-check` |

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add quiz funnel skill with lead scoring
fix: resolve lighthouse audit timeout on large sites
docs: clarify MCP integration setup for Stripe
```

## What to Contribute

### 🏗️ Funnel Templates (Most Impactful)
New funnel types and improved templates are the highest-value contributions.

1. Add your skill in `skills/<funnel-name>/`
2. Include a `SKILL.md` with proper frontmatter
3. Add at least one production-ready HTML template in `templates/`
4. Templates must be mobile-first, dark theme, and include a clear CTA

### 📝 Skill Improvements
- Improve existing copy frameworks, UX patterns, or optimization checklists
- Add new headline formulas, CTA patterns, or objection handlers
- Fix inaccuracies in deployment or integration guides

### 🐛 Bug Fixes
- Fix issues with hooks, scripts, or agent configurations
- Improve error handling in utility scripts

### 🤖 Agent Enhancements
- Improve agent prompts for better output quality
- Add new specialist agents (must justify the need in your PR)

## Skill Structure

Every skill must follow this structure:

```
skills/<skill-name>/
├── SKILL.md           # Required: frontmatter + instructions
├── templates/         # Optional: starter HTML templates
└── examples.md        # Optional: real-world examples
```

### SKILL.md Frontmatter

```yaml
---
name: my-skill
description: >
  Clear description of what this skill does and when Claude should use it.
  Must be specific enough for Claude to know when to invoke it automatically.
---
```

## Code Quality Standards

- **Skills**: Markdown with YAML frontmatter, clear step-by-step instructions
- **Templates**: Clean, well-commented HTML/CSS. Mobile-first. No external framework dependencies
- **Scripts**: Handle errors gracefully, exit with proper codes, read/write JSON for hook I/O
- **Agents**: Clear role definition, specific delegation rules, no overlapping responsibilities

## Pull Request Process

### Before Submitting
- [ ] Tested locally by running `claude` from inside the plugin directory
- [ ] Templates are mobile-responsive (test at 375px width)
- [ ] No hardcoded API keys, secrets, or personal data
- [ ] SKILL.md frontmatter is valid YAML
- [ ] New skills include at least one template

### PR Description Template

```markdown
## What
Brief description of what this PR adds or fixes.

## Why
Why this change is needed — what problem does it solve?

## Testing
How you tested it (e.g., "Ran `claude` from the plugin directory and built a webinar funnel").

## Screenshots (if applicable)
Include screenshots of any template output.
```

### Review Timeline
- **Acknowledgment**: Within 3 days
- **Review**: Within 7 days
- **Templates** are checked for mobile responsiveness and page speed
- **Copy frameworks** are evaluated against conversion best practices

## Security

Found a vulnerability? **Do not open a public issue.** See [SECURITY.md](SECURITY.md).

## Code of Conduct

Be respectful, constructive, and focused on helping users build better funnels.
