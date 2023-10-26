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

/**
 * Refrain from typing React.FC<Props>
 */
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

```tsx
interface MyInterface {
    show?: boolean | undefined;
    onChange?: ((param) => void) | undefined;
}
```

-   Avoid usage of enums to ease developer use. Opt for string literals instead and
    do them in kebab-case

```tsx
interface MyInterface {
    someType: "default" | "light" | "dark";
}
```

-   Make sure you specify common props like `id`, `className`, `data-testid` if you
    are not extending from a standard HTML element props
-   Breakdown complex props into their own types too
-   Extend props whenever possible to avoid rewriting similar props

## Usage of useState

We recommend that the use of state should be kept minimal unless it is meant
for rendering purposes.

## Styling practices

We should to refrain from using `className` as we are using Styled Components. We
should create the corresponding styled component instead. For the styled component,
give them sensible names as well.

Example:

```tsx
// Wrong

/** component.style.tsx */
const Wrapper = styled.div`
    .label {
        // styles here...
    }

    .description {
        // styles here...
    }
`;

/** component.tsx */
return (
    <Wrapper>
        <label className="label">This is the label</label>
        <span className="description>Lorem ipsum dolar sit amet...</span>
    </Wrapper>
);

```

```tsx
// Correct

/** component.style.tsx */
const Wrapper = styled.div`
    // styles here...
`;

const Label = styled.label`
    // styles here...
`;

const Description = styled.span`
    // styles here...
`;

/** component.tsx */
return (
    <Wrapper>
        <Label>This is the label</Label>
        <Description>Lorem ipsum dolar sit amet...</Description>
    </Wrapper>
);
```

## Implementation logics

In cases when you are conditionally rendering based props with multiple variants
or types, we recommend to use `switch-case` rather than `if-else` to ensure
all variations are covered.

Example:

```tsx
interface Demo {
    variant?: "a" | "b" | "c" | "d" | undefined;
}

/** In the conditional logic */

// Wrong

if (variant === "a") {
    // do something
} else if (variant === "b") {
    // do something
} else if (variant === "c") {
    // do something
} else if (variant === "d") {
    // do something
} else {
    // do something
}

// Correct
switch (variants) {
    case "a":
    // do something
    case "b":
    // do something
    case "c":
    // do something
    case "d":
    // do something
    default:
    // do something
}
```
