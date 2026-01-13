import { describe, expect, it } from 'vitest';
import { cn } from './index';

describe('cn', () => {
  it('merges multiple class strings', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('filters out falsy values', () => {
    expect(cn('foo', undefined, null, false, 'bar')).toBe('foo bar');
  });

  it('returns empty string for no valid inputs', () => {
    expect(cn(undefined, null, false)).toBe('');
  });

  it('resolves Tailwind class conflicts', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
  });

  it('resolves conflicting margin classes', () => {
    expect(cn('mt-4', 'mt-8')).toBe('mt-8');
  });

  it('preserves non-conflicting classes', () => {
    expect(cn('p-4', 'mt-2', 'text-red-500')).toBe('p-4 mt-2 text-red-500');
  });

  it('handles single class', () => {
    expect(cn('foo')).toBe('foo');
  });

  it('handles empty call', () => {
    expect(cn()).toBe('');
  });

  it('handles object inputs', () => {
    expect(cn({ bar: false, baz: true, foo: true })).toBe('baz foo');
  });

  it('handles array inputs', () => {
    expect(cn(['foo', 'bar', 'baz'])).toBe('foo bar baz');
  });

  it('handles mixed inputs', () => {
    expect(cn('foo', { bar: true, baz: false }, ['qux'])).toBe('foo bar qux');
  });

  it('handles conditional classes', () => {
    const condition = true;
    const falseCondition = false;
    expect(cn('foo', condition && 'bar', falseCondition && 'baz')).toBe('foo bar');
  });

  it('handles nested arrays', () => {
    expect(cn(['foo', ['bar', 'baz']])).toBe('foo bar baz');
  });

  it('handles complex object with conditional values', () => {
    const isActive = true;
    expect(
      cn({
        bar: false,
        baz: isActive,
        foo: true,
        quux: undefined,
        qux: null,
      }),
    ).toBe('baz foo');
  });

  it('handles complex Tailwind classes with conditional variants', () => {
    const isActive = true;
    const baseClasses = 'inline-flex w-max text-sm transition-colors duration-300';
    const variants = {
      'dark:text-gray-300 dark:hover:text-white': !isActive,
      'text-current dark:text-white': isActive,
    };

    expect(cn(baseClasses, variants)).toBe(
      'inline-flex w-max text-sm transition-colors duration-300 text-current dark:text-white',
    );
  });

  it('handles complex Tailwind classes with different conditional state', () => {
    const isActive = false;
    const baseClasses = 'inline-flex w-max text-sm transition-colors duration-300';
    const variants = {
      'dark:text-gray-300 dark:hover:text-white': !isActive,
      'text-current dark:text-white': isActive,
    };

    expect(cn(baseClasses, variants)).toBe(
      'inline-flex w-max text-sm transition-colors duration-300 dark:text-gray-300 dark:hover:text-white',
    );
  });
});
