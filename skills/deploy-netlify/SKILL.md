---
name: deploy-netlify
description: >
  Deploys funnel pages to Netlify. Covers CLI setup, deploy commands,
  environment variables, custom domains, and redirect configuration.
---

# Deploy to Netlify

## Prerequisites
- Node.js installed
- Netlify account (free tier works for funnels)

## Setup

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize project (first time only)
netlify init
```

## Deploy Commands

```bash
# Deploy a preview (draft URL)
netlify deploy --dir=.

# Deploy to production
netlify deploy --dir=. --prod
```

## Netlify Configuration (`netlify.toml`)

```toml
[build]
  publish = "."

# Redirect www to non-www
[[redirects]]
  from = "https://www.example.com/*"
  to = "https://example.com/:splat"
  status = 301

# Custom 404 page
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404

# Headers for performance
[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=300"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.webp"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Custom Domain
1. Go to **Site settings → Domain management → Add custom domain**
2. Add a CNAME record pointing to `[site-name].netlify.app`
3. Enable HTTPS (automatic with Let's Encrypt)

## Environment Variables
Set via Netlify dashboard: **Site settings → Environment variables**
Or via CLI: `netlify env:set KEY value`

## Form Handling
Netlify has built-in form handling — add `netlify` attribute:
```html
<form name="lead-capture" method="POST" data-netlify="true">
  <input type="email" name="email" required>
  <button type="submit">Subscribe</button>
</form>
```
