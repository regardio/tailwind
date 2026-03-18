# @regardio/tailwind

> Tailwind CSS utilities and tools for Regardio projects

Reusable utilities and tools for Tailwind CSS projects. **Does NOT include design decisions** (colors, fonts, breakpoints) - import those from `@regardio/brand` instead.

## What This Package Provides

- **JavaScript utilities** - Type-safe component variants (`tv`), class merging (`cn`, `twMerge`)
- **CSS utilities** - Reset, custom animations
- **Plugin re-exports** - `fluid-tailwindcss`, `tw-animate-css` (integrated via `plugins.css`)

> **📖 See [@regardio/brand styling architecture](../brand/docs/styling-architecture.md)** for the complete architecture.

## Installation

```bash
pnpm add @regardio/tailwind
```

**Peer Dependencies**: `tailwindcss` >= 4.0.0

## Quick Start

### JavaScript

```ts
import { tv, cn, type VariantProps } from '@regardio/tailwind/utils';

const button = tv({
  base: 'px-4 py-2 rounded',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-200 text-gray-800',
    },
  },
});
```

### CSS

```css
@import "@regardio/tailwind/styles";
```

## Documentation

- **[Setup Guide](./docs/setup-guide.md)** - Integration and configuration
- **[JavaScript Utilities](./docs/javascript-utilities.md)** - `tv()`, `cn()`, `twMerge()` usage
- **[CSS Utilities](./docs/css-utilities.md)** - Reset, animations, plugins

## Why This Package?

- **Unified toolchain** - All Tailwind utilities in one place
- **Fluid design** - Built-in support for fluid typography and spacing
- **Type safety** - Full TypeScript support with VariantProps
- **Tree-shakeable** - Import only what you need
- **Consistent styles** - Shared reset, base, and utilities across projects

## License

**MIT License** — Free to use in commercial and open source projects.
