# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this plugin, **please do not open a public issue**.

Instead, report it privately:

- **Twitter**: [@samrexford](https://x.com/samrexford)
- **GitHub**: Use [private vulnerability reporting](https://github.com/ominou5/funnel-architect-plugin/security/advisories/new)

## What Constitutes a Vulnerability

- Template code that introduces XSS, CSRF, or injection risks
- Hook scripts that execute unintended commands
- MCP server configurations that leak credentials
- Any code that could compromise a user's local environment

## Response Timeline

- **Acknowledgment**: Within 48 hours
- **Assessment**: Within 1 week
- **Fix**: Severity-dependent, typically within 2 weeks

## Scope

This policy covers the plugin code, templates, hooks, and scripts in this repository. Third-party MCP servers referenced in `.mcp.json` are maintained by their respective vendors.
