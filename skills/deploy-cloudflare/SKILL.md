---
name: deploy-cloudflare
description: >
  Deploys funnel pages to Cloudflare Pages. Covers Wrangler CLI setup,
  direct upload, custom domains, and Cloudflare-specific optimizations.
---

# Deploy to Cloudflare Pages

Best for global CDN performance, Workers integration, and free tier generosity.

## Prerequisites
- Node.js installed
- Cloudflare account (free tier includes unlimited sites)

## Setup

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login
wrangler login

# Deploy static site
wrangler pages deploy . --project-name=my-funnel
```

## Configuration (`wrangler.toml`) — Optional

```toml
name = "my-funnel"
compatibility_date = "2025-01-01"

[site]
bucket = "."
```

## Custom Domain
1. **Pages project → Custom domains → Set up a domain**
2. Add CNAME record: `your-project.pages.dev`
3. SSL is automatic with Cloudflare Universal SSL

## Custom Headers (`_headers` file)

```
/*.html
  Cache-Control: public, max-age=300

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.webp
  Cache-Control: public, max-age=31536000, immutable

/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
```

## Redirects (`_redirects` file)

```
/old-page  /new-page  301
/           /index.html  200
/*          /404.html    404
```

## Performance Benefits
- Global CDN (300+ edge locations)
- Automatic Brotli compression
- HTTP/3 support
- Free Web Analytics
