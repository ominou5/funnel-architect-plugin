---
name: design-system
description: >
  Design system and visual language for sales funnels.
  Provides color palettes, typography, spacing, component styles,
  and theming guidelines for a polished, premium look.
---

# Funnel Design System

Every funnel must look premium. This design system ensures visual consistency and a professional brand feel across all pages.

## Color Palettes

### Default — Modern Dark

```css
:root {
  /* Backgrounds */
  --bg-primary: #0F172A;
  --bg-secondary: #1E293B;
  --bg-card: #334155;
  --bg-elevated: #475569;

  /* Text */
  --text-primary: #F8FAFC;
  --text-secondary: #CBD5E1;
  --text-muted: #94A3B8;

  /* Accent — CTA color */
  --accent: #3B82F6;
  --accent-hover: #2563EB;
  --accent-glow: rgba(59, 130, 246, 0.3);

  /* Success / Warning / Error */
  --success: #22C55E;
  --warning: #F59E0B;
  --error: #EF4444;

  /* Borders */
  --border: rgba(255, 255, 255, 0.1);
  --border-hover: rgba(255, 255, 255, 0.2);
}
```

### Alternative — Clean Light

```css
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --bg-card: #FFFFFF;
  --bg-elevated: #F1F5F9;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #94A3B8;
  --accent: #6366F1;
  --accent-hover: #4F46E5;
  --accent-glow: rgba(99, 102, 241, 0.2);
  --border: rgba(0, 0, 0, 0.08);
  --border-hover: rgba(0, 0, 0, 0.15);
}
```

### Alternative — Warm Conversion

```css
:root {
  --bg-primary: #1A1A2E;
  --bg-secondary: #16213E;
  --bg-card: #0F3460;
  --text-primary: #EAEAEA;
  --text-secondary: #B8B8D1;
  --accent: #E94560;
  --accent-hover: #D63851;
  --accent-glow: rgba(233, 69, 96, 0.3);
}
```

## Spacing Scale

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
}

section {
  padding: var(--space-16) var(--space-4);
}

@media (min-width: 768px) {
  section { padding: var(--space-20) var(--space-8); }
}

@media (min-width: 1024px) {
  section { padding: var(--space-24) var(--space-16); }
}
```

## Component Styles

### Primary CTA Button

```css
.cta-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  background: var(--accent);
  color: #FFFFFF;
  font-size: 1.125rem;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  min-height: 48px;
  box-shadow: 0 4px 14px var(--accent-glow);
}

.cta-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--accent-glow);
}
```

### Card

```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: var(--space-8);
  transition: all 0.2s ease;
}

.card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
```

### Glass Card (Premium)

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: var(--space-8);
}
```

### Form Input

```css
.form-input {
  width: 100%;
  padding: 14px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: border-color 0.2s ease;
  min-height: 48px;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.form-input::placeholder {
  color: var(--text-muted);
}
```

## Animation Library

```css
/* Fade in on scroll */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Pulse animation for CTA */
@keyframes pulse {
  0%, 100% { box-shadow: 0 4px 14px var(--accent-glow); }
  50% { box-shadow: 0 4px 24px var(--accent-glow); }
}

.cta-pulse {
  animation: pulse 2s ease-in-out infinite;
}

/* Slide in from left */
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Counter animation for stats */
@keyframes countUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## Base Reset

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```
