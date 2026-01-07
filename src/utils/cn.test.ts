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
});
