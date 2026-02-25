# MCP Integrations

This plugin ships with `.mcp.json` pre-configured for **Stripe** (the only verified MCP package).

For other integrations, you'll need to add the appropriate MCP server to your `.mcp.json` manually. Below are the recommended community/vendor packages:

## Pre-Configured

| Service | Package | Status |
|---|---|---|
| **Stripe** | `@stripe/agent-toolkit` | ✅ Included |

## User-Configured (Add Your Own)

These integrations are referenced in the skills but require you to install and configure the MCP server yourself:

| Service | Where to Find | Env Vars Needed |
|---|---|---|
| **Google Analytics** | Search [MCP server registry](https://github.com/modelcontextprotocol/servers) | `GA4_PROPERTY_ID` |
| **HubSpot** | Search [MCP server registry](https://github.com/modelcontextprotocol/servers) | `HUBSPOT_API_KEY` |
| **Mailchimp** | Search [MCP server registry](https://github.com/modelcontextprotocol/servers) | `MAILCHIMP_API_KEY` |
| **Vercel** | Search [MCP server registry](https://github.com/modelcontextprotocol/servers) | `VERCEL_TOKEN` |
| **Firebase** | `@anthropic/firebase-mcp` (official) | `FIREBASE_PROJECT_ID` |
| **Supabase** | Search [MCP server registry](https://github.com/modelcontextprotocol/servers) | `SUPABASE_URL`, `SUPABASE_ANON_KEY` |

## Adding an MCP Server

Add entries to your `.mcp.json`:

```json
{
    "service-name": {
        "command": "npx",
        "args": ["-y", "@vendor/mcp-package-name"],
        "env": {
            "API_KEY": "${YOUR_API_KEY}"
        }
    }
}
```

The plugin's skills will automatically use any MCP servers you configure. See individual skill docs in `skills/` for which integrations each skill supports.
