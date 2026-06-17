# RemoteRecruit — Home Page

Pixel-faithful recreation of the RemoteRecruit Features/Home page from Figma, built with React + Tailwind CSS.

## Setup

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| Tailwind CSS | 3 | Styling |
| Vite | 4 | Build tool & dev server |
| Inter (Google Fonts) | — | Typography |

No additional runtime libraries — scroll animations use the native `IntersectionObserver` API.

## Features implemented

- Fixed navbar with transparent → frosted-glass → white-on-scroll transition and mobile hamburger menu
- Hero section with light-blue gradient background and SVG wave separator
- Three alternating feature sections (Global Job Board, Fee-Free Forever, Showcase Your Talents) with inline app mockups
- Split CTA section (dark navy / white halves)
- FAQ accordion (5 questions, click to expand/collapse)
- Pricing section (Free vs Premium plan cards on dark navy background)
- Footer with logo + social links
- Scroll-to-top floating button (appears after 500 px of scroll)
- Scroll-triggered fade-in / slide-up animations on every section
- Hover states and transitions on all interactive elements
- Fully responsive (mobile, tablet, desktop)
- `loading="lazy"` on all below-the-fold images
- Semantic HTML with ARIA labels throughout

## Known limitations

- The Figma file required edit access for the MCP integration to read exact values; spacing, font sizes, and colours were derived from the exported design screenshot provided in `assets/`
- Social links and buttons are placeholder `href="#"` — no backend/routing wired up
- "More Questions" button has no action; extend by adding more FAQ entries to the `FAQS` array in `src/components/FAQ.jsx`
