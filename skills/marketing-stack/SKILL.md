---
name: marketing-stack
description: >
  Integration guide for connecting funnels to marketing tools.
  Covers email providers (Mailchimp, ConvertKit, ActiveCampaign),
  payment processors (Stripe), CRM (HubSpot), and automation platforms.
---

# Marketing Stack Integrations

Connect your funnel to the tools that make it work: email, payments, CRM, and automation.

## Email Service Providers

### Mailchimp
```html
<!-- Mailchimp Embedded Form -->
<form action="https://YOUR-ACCOUNT.us1.list-manage.com/subscribe/post?u=XXXX&amp;id=XXXX" method="post">
  <input type="email" name="EMAIL" placeholder="Email" required>
  <input type="hidden" name="tags" value="funnel-lead">
  <button type="submit">Subscribe</button>
</form>
```

### ConvertKit
```html
<!-- ConvertKit Form -->
<form action="https://app.convertkit.com/forms/FORM_ID/subscriptions" method="post">
  <input type="email" name="email_address" placeholder="Email" required>
  <input type="hidden" name="tags[]" value="TAG_ID">
  <button type="submit">Subscribe</button>
</form>
```

### ActiveCampaign
```html
<!-- ActiveCampaign Form -->
<form action="https://ACCOUNT.activehosted.com/proc.php" method="POST">
  <input type="hidden" name="u" value="FORM_ID">
  <input type="hidden" name="f" value="FORM_ID">
  <input type="email" name="email" placeholder="Email" required>
  <button type="submit">Subscribe</button>
</form>
```

## Payment Processing

### Stripe Checkout
```javascript
// Redirect to Stripe Checkout
async function handlePurchase() {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      priceId: 'price_XXXXXXXXXXXXXXXX',
      successUrl: window.location.origin + '/thank-you',
      cancelUrl: window.location.origin + '/offer'
    })
  });
  const { url } = await response.json();
  window.location.href = url;
}
```

### Stripe Payment Link (No-Code)
```html
<a href="https://buy.stripe.com/XXXXXX" class="cta-primary">
  Buy Now — $297
</a>
```

## CRM Integration

### HubSpot Form
```html
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "YOUR_PORTAL_ID",
    formId: "YOUR_FORM_ID",
    target: "#hubspot-form"
  });
</script>
<div id="hubspot-form"></div>
```

## Webhook Integration (Universal)
For any tool that supports webhooks:
```javascript
// Send form data to a webhook
document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  await fetch('https://hooks.your-automation.com/webhook/XXXX', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  window.location.href = '/thank-you';
});
```

## Integration Checklist
- [ ] Email provider connected (forms submit to list)
- [ ] Welcome email triggers on signup
- [ ] Payment processor connected
- [ ] Thank-you page redirects correctly after purchase
- [ ] CRM receives lead data
- [ ] Tags/segments applied automatically
- [ ] Automation sequences triggered
