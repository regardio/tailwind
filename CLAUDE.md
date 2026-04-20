---

title: "@regardio/tailwind — Claude Context"
type: guide
status: published
summary: Entry point for Claude when working on Tailwind utilities and styles
locale: en-US
---

# @regardio/tailwind — Claude Context

## What This Is

Regardio's Tailwind CSS utilities and configuration. Exports compiled styles (`./styles`, `./styles/*`) and runtime utilities (`./utils` — `clsx`, `tailwind-merge`, `tailwind-variants`, fluid helpers). Consumed by every React app in the workspace.

## Standards

Universal standards apply: [`../dev/CLAUDE.md`](../dev/CLAUDE.md).

Design tokens and visual system live in [`../brand`](../brand).

## Downstream Consumers

- `ensemble/instrument`
- `channels/*`
- Any React app importing `@regardio/tailwind`

Changes to exported utilities or styles are breaking — bump the package version and check consumers.
