# Emma Cassidy — Lead Content Designer Portfolio

## Overview

This is a minimalist, typographic portfolio website inspired by sergeikurnosov.com. It features high contrast, generous whitespace, clean grids, bold display type, and restrained color.

## Design System

### Color Tokens

Located in `/src/styles/theme.css`:

- `--ink: #0A0A0A` — Primary text color
- `--paper: #FFFFFF` — Background
- `--accent-primary: #111111` — Nearly black for type-heavy sections
- `--accent-secondary: #EDEDED` — Soft dividers and cards
- `--state-hover: rgba(10, 10, 10, 0.08)` — Hover states
- `--state-focus: #1A73E8` — Focus outline (WCAG compliant)

### Typography Scale

All typography uses **Inter** font family (imported from Google Fonts):

- **Display XL (H1)**: 64px / 72px line height, 700 weight
- **Display L (H2)**: 44px / 52px line height, 700 weight
- **Headline (H3)**: 28px / 36px line height, 600 weight
- **Body L**: 20px / 30px line height, 400 weight
- **Body M**: 16px / 26px line height, 400 weight
- **Caption**: 13px / 18px line height, 400 weight

### Spacing Scale

- 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

### Layout

- Desktop max-width: 1200px
- Container margins: 80px (desktop), 32px (mobile)
- Responsive breakpoints handled by Tailwind CSS

## Site Structure

### Pages

1. **Home** (`/`) — Hero, highlights, selected case studies
2. **About** (`/about`) — Bio, certifications, yoga teaching, contact
3. **Education** (`/education`) — Academic degrees and focus areas
4. **Case Studies** (`/case-studies`) — Detailed IBM and Sage case studies

### Navigation

- Persistent header with logo and nav links
- Mobile-responsive hamburger menu
- Footer with contact information and external links

## Components

All components are located in `/src/app/components/`:

### Global Components

- **Header** — Top navigation with logo and links
- **Footer** — Contact information and external links
- **TagChip** — Skill/topic labels with variants (default, success, informational)

### Card Components

- **CardMetric** — Display metric value, label, and context
- **CardProcessStep** — Numbered step with name and bullet takeaways
- **CardFailure** — "Why it failed" with what/why/learned structure
- **CardNext** — "What's next" with headline, bullets, and optional CTA

### Media Components

- **MediaFrame** — Image placeholder with aspect ratio variants (16:9, 4:3, 1:1, 4:5)
- **BadgeCollage** — Grid of certification/award badges
- **CrestRow** — Horizontal row of institutional crests

## Content Placeholders to Replace

### Images

All media currently uses placeholders. Replace with actual assets:

1. **Headshot** — Professional portrait (4:5 aspect ratio recommended)
2. **Certifications & Awards** — Badge images (square format, 96x96px or larger)
3. **Iyengar Yoga Mark** — Certification logo (ensure proper trademark usage)
4. **University Crests** — DCU, Griffith College Dublin, UCD (use under institutional guidelines)
5. **Case Study Screenshots** — UI screenshots, documentation samples, design system examples

### Case Study Content

Each case study follows this structure:

1. **Outcome first** — 1-2 sentence impact statement
2. **3 metrics** — Quantifiable results (update `CardMetric` values)
3. **Just enough process** — 3-5 key steps (update `CardProcessStep` content)
4. **Why it failed** — Constraint/learning moment (update `CardFailure` content)
5. **What's next** — Future roadmap (update `CardNext` bullets)

#### IBM Case Studies

- **Edge gateway** (`#ibm-edge-gateway`)
- **Guardium Cryptography Manager** (`#ibm-gcm`)
- **Guardium Data Security Center** (`#ibm-gdsc`)

#### Sage Case Studies

- **Design system content** (`#sage-design-system`)
- **CRM Help** (`#sage-crm`)

### External Links

Update these placeholder links:

- Content Designers Ireland Meetup link (currently `#`)
- Medium article: "We baked content into the design system and it is marvellous"
- Sage CRM product page (currently points to general Sage site)

## Editing Guide

### Changing Colors

Edit `/src/styles/theme.css` and update the color token values in the `:root` selector.

### Updating Typography

Modify the typography tokens in `/src/styles/theme.css`. To change the font family:

1. Update the `@import` in `/src/styles/fonts.css`
2. Change `--font-display` and `--font-body` values in theme.css

### Adding Case Studies

1. Open `/src/app/pages/case-studies.tsx`
2. Copy an existing `<article>` block
3. Update the `id` attribute for deep linking
4. Replace content following the 5-part structure
5. Add corresponding teaser card to `/src/app/pages/home.tsx`

### Replacing Images

Images use the `MediaFrame` component or direct `<img>` tags:

```tsx
<MediaFrame
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  aspect="16:9"
  caption="Optional caption text"
/>
```

For headshots and portraits, use the same pattern with `aspect="4:5"`.

### Updating Contact Information

Contact details appear in two places:

1. **Footer** — `/src/app/components/footer.tsx`
2. **About page** — `/src/app/pages/about.tsx`

Update both to maintain consistency.

## Accessibility

- All color combinations meet WCAG AA contrast standards (4.5:1 for body text, 3:1 for large text)
- Heading hierarchy follows proper outline order (H1 → H2 → H3)
- All `MediaFrame` components support alt text
- Focus states use visible outline with accessible color
- Responsive design works across mobile, tablet, and desktop

## Responsive Behavior

- **Desktop**: Full grid layouts, side-by-side content
- **Tablet**: 2-column grids collapse appropriately
- **Mobile**: Single column, stacked content, hamburger menu

Cards automatically stack from 3 → 2 → 1 columns across breakpoints.

## Asset Specifications

### Recommended Image Sizes

- **Headshot**: 1200×1600px (4:5 ratio)
- **Badges**: 192×192px minimum (square)
- **University Crests**: 240×160px minimum (preserve aspect ratio)
- **UI Screenshots**: 1920×1080px for 16:9, 1600×1200px for 4:3
- **Documentation Screenshots**: 1600×1200px (4:3 ratio)

### File Formats

- **Photos**: JPG (optimized for web)
- **Logos/Crests**: SVG preferred, PNG fallback
- **Screenshots**: PNG for UI elements, JPG for documentation pages

## Technical Notes

- Built with **React** and **Tailwind CSS v4**
- Routing via **React Router v7**
- Icons from **Lucide React**
- Font: **Inter** (Google Fonts)
- Fully responsive, mobile-first design
- No backend required (static site)

## Future Enhancements

Consider adding:

- Analytics tracking for page views and case study engagement
- Blog integration for Medium posts
- Downloadable résumé/CV
- Contact form (requires backend or service like Formspree)
- Dark mode toggle (design system already has dark theme tokens)

---

**Last Updated**: March 9, 2026

For questions or content updates, contact: emmacassidylee@gmail.com
