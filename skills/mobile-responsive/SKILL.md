---
name: mobile-responsive
description: >
  Mobile-first responsive design patterns for sales funnels.
  Ensures every page works flawlessly on all screen sizes with
  proper touch targets, readable typography, and fast load times.
---

# Mobile-Responsive Design

Over 60% of funnel traffic comes from mobile. Build mobile-first, always.

## Breakpoint System

```css
/* Mobile-first: base styles are for mobile */

/* Tablet */
@media (min-width: 768px) { /* ... */ }

/* Desktop */
@media (min-width: 1024px) { /* ... */ }

/* Large desktop */
@media (min-width: 1280px) { /* ... */ }
```

## Required Meta Tag

Every HTML page must include:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Layout Patterns

### Single-Column Mobile Layout
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Stack everything on mobile */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

### Sticky Mobile CTA
```css
.mobile-cta-bar {
  display: none;
}

@media (max-width: 767px) {
  .mobile-cta-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .mobile-cta-bar .cta-primary {
    width: 100%;
    min-height: 48px;
    font-size: 16px;
  }

  /* Prevent content overlap with sticky bar */
  body { padding-bottom: 80px; }
}
```

## Typography Scale

```css
:root {
  /* Mobile-first sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px — minimum for body */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
}

h1 {
  font-size: var(--text-3xl);
  line-height: 1.2;
}

@media (min-width: 768px) {
  h1 { font-size: var(--text-4xl); }
}

@media (min-width: 1024px) {
  h1 { font-size: 3rem; /* 48px */ }
}

body {
  font-size: var(--text-base); /* Never below 16px — prevents iOS zoom */
  line-height: 1.6;
}
```

## Touch Target Requirements

```css
/* Minimum 44x44px for all interactive elements */
button, a, input, select, textarea {
  min-height: 44px;
  min-width: 44px;
}

/* Adequate spacing between tap targets */
.nav-links a {
  padding: 12px 16px;
}

.form-group + .form-group {
  margin-top: 16px;
}
```

## Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

## Mobile Testing Checklist

- [ ] Viewport meta tag present
- [ ] No horizontal scroll at any viewport width
- [ ] All text readable without zooming (min 16px)
- [ ] All touch targets at least 44x44px
- [ ] Forms usable with thumb (single column, large inputs)
- [ ] CTA visible without scrolling OR sticky bar present
- [ ] Images scale proportionally
- [ ] No fixed-width elements wider than viewport
- [ ] Modals/popups fit within mobile viewport
- [ ] Page loads in < 3s on 3G connection
