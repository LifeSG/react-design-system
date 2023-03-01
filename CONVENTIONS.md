# Agreed Conventions

## Code structure

To enable ease of understanding and consistency, we recommend following the structure as such:

> Note: Add headers to the respective sections

```tsx
// component-file.tsx

// Import statements

/**
 * For local props. If the props are to be exported
 * add them to types.ts
 */
interface Props {
    a: string;
}

export const MyComponent = ({ a }: Props) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    // =============================================================================
    // EFFECTS
    // =============================================================================

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    /**
     * Name event handlers using `handle` prefix and the name of the action after.
     * E.g. handleClick, handleChange
     */

    const handleClick = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        // do something...
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    /**
     * If the helper function can be extracted (i.e. doesnt rely on any internal
     * constant/state value), then consider putting it outside of the component
     * instead
     */

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return <InnerComponent />;
};
```

<br />

## Prop specification

Here are some guidelines on prop specification:

-   For callbacks, denote with `on` and the action. E.g. `onClick`, `onDismiss`
-   For optional props, use a Union type and add `undefined` to it

```
interface MyInterface {
    show?: boolean | undefined;
    onChange?: ((param) => void) | undefined;
}
```

-   Breakdown complex props into their own types too
-   Extend props whenever possible to avoid rewriting similar props
