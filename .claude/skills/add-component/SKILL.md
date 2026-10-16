---
name: add-component
description: >-
    Scaffolds a new design system component with all required files following
    the project's file structure, naming conventions, styling patterns, and
    export wiring. Use when creating a brand-new component from scratch.
argument-hint: >-
    Provide the component name in kebab-case (e.g. "date-picker", "toggle-button").
---

# Add component

You are tasked with scaffolding a new component for the `@lifesg/react-design-system` library.

## Input requirements

The user must provide:

1. **Component name** in kebab-case (e.g. `info-card`, `toggle-button`)
2. **Description** of the component's purpose, props, and behavior

## File structure

Create the following files:

```
src/<component-name>/
├── <component-name>.tsx          # Component implementation
├── <component-name>.styles.ts    # Linaria CSS styles
├── types.ts                      # Public prop interfaces and types
└── index.ts                      # Barrel export
```

## Step-by-Step

### 1. Define types (`types.ts`)

-   Export a `<ComponentName>Props` interface
-   For simple components that map closely to a single HTML element (e.g. Button, Divider), extend from the appropriate HTML element attributes (e.g. `React.ButtonHTMLAttributes<HTMLButtonElement>`). For complex components with multiple interactive parts or custom APIs, define props from scratch — do not extend HTML element attributes
-   Always include these common props: `id`, `className`, `style`, `data-testid`
-   Use string literal unions instead of enums for variant props, in kebab-case
-   Mark optional props with `?` and add `| undefined` to the union to support TypeScript's `exactOptionalPropertyTypes` behavior
-   Name callback props with the `on` prefix and the action: `onClick`, `onDismiss`, `onChange`
-   Break down complex props into their own types; extend props whenever possible to avoid rewriting similar props
-   Ensure all public component types are uniquely named to avoid collision
-   Add JSDoc entries following the `/write-jsdoc` skill conventions

Example:

```tsx
export type InfoCardVariant = "default" | "outlined" | "filled";

/**
 * Displays contextual information in a styled card container.
 *
 * Use `InfoCard` for supplementary content that should be visually distinct
 * from the surrounding layout.
 * @keywords card, panel, container, information
 */
export interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @default "info-card"
     */
    "data-testid"?: string | undefined;
    /**
     * Visual style variant.
     *
     * @default "default"
     */
    variant?: InfoCardVariant | undefined;
}
```

### 2. Create styles (`<component-name>.styles.ts`)

-   Import `css` from `@linaria/core` (never use Linaria `styled` helpers to avoid accidental function interpolation, as that does not work with strict CSP configs)
-   Import design tokens from `../theme` — use `Colour`, `Font`, `Spacing`, `Border`, `Motion`, `Radius`, `Shadow`, `ComponentToken` as needed
-   Never hardcode CSS values; always use design tokens
-   Export named `css` blocks with descriptive names (no nested classes)
-   For dynamic styles from props, declare CSS custom properties using the naming convention `--fds-<componentName>-<element>-<propName>` and export them in a `tokens` object
-   Reset CSS variables to `initial` to prevent unintended inheritance

Example:

```ts
import { css } from "@linaria/core";
import { Colour, Font, Spacing, Border, Radius } from "../theme";

export const tokens = {
    wrapper: { customColour: "--fds-infoCard-wrapper-customColour" },
};

export const wrapper = css`
    ${tokens.wrapper.customColour}: initial;
    padding: ${Spacing["spacing-16"]};
    border-radius: ${Radius["radius-8"]};
    background-color: var(${tokens.wrapper.customColour}, ${Colour["bg"]});
`;

export const title = css`
    ${Font["body-baseline-semibold"]}
    color: ${Colour["text"]};
`;
```

### 3. Implement component (`<component-name>.tsx`)

Follow the section header convention strictly:

