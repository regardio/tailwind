# @regardio/tailwind Setup Guide

How to integrate Tailwind utilities into your application.

## Installation

```bash
pnpm add @regardio/tailwind
```

## What This Package Provides

**Utilities only** - no design decisions (colors, fonts, breakpoints, layouts). For Regardio design system, use `@regardio/brand`.

- CSS reset
- Custom animation utilities
- Tool re-exports: `tv()`, `cn()`, `twMerge()`
- Plugin integration: `fluid-tailwindcss`, `tw-animate-css`

## Basic Integration

### CSS Import

```css
@import "tailwindcss";
@import "@regardio/tailwind/styles";
```

Or import utilities individually:

```css
@import "@regardio/tailwind/styles/reset.css";
@import "@regardio/tailwind/styles/base.css";
@import "@regardio/tailwind/styles/grid.css";
@import "@regardio/tailwind/styles/animations.css";
```

### JavaScript Utilities

```tsx
import { tv, cn, twMerge } from '@regardio/tailwind/utils';

// Use tv() for component variants
const button = tv({
  base: 'inline-flex items-center justify-center',
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground',
      outline: 'border border-border',
    },
  },
});

// Use cn() for conditional classes
const className = cn('base-class', condition && 'conditional-class');
```

## With Regardio Applications

For Regardio apps, combine with `@regardio/brand` for design system:

```css
@import "tailwindcss";
@import "@regardio/brand/styles";        /* Design decisions */
@import "@regardio/tailwind/styles";     /* Utilities */
```

See [@regardio/brand styling architecture](../../brand/docs/styling-architecture.md) for complete setup.
