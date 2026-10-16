---
name: update-component
description: >-
    Modifies an existing design system component — adding props, fixing bugs,
    updating styles, or refactoring. Enforces project conventions for styling,
    CSP compliance, and code structure. Use when changing an existing component.
argument-hint: >-
    Provide the component name and describe the change (e.g. "button - add loading spinner size prop").
---

# Update component

You are tasked with modifying an existing component in the `@lifesg/react-design-system` library.

## Input requirements

The user must provide:

1. **Component name** or path to the component folder
2. **Description** of the change (new prop, bug fix, style update, refactor, etc.)

## Before making changes

Read the following files to understand the current implementation:

1. `src/<component-name>/types.ts` — current prop interface
2. `src/<component-name>/<component-name>.tsx` — component implementation
3. `src/<component-name>/<component-name>.styles.ts` — current styles
4. `tests/<component-name>/<component-name>.spec.tsx` — existing tests
5. `stories/<component-name>/` — existing stories (if any)

Also check:

-   Whether other components depend on this one (search `src/` for imports)

## Conventions

All coding conventions (code structure, styling, types, JSDoc, imports) are documented in `.claude/skills/add-component/SKILL.md`. Follow those conventions when making changes.

## Change types

### Adding a new prop

1. Add the prop to the interface in `types.ts` with JSDoc
2. Destructure the prop in the component and use it appropriately
3. Add styles in `<component>.styles.ts` if visual changes are needed
4. Add unit tests for the new prop behavior
5. Add functional tests for the new prop behavior if there is a visual change
6. Update Storybook stories only if the new prop results in a meaningful behavioral or visual difference

### Fixing a bug

1. Write a failing test that reproduces the bug
2. Fix the bug in the component
3. Verify the test passes
4. Check that existing tests still pass

### Updating styles

1. Modify `<component>.styles.ts` using design tokens
2. If adding dynamic styles, follow the CSS variable pattern
3. Update E2E screenshot baselines if visual regression tests exist

### Refactoring

1. Ensure existing tests pass before refactoring
2. Make changes incrementally
3. Verify tests still pass after each change
4. Do not change the public API unless explicitly requested

## Important rules

-   Do not change the public API without explicit user approval
-   Do not introduce breaking changes without flagging them
-   Maintain backwards compatibility unless the user specifically requests a breaking change
-   If the change affects other components that depend on this one, identify and update them

## Verification checklist

Attempt each verification command. If a command fails due to sandbox restrictions or environment issues, report it to the user so they can run it manually.

1. Run `npm run lint` — fix any lint errors
2. Run `npm run test -- --testPathPattern="<component-name>"` — verify unit tests pass
3. If E2E tests exist, run `npm run test-e2e -- <component-name>.e2e.spec.ts` to check for regressions. Update screenshots if the visual change is intentional
4. Run `npm run build` — verify the build succeeds

Do **not** start Storybook yourself. If stories exist, remind the user to run `npm run storybook` and verify visually.
