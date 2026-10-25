---
name: write-unit-test
description: >-
    Creates Jest unit test specs for a design system component using
    React Testing Library. Follows the project's test structure and
    conventions. Use when writing or updating unit tests for a component.
argument-hint: >-
    Provide the component name or path (e.g. "button", "src/input-select").
---

# Write unit tests

You are tasked with writing Jest unit tests for a design system component in `@lifesg/react-design-system`.

## Input requirements

The user must provide:

1. **Component**, specified as:
    - Component name (e.g. `button`), OR
    - Path to the component folder (e.g. `src/toggle-button`)

## Testing tools

The project uses:

-   `jest` — test framework
-   JSDOM environment
-   `@testing-library/react` — utilities for rendering components and querying the DOM
-   `@testing-library/jest-dom` — custom matchers to assert on the DOM
-   A custom babel plugin that injects Linaria styles into the DOM to simulate live, runtime styling

## Prerequisites

Before writing tests, read:

1. The component's `types.ts` to understand all props and their expected behavior
2. The component's implementation (`.tsx`) to understand internal logic, event handlers, effects
3. Existing test files in `tests/` for pattern reference (e.g. `tests/button/button.spec.tsx`)
4. Common test utilities in `tests/_common/` for shared helpers and mocks

## File structure

Create the test file at:

```
tests/<component-name>/
└── <component-name>.spec.tsx
```

## Test structure conventions

### Common constants

Define test constants at the top of the file:

```tsx
const COMPONENT_TEXT = "Test content";
const TEST_ID = "component-test";
```

## What to test

### Must test:

-   **Default rendering** — component renders with default props
-   **Prop variants** — each variant/style/size type renders correctly
-   **Callback props** — `onClick`, `onChange`, `onDismiss` etc. are called with correct arguments
-   **Disabled state** — click suppressed, `aria-disabled` set, visual state applied
-   **Controlled behavior** — component responds to prop changes
-   **Conditional rendering** — elements appear/disappear based on props
-   **Default values** — defaults match documented `@default` values
-   **className passthrough** — custom `className` is applied to root element

### Should test (when applicable):

-   **Keyboard interaction** — Enter/Space/Escape key handlers
-   **Focus management** — focus navigation within the component
-   **ARIA attributes** — `aria-label`, `aria-expanded`, `aria-selected`, roles
-   **Ref forwarding** — `ref` is attached to the correct DOM element
-   **Edge cases** — empty children, null values, boundary conditions
-   **Timer-based behavior** — behavior that depends on timers, such as countdowns or debounced actions

### Do NOT test:

-   Visual styling (colors, fonts, spacing) — use functional tests for this
-   Specific hierarchy or structure of nested elements in the DOM
-   Internal implementation details that aren't part of the public API
-   APIs that depend on an actual browser environment, and complex interactions like drag-and-drop

## Important rules

-   Use `data-testid` for element selection when semantic queries aren't suitable
-   Prefer `screen.getByRole`, `screen.getByText`, `screen.getByLabelText` over `getByTestId` where possible
-   Do NOT test CSS class names or style values — those are implementation details
-   Do NOT use snapshot tests for the DOM tree — they are brittle and hard to review
-   Keep each test focused on one behavior
-   Add banner-style section heading comments (e.g. `// ========== SECTION ==========`) for constants and helper functions
-   Do NOT add banner-style section heading comments for `describe` blocks — the describe labels are sufficient; do not add banner-style section heading comments (e.g. `// ========== SECTION ==========`)

## Verification checklist

Attempt each verification command. If a command fails due to sandbox restrictions or environment issues, report it to the user so they can run it manually.

1. Run `npm test -- --testPathPatterns="<component-name>"` to execute the tests
2. Verify all tests pass
3. Check coverage is adequate for the component's public API
4. Run `npm run lint` to verify the test file passes linting
