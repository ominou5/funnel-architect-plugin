---
name: deploy-vercel
description: >
  Deploys funnel pages to Vercel. Covers CLI setup, project init,
  framework detection, environment variables, and custom domains.
---

# Deploy to Vercel

Best for React/Next.js funnels and projects that benefit from edge functions.

## Prerequisites
- Node.js installed
- Vercel account (free Hobby tier works for funnels)

## Setup

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (first time — will prompt for config)
vercel

# Deploy to production
vercel --prod
```

## Configuration (`vercel.json`)

```json
{
  "headers": [
    {
      "source": "/(.*).html",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=300" }]
    },
    {
      "source": "/(.*).css",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/(.*).js",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ],
  "redirects": [
    { "source": "/old-page", "destination": "/new-page", "permanent": true }
  ],
  "cleanUrls": true,
  "trailingSlash": false
}
```

## Custom Domain
1. Go to **Project settings → Domains**
2. Add your domain
3. Update DNS: add A record `76.76.21.21` or CNAME to `cname.vercel-dns.com`
4. SSL is automatic

## Environment Variables
```bash
# Add via CLI
vercel env add VARIABLE_NAME

# Or via Dashboard: Project settings → Environment Variables
```

## Framework Support
Vercel auto-detects: Next.js, React (Vite/CRA), Astro, and static HTML.
No additional configuration needed for supported frameworks.
