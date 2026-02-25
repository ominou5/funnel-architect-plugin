---
name: dns-management
description: >
  Guides users through DNS configuration for custom funnel domains.
  Covers A/CNAME records, SSL setup, and platform-specific DNS requirements.
---

# DNS Management

## Common DNS Setup Patterns

### Netlify
```
Type: CNAME
Name: @ (or www)
Value: [site-name].netlify.app
TTL: Auto
```

### Vercel
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

### Cloudflare Pages
```
Type: CNAME
Name: @
Value: [project-name].pages.dev
TTL: Auto
```

## DNS Providers Quick Reference

| Provider | Dashboard URL | Propagation |
|---|---|---|
| Cloudflare | dash.cloudflare.com | Instant (proxied) |
| Namecheap | ap.www.namecheap.com | 1–24 hours |
| GoDaddy | dcc.godaddy.com | 1–24 hours |
| Google Domains | domains.google.com | 1–48 hours |
| Route 53 (AWS) | console.aws.amazon.com/route53 | 1–24 hours |

## SSL/TLS
- **Netlify**: Automatic Let's Encrypt (free)
- **Vercel**: Automatic (free)
- **Cloudflare**: Universal SSL (free, edge-only) or Full SSL (end-to-end)

## www vs non-www
Pick one and redirect the other:
- Set primary domain (e.g., `example.com`)
- Add redirect: `www.example.com → example.com` (301)
- Configure in hosting platform's redirect settings

## Verification
```bash
# Check DNS propagation
dig example.com +short

# Check if SSL is active
curl -I https://example.com

# Check redirect
curl -I http://www.example.com
```

## Troubleshooting
- **DNS not propagating**: Wait 24–48 hours, or flush local DNS cache
- **SSL not working**: Ensure DNS points to hosting provider, not old server
- **Mixed content**: Update all internal links to use `https://`
