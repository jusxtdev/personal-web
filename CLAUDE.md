# Dev Prajapati — Portfolio Design System

> **For Claude Code sessions:** Read this file when working on this project. The design system here should be applied to any new components, pages, or styling changes. Reference the color tokens, typography rules, and layout patterns before making design decisions.

## Overview
Minimal, editorial dark portfolio with warm cream typography and gold accents. Clean lines, generous whitespace, and subtle motion.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#000000` | Page background |
| Heading | `#fff7df` | Section headings |
| Body | `#f4ead0` | Main bio text |
| Body Alt | `#ece5d3` | Card titles, links |
| Secondary | `#9aa394` | Secondary text |
| Secondary Dark | `#6b756a` | Descriptions, taglines |
| Accent | `#c9a85f` | Hover states, gold |
| Muted | `#6b7a64` | Borders, dots |
| Muted Dark | `#3f4a3b` | Separator text |

## Typography

| Element | Font | Class | Size |
|---------|------|-------|------|
| Page Title | Instrument Serif | `${instrumentSerif.className}` | 6xl → 8xl |
| Section Headings | Instrument Serif | `${instrumentSerif.className}` | 4xl → 6xl |
| Body / Bio | Forum | `${forum.className}` | base → lg |
| Card Titles | Forum | `${forum.className}` | 28px |
| Taglines | Inter | inline style `var(--font-inter)` | 13.5px italic |
| Handle/-meta | Geist Sans | default | sm → base |

## Layout System

### Container Structure
```
max-w-5xl → max-w-3xl inner
px-6 for mobile padding
```

### Indentation
- Headings: `pl-28` (aligned with intro text)
- Content: `pl-10 sm:pl-14` (mobile: 40px, desktop: 56px)
- Section padding: `py-16`

### Sections
- Thin `h-px bg-white/10` dividers between sections
- Section elements: `relative z-10 mx-auto flex w-full flex-col items-start`

## Components

### Hero Section
- Full viewport height: `min-h-screen`
- Top offset: `pt-[42vh]`
- Vertical rhythm with `mt-3`, `mt-4` spacing
- Bio text with drop shadows for depth

### Explore Section
- Timeline-style list with vertical line
- Custom dot markers with gold hover
- Cards: flex with `gap-6`, `py-2`
- Dot: `size-2.25 rounded-full border-[1.5px]`

### Footer / Connect
- Semantic `<footer>` with `<h2>` and `<nav>`
- Horizontal link list with `/` separators
- Links: transparent → gold border-bottom on hover

## Motion

| Element | Transition |
|---------|------------|
| Background | 8s slideshow with 1000ms fade |
| Links hover | color + border-color |
| Cards | text color shift |
| CTA arrow | translate-x + translate-y |

- Use `transition-colors` for color changes
- Use `duration-200` for subtle, quick transitions
- Use `motion-reduce:transition-none` for reduced motion

## File Structure

```
app/
├── layout.tsx          # Root layout with Footer
├── page.tsx           # Home page
├── globals.css        # Tailwind + Lenis styles
├── fonts.ts           # next/font definitions
├── components/
│   ├── Background.tsx # Rotating image slideshow
│   ├── Hero.tsx       # Intro section
│   ├── Explore.tsx    # Navigation cards
│   └── Footer.tsx     # Connect links
├── work/page.tsx      # Work/Portfolio page
├── scenery/page.tsx   # Wallpapers page
└── utils/
    └── lenis.tsx      # Smooth scroll wrapper
data/
├── explore.ts         # Explore section data
├── work.ts           # Skills & projects data
├── footer.ts         # Footer links data
└── scenery.ts        # Wallpapers data
```

## Pages

### Non-Home Pages
All pages except the home page should include a "Back to Home" navigation link:
```tsx
<a
  href="/"
  className="group inline-flex items-center gap-2 text-sm text-[#9aa394] transition-colors hover:text-[#c9a85f]"
>
  <span className="transition-transform group-hover:-translate-x-1">←</span>
  <span>Go to Home</span>
</a>
```
- Place above the heading with `mt-8` margin
- Use secondary text color `#9aa394`
- Arrow moves left on hover

## Next.js Conventions

- Use `next/image` with `fill`, `priority` for first image
- Image quality: `75` for backgrounds, `85+` for content
- Use `sizes="100vw"` for full-width images
- Client components marked with `"use client"`
- Server components for static content
- Metadata API for SEO in layout.tsx

## Development Notes

- Lenis smooth scroll for buttery page feel
- Background images stored in `/public/` as 1.jpg, 2.jpg, etc.
- Fonts loaded via `next/font/google`
- Tailwind custom utilities via `@layer utilities` in globals.css
