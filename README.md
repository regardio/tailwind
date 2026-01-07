# @regardio/tailwind

> Regardio Tailwind CSS utilities and configuration

A unified Tailwind CSS toolchain for Regardio projects, providing:

- **tailwind-variants** - Type-safe component variants
- **fluid-tailwindcss** - Fluid typography and spacing
- **tailwind-merge** - Intelligent class merging
- **Shared CSS styles** - Reset, base styles, grid utilities, animations

## Installation

```bash
pnpm add @regardio/tailwind
```

### Peer Dependencies

- `tailwindcss` >= 4.0.0

## JavaScript Utilities

```ts
import { tv, cn, twMerge, type VariantProps } from '@regardio/tailwind/utils';

// Create component variants with tv()
const button = tv({
  base: 'px-4 py-2 rounded font-medium',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-200 text-gray-800',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

// Use cn() for simple class merging
const className = cn('base-class', condition && 'conditional-class', 'override-class');

// Type-safe variant props
type ButtonProps = VariantProps<typeof button>;
```

## CSS Styles

Import all shared styles at once:

```css
@import "@regardio/tailwind/styles";
```

Or import individual files as needed:

```css
/* Tailwind CSS + standard plugins (tailwindcss, tw-animate-css, fluid-tailwindcss) */
@import "@regardio/tailwind/styles/plugins.css";

/* Modern CSS reset with accessibility features */
@import "@regardio/tailwind/styles/reset.css";

/* Common base styles (typography, borders) */
@import "@regardio/tailwind/styles/base.css";

/* Grid utilities (.u-container, .u-grid) */
@import "@regardio/tailwind/styles/grid.css";

/* Animation keyframes and duration classes */
@import "@regardio/tailwind/styles/animations.css";
```

### Included Styles

#### Plugins (`plugins.css`)

Tailwind CSS v4 with Regardio's standard plugins:

- **tailwindcss** - Core Tailwind CSS
- **tw-animate-css** - Animation utilities
- **fluid-tailwindcss** - Fluid typography and spacing plugin

#### Reset (`reset.css`)

A modern CSS reset based on Josh Comeau's reset with Regardio enhancements:

- Box-sizing reset
- Theme color scheme support (`data-theme="light|dark"`)
- Typography wrapping (`text-wrap: pretty/balance`)
- Form element normalization
- Media element defaults
- Reduced motion accessibility

#### Base (`base.css`)

Common base styles that build on the reset:

- Font feature settings (ligatures)
- Border/outline defaults
- Typography base styles

#### Grid Utilities (`grid.css`)

Reusable layout classes:

- `.u-container` - Max-width container with horizontal padding
- `.u-grid` - 12-column CSS grid with container queries
- `.u-grid-full` - Full-width grid item (12 columns)
- `.u-grid-half` - Half-width grid item (6 columns)
- `.u-grid-third` - Third-width grid item (4 columns)
- `.u-grid-quarter` - Quarter-width grid item (3 columns)

Configure via CSS custom properties:

```css
:root {
  --spacing-grid-max: 1200px;
  --spacing-grid-gutter: 1rem;
}
```

#### Animations (`animations.css`)

Common animation keyframes and utilities:

- **Duration classes**: `.duration-2000` through `.duration-6000`
- **Fade**: `animate-fade-in`, `animate-fade-out`, `animate-fade-in-slow`, `animate-fade-out-slow`
- **Slide**: `animate-slide-in-up`, `animate-slide-in-down`, `animate-slide-in-left`, `animate-slide-in-right`
- **Scale**: `animate-scale-in`, `animate-scale-out`
- **Image**: `animate-image-fade-in`, `animate-image-fade-out` (6s duration for slideshows)

## Why This Package?

- **Unified toolchain** - All Tailwind utilities in one place
- **Fluid design** - Built-in support for fluid typography and spacing
- **Type safety** - Full TypeScript support with VariantProps
- **Tree-shakeable** - Import only what you need
- **Consistent styles** - Shared reset, base, and utilities across projects

## License

**MIT License** — Free to use in commercial and open source projects.
