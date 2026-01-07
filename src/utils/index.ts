import { twMerge } from 'fluid-tailwindcss/tailwind-merge';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export type { VariantProps };

export { tv, twMerge };

/**
 * Merge Tailwind CSS classes with conflict resolution
 */
export const cn = (...inputs: (string | undefined | null | false)[]) => {
  return twMerge(inputs.filter(Boolean).join(' '));
};
