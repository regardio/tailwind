# CSS Utilities

Reusable CSS utilities and base styles for Tailwind projects.

**Important**: This package provides utilities only. For design decisions (colors, fonts, tokens), import `@regardio/brand/styles` instead.

## Import All Utilities

```css
@import "@regardio/tailwind/styles";
```

## Import Individual Files

```css
/* Tailwind CSS + standard plugins */
@import "@regardio/tailwind/styles/plugins.css";

/* Modern CSS reset with accessibility features */
@import "@regardio/tailwind/styles/reset.css";

/* Animation keyframes and duration classes */
@import "@regardio/tailwind/styles/animations.css";
```

## Plugins (`plugins.css`)

Tailwind CSS v4 with Regardio's standard plugins:

- **tailwindcss** - Core Tailwind CSS
- **tw-animate-css** - Animation utilities
- **fluid-tailwindcss** - Fluid typography and spacing plugin

## Reset (`reset.css`)

A modern CSS reset based on Josh Comeau's reset with Regardio enhancements:

- Box-sizing reset
- Theme color scheme support (`data-theme="light|dark"`)
- Typography wrapping (`text-wrap: pretty/balance`)
- Form element normalization
- Media element defaults
- Reduced motion accessibility

## Animations (`animations.css`)

Custom animation keyframes and utilities (beyond what `tw-animate-css` provides):

- **Duration classes**: `.duration-2000` through `.duration-6000` - Extended durations
- **Fade**: `animate-fade-in`, `animate-fade-out`, `animate-fade-in-slow`, `animate-fade-out-slow`
- **Slide**: `animate-slide-in-up`, `animate-slide-in-down`, `animate-slide-in-left`, `animate-slide-in-right`
- **Scale**: `animate-scale-in`, `animate-scale-out`
- **Image**: `animate-image-fade-in`, `animate-image-fade-out` (6s duration for slideshows)

Note: `tw-animate-css` is integrated via `plugins.css`, so you get both the plugin's animations and these custom ones.
