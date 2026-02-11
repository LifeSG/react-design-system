# Agreed Conventions

## Code structure

To enable ease of understanding and consistency, we recommend following the
structure as such:

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
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================

    // =========================================================================
    // EFFECTS
    // =========================================================================

    /**
     * When adding event listeners, remember to remove them as well
     */
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    /**
     * Make sure to add all dependencies to hooks
     */
    useEffect(() => {
        fetchItems(page);
    }, [page]);

    /**
     * A polyfill for `useEffectEvent` (React 19+) is available
     */
    const fireShowEvent = useEvent(() => {
        onOpen?.();
    });

    useEffect(() => {
        if (show) {
            fireShowEvent();
        }
    }, [show, fireShowEvent]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================

    /**
     * Name event handlers using `handle` prefix and the name of the action after.
     * E.g. handleClick, handleChange
     */

    const handleClick = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        // do something...
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================

    /**
     * If the helper function can be extracted (i.e. doesnt rely on any internal
     * constant/state value), then consider putting it outside of the component
     * instead
     */

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
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

## Prop specification

Here are some guidelines on prop specification:

-   For callbacks, denote with `on` and the action. E.g. `onClick`, `onDismiss`
-   For optional props, use a Union type and add `undefined` to it

```tsx
interface MyComponentProps {
    show?: boolean | undefined;
    onChange?: ((param) => void) | undefined;
}
```

-   Avoid usage of enums to ease developer use. Opt for string literals instead
    and do them in kebab-case

```tsx
interface MyComponentProps {
    someType: "default" | "light" | "dark";
}
```

-   Make sure you specify common props like `id`, `className`, `data-testid`,
    and `style` if you are not extending from standard HTML element props
-   Breakdown complex props into their own types too
-   Extend props whenever possible to avoid rewriting similar props
-   Ensure that public component types are uniquely named to avoid collision

## Usage of useState

We recommend that the use of state should be kept minimal unless it is meant for
rendering purposes.

## Styling practices

### Use design tokens

Avoid hardcoding CSS properties, use design tokens to get theming capabilities.

Example:

```tsx
// Wrong
const styledDiv = css`
    font-size: 2.5rem;
    font-weight: 100;
    background: #edefef;
`;

// Correct
const styledDiv = css`
    ${Font["heading-xxl-light"]}
    background: ${Colour["bg-strong"]};
`;
```

### No `styled` helpers

Do not use Linaria `styled` helpers to avoid accidental function interpolation,
as that does not work with strict CSP configs. Use `css` and `cx` for
conditional styling.

Example:

```tsx
// Correct

/** component.tsx */
return <div className={cx(defaultDiv, loading && loadingDiv)} />;
```

### No nested classes

We should refrain from using nested `className`. Create the corresponding `css`
helpers instead and give them sensible names.

Example:

```tsx
// Wrong

/** component.styles.tsx */
const wrapper = css`
    .label {
        // styles here...
    }

    .description {
        // styles here...
    }
`;

/** component.tsx */
return (
    <div className={wrapper}>
        <label className="label">This is the label</label>
        <span className="description">Lorem ipsum dolar sit amet...</span>
    </div>
);
```

```tsx
// Correct

/** component.styles.tsx */
const wrapper = css`
    // styles here...
`;

const label = css`
    // styles here...
`;

const description = css`
    // styles here...
`;

/** component.tsx */
return (
    <div className={wrapper}>
        <label className={label}>This is the label</div>
        <span className={description}>Lorem ipsum dolar sit amet...</div>
    </div>
);
```

### Handling dynamic styles from props

Avoid setting the `style` attribute as it could be blocked with strict CSP
configs. Set CSS variables through Javascript. Variable names should be
formatted as `fds-<componentName>-<element>-<propName>` to ensure uniqueness.

Example:

```tsx
// Wrong

/** component.tsx */
const MyComponent = ({ textColour, ...otherProps }) => {
    return <div style={{ color: textColour }} {...otherProps} />;
};
```

```tsx
// Correct

/** component.styles.tsx */
const wrapper = css`
  /* make sure to reset the variable */
  --fds-myComponent-wrapper-textColour: initial;
  color: var(--fds-myComponent-wrapper-textColour);
`

/** component.tsx */
const MyComponent = ({
  textColour,
  ...otherProps
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.setProperty("--fds-myComponent-wrapper-textColour", ...);
  }, [textColour]);

  return <div ref={ref} className={wrapper} {...otherProps} />
}
```

## Implementation logics

In cases when you are conditionally rendering based props with multiple variants
or types, we recommend to use `switch-case` rather than `if-else` to ensure all
variations are covered.

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
