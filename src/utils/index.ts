import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'fluid-tailwindcss/tailwind-merge';
import { tv } from 'tailwind-variants';

export { tv, twMerge };

/**
 * Merge Tailwind CSS classes with conflict resolution
 * Supports strings, objects, arrays, and conditional classes
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
