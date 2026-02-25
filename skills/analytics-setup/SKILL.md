---
name: analytics-setup
description: >
  Sets up analytics and tracking for funnel pages. Covers GA4, Meta Pixel,
  Google Tag Manager, conversion tracking, and UTM parameter handling.
---

# Analytics Setup

Track everything. If you can't measure it, you can't improve it.

## GA4 (Google Analytics 4)

### Basic Installation
```html
<!-- Place in <head> of every page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Custom Events for Funnels
```javascript
// Track CTA clicks
document.querySelectorAll('.cta-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    gtag('event', 'cta_click', {
      event_category: 'funnel',
      event_label: btn.textContent.trim(),
      page_title: document.title
    });
  });
});

// Track form submissions
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', () => {
    gtag('event', 'form_submit', {
      event_category: 'funnel',
      event_label: form.getAttribute('name') || 'unnamed',
      page_title: document.title
    });
  });
});

// Track scroll depth
let scrollMarks = [25, 50, 75, 100];
window.addEventListener('scroll', () => {
  const percent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
  scrollMarks = scrollMarks.filter(mark => {
    if (percent >= mark) {
      gtag('event', 'scroll_depth', { event_category: 'engagement', event_label: mark + '%' });
      return false;
    }
    return true;
  });
});
```

## Meta Pixel (Facebook)

```html
<!-- Place in <head> -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### Key Events to Track
```javascript
// Lead captured
fbq('track', 'Lead', { content_name: 'Free Guide Opt-In' });

// Registration
fbq('track', 'CompleteRegistration', { content_name: 'Webinar' });

// Purchase
fbq('track', 'Purchase', { value: 297, currency: 'USD' });

// Add to cart
fbq('track', 'AddToCart', { value: 47, currency: 'USD' });
```

## UTM Parameter Handling

### Standard UTM Parameters
```
?utm_source=facebook
&utm_medium=cpc
&utm_campaign=webinar-launch
&utm_content=headline-a
&utm_term=marketing-course
```

### Capture and Store UTMs
```javascript
// Save UTMs to localStorage for attribution
const params = new URLSearchParams(window.location.search);
const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
const utms = {};
utmKeys.forEach(key => {
  const val = params.get(key);
  if (val) utms[key] = val;
});
if (Object.keys(utms).length > 0) {
  localStorage.setItem('funnel_utms', JSON.stringify(utms));
}

// Append UTMs to form submission as hidden fields
document.querySelectorAll('form').forEach(form => {
  const stored = JSON.parse(localStorage.getItem('funnel_utms') || '{}');
  Object.entries(stored).forEach(([key, val]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = val;
    form.appendChild(input);
  });
});
```

## Tracking Checklist
- [ ] GA4 installed on all pages
- [ ] Meta Pixel installed (if running Facebook ads)
- [ ] Custom events for CTA clicks, form submissions, scroll depth
- [ ] UTM parameters captured and stored
- [ ] Conversion goals set up in GA4
- [ ] Form submissions tracked as conversions
- [ ] Thank-you page tracked as destination goal
