# Agreed Conventions

## Code structure

To enable ease of understanding and consistency, we recommend following the structure as such:

> Note: Add headers to the respective sections

```tsx
// component-file.tsx

// Import statements here
/**
 * When importing other components, use the relative import path
 * to prevent circular dependency issues.
 * E.g. import { Text } from "../text/text";
 */

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

    /**
     * When adding event listeners, remember to remove them as well
     */
    useEffect(() => {
        document.addEventListener("keydown", handlekeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

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
    /**
     * We recommend doing complex rendering in a render function
     * of its own for ease of maintenance
     */
    const renderItems = () => {
        // Map or complex render logic
    };

    /**
     * Remember to pass down standard html element props to the inner component
     * especially `className` to allow for external styling to be applied
     */

    return (
        <WrapperComponent>
            <InnerComponent>{renderItems()}</InnerComponent>
        </WrapperComponent>
    );
};
```

<br />

## Prop specification

Here are some guidelines on prop specification:

-   For callbacks, denote with `on` and the action. E.g. `onClick`, `onDismiss`
-   For optional props, use a Union type and add `undefined` to it
-   Avoid usage of enums to ease developer use. Opt for string literals instead and
    do them in kebab-case. E.g. `"default" | "light" | "dark"`
-   Make sure you specify common props like `id`, `className`, `data-testid` if you
    are not extending from a standard HTML element props

```
interface MyInterface {
    show?: boolean | undefined;
    onChange?: ((param) => void) | undefined;
}
```

-   Breakdown complex props into their own types too
-   Extend props whenever possible to avoid rewriting similar props

## Usage of useState

We recommend that the use of state should be kept minimal unless it is meant
for rendering purposes.
