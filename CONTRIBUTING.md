# Contributing to Sales Funnel Plugin

Thank you for your interest in contributing! This plugin is open-source under the MIT license and welcomes community contributions.

## How to Contribute

### Funnel Templates
The most impactful contributions are **new funnel templates** and **improved copy frameworks**.

1. Fork the repository
2. Create a branch: `git checkout -b feat/my-funnel-type`
3. Add your skill in `skills/<funnel-name>/`
4. Include a `SKILL.md` with proper frontmatter, at least one template, and an `examples.md`
5. Submit a PR with a description of the funnel type and why it's useful

### Skill Improvements
- Improve existing copy frameworks, UX patterns, or optimization checklists
- Add new supporting files (e.g., new headline formulas, new CTA patterns)
- Fix inaccuracies in deployment or integration guides

### Bug Fixes
- Fix issues with hooks, scripts, or agent configurations
- Improve error handling in utility scripts

## Skill Structure

Every skill must follow this structure:

```
skills/<skill-name>/
├── SKILL.md           # Required: frontmatter + instructions
├── templates/         # Optional: starter HTML/CSS/React templates
├── examples.md        # Optional: real-world examples
└── <supporting>.md    # Optional: reference documentation
```

### SKILL.md Requirements

```yaml
---
name: my-skill
description: >
  Clear description of what this skill does and when Claude should use it.
  Must be specific enough for Claude to know when to invoke it automatically.
---

# Skill Title

Instructions for Claude to follow...
```

## Code Style
- Skills use Markdown with YAML frontmatter
- Templates should be clean, well-commented HTML/CSS
- Scripts should handle errors gracefully and exit cleanly
- All hooks must read JSON from stdin and output JSON

## PR Review Process
1. PRs are reviewed within 7 days
2. Skills are tested with `claude --plugin-dir ./` before merge
3. Templates are checked for mobile responsiveness and page speed
4. Copy frameworks are evaluated against conversion best practices

## Code of Conduct
Be respectful, constructive, and focused on helping users build better funnels.