```tsx
import clsx from "clsx";
import React from "react";
import { Text } from "../text/text";
import * as styles from "./<component-name>.styles";
import type { <ComponentName>Props } from "./types";

export const <ComponentName> = ({ className, variant = "default", ...otherProps }: <ComponentName>Props) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================

    // =========================================================================
    // EFFECTS
    // =========================================================================

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    // Name with `handle` prefix: handleClick, handleChange

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    // Extract pure helpers outside the component if they don't need internal state

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    // Use dedicated render functions for complex rendering logic

    return (
        <div
            className={clsx(styles.wrapper, className)}
            {...otherProps}
        >
            {/* Component content */}
        </div>
    );
};
```

Key conventions:

-   Do NOT use `React.FC<Props>` — destructure props directly
-   Import styles under a namespace: `import * as styles from "./<name>.styles"`
-   Use `clsx` for conditional class composition. For complex conditionals, use the object notation for readability:

    ```tsx
    clsx(styles.wrapper, {
        [styles.loading]: loading && !disabled && !readOnly,
    });
    ```

-   For simple enumerated variants (style-only differences), use data attributes instead of mapping to separate class names. Set `data-*` on the element and target with `&[data-*]` selectors in styles:

    ```tsx
    // component.tsx
    <div className={styles.wrapper} data-variant={variant} />
    ```

    ```ts
    // component.styles.ts
    export const wrapper = css`
        /* base styles */

        &[data-variant="outlined"] {
            border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
        }

        &[data-variant="filled"] {
            background-color: ${Colour["bg-strong"]};
        }
    `;
    ```

-   Pass through `className` to the outermost element for external styling
-   Use `switch-case` (not if-else chains) for multi-variant rendering in JSX
-   Keep `useState` minimal — only use state for rendering purposes
-   Include all dependencies in hooks
-   When adding event listeners, always clean them up in the effect return
-   Use the `useEvent` polyfill (from `../util/use-event`) for stable callback refs that should not trigger effect re-runs
-   For dynamic prop-based styles, never set the inline `style` attribute (blocked by strict CSP). Use `useApplyStyle` hook for simple mappings:

    ```tsx
    const ref = useRef<HTMLDivElement>(null);
    useApplyStyle(ref, { [tokens.wrapper.customColour]: textColour });
    return <div ref={ref} className={styles.wrapper} {...otherProps} />;
    ```

    For more complex behavior (conditional logic, computed values), use `useLayoutEffect` with `setProperty` directly:

    ```tsx
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

        const resolvedColour = danger ? errorColour : textColour;
        element.style.setProperty(
            tokens.wrapper.textColour,
            resolvedColour ?? null
        );
    }, [danger, errorColour, textColour]);

    return <div ref={ref} className={styles.wrapper} {...otherProps} />;
    ```

-   If a helper function does not rely on internal state or refs, extract it outside the component
-   Use relative imports for sibling components to prevent circular dependencies
-   For accessibility, use `import { useId } from "../util"` to generate a single unique ID. Derive related IDs by appending suffixes (e.g. `${id}-label`, `${id}-field`)

### 4. Create barrel export (`index.ts`)

```ts
export * from "./<component-name>";
export * from "./types";
```

### 5. Wire up the main barrel export

Add to `src/index.ts` in **alphabetical order**:

```ts
export * from "./<component-name>";
```

### 6. Document the public API

Invoke `/write-jsdoc` to add JSDoc comments to the component's public API.

### 7. Create Storybook stories

Invoke `/write-story` to create a Storybook story file for the component.

### 8. Create unit tests

Invoke `/write-unit-test` to create unit tests for the component.

### 9. Create functional tests (if needed)

Invoke `/write-functional-test` if the component has visual or interaction behavior that warrants E2E coverage.

## Verification checklist

Attempt each verification command. If a command fails due to sandbox restrictions or environment issues, report it to the user so they can run it manually.

1. Run `npm run lint` to check for lint errors
2. Run `npm test -- --testPathPatterns="<component-name>"` to verify unit tests pass
3. Run `npm run test-e2e -- <component-name>.e2e.spec.ts` to verify E2E tests pass
4. Run `npx ts-node scripts/generate-component-catalog.ts` to verify catalog entries parse correctly
5. Run `npm run build` to verify the component compiles

Do **not** start Storybook yourself. Remind the user to run `npm run storybook` and verify stories and props render correctly.
