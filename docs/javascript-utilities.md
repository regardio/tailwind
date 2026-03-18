# JavaScript Utilities

Type-safe utilities for working with Tailwind CSS classes.

## Available Utilities

```ts
import { tv, cn, twMerge, type VariantProps } from '@regardio/tailwind/utils';
```

## tv() - Tailwind Variants

Create type-safe component variants with `tv()`:

```ts
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

// Usage
const className = button({ color: 'secondary', size: 'lg' });
```

## cn() - Class Names

Simple utility for conditional class merging:

```ts
const className = cn(
  'base-class',
  condition && 'conditional-class',
  'override-class'
);
```

## twMerge() - Tailwind Merge

Intelligent merging of Tailwind classes (handles conflicts):

```ts
const className = twMerge('p-4 text-red-500', 'p-8 text-blue-500');
// Result: 'p-8 text-blue-500'
```

## VariantProps Type

Extract props type from variant definitions:

```ts
type ButtonProps = VariantProps<typeof button>;
// { color?: 'primary' | 'secondary', size?: 'sm' | 'md' | 'lg' }
```
