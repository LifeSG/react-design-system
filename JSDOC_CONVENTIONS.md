# JSDoc Conventions

## Purpose

JSDoc should explain the public behavior of component APIs that TypeScript types alone cannot describe. We're using it for:

-   IntelliSense hover information
-   Generated props documentation
-   AI-friendly API understanding
-   Public API references

## Scope

Add JSDoc to public exported API types in component `types.ts` files.

Recommended for:

-   Exported `*Props` interfaces
-   Exported public nested types
-   Deprecated public props or types

Not required for:

-   Internal helper types
-   Style-only types
-   Obvious passthrough props such as `id`, `className`, `style`, and `data-testid`

## Component function comments

Add a JSDoc block on the consumer-facing exported component constant (not a
private inner function). This JSDoc appears when consumers hover the component
in IntelliSense.

The component JSDoc should contain:

-   A one-line purpose statement
-   One short paragraph on **when to use** the component and its overall
    interaction model

Do **not** restate individual prop behaviors in the component JSDoc. Prop-level
details belong in the props interface. The component comment should give context
that no single prop can provide — for example, the relationship between
sub-components, or the overall controlled/uncontrolled contract.

```tsx
// Good — high-level "what and when"
/**
 * A vertically stacked set of collapsible content panels.
 *
 * Use `Accordion` to organise related content into independently expandable
 * sections with shared expand/collapse state. Sub-components:
 * - `Accordion.Item` — a single collapsible panel with an imperative ref handle.
 */
export const Accordion = Object.assign(AccordionBase, { ... });
```

```tsx
// Avoid — restating prop behaviors
/**
 * Displays a badge. When `children` is provided the badge positions itself
 * absolutely over the top-right corner. The `count` prop is capped at 1K+.
 * Use `badgeOffset` to fine-tune overlay position.
 */
```

```tsx
// Avoid — micro-level responsive layout detail
/**
 * The collapse handle repositions responsively between mobile and desktop
 * viewports.
 */
```

### Responsive behavior

Only mention responsive behavior when the component adopts a **fundamentally
different interaction model** across breakpoints — for example, a sidebar that
becomes a modal on mobile, or a schedule that switches between a week view and a
collapsed day view.

Do **not** document minor layout repositioning (e.g. an element moving from one
edge to another, text wrapping differently, spacing changes). These are
implementation details that consumers discover visually and that do not affect
the API contract.

### Sub-components

For components that expose sub-components via `Object.assign` or object-literal
exports, place the JSDoc **on the property inside the object literal** so that
IntelliSense resolves it when consumers type `Parent.Child`. Do not duplicate
the comment on the internal constant.

```tsx
export const Accordion = Object.assign(AccordionBase, {
    /** Renders an individual collapsible section within an Accordion. */
    Item: AccordionItem,
});
```

## Type-level comments

The first sentence should be understandable on its own, because it may be the only text shown in IntelliSense or generated documentation.

```tsx
/**
 * Props for rendering the main navigation bar in desktop and mobile layouts.
 *
 * Mobile configuration falls back to desktop configuration when omitted.
 */
export interface NavbarProps {
    // ...
}
```

For main component props, an example may be added when it helps clarify usage.

```tsx
/**
 * Props for rendering and controlling the navbar selection state.
 *
export interface NavbarProps {
    // ...
}
```

## Prop-level comments

Add prop-level JSDoc only when the prop has behavior, fallback rules, accessibility meaning, or relationships with other props.

```tsx
export interface NavbarProps<T = void> {
    /**
     * The current selected navigation item identifier.
     * Must match one of the rendered item `id` values.
     */
    selectedId?: string | undefined;

    /**
     * Accessible label announced for the main navigation header.
     */
    headerLabel?: string | undefined;

    /**
     * Called when a navigation item is activated from desktop or drawer views.
     */
    onItemClick?:
        | ((item: NavItemProps<T> | NavItemCommonProps<T>) => void)
        | undefined;

    /**
     * Prevents the drawer from closing for specific user actions.
     */
    drawerDismissalExclusions?: DrawerDismissalMethod[] | undefined;
}
```

Avoid comments that only repeat the prop name or type.

```tsx
// Avoid

/** Whether the component is disabled. */
disabled?: boolean | undefined;

/** Unique identifier. */
id: string;

/** CSS class name. */
className?: string | undefined;

/** Inline style. */
style?: React.CSSProperties | undefined;
```

## What to document

Always document these when they exist:

-   Fallback behavior  
    Example: `mobileLabel` falls back to `label`.

-   Prop relationships.  
    Example: `selectedId` must match an item `id`.

-   Callback behavior.  
    Example: when the callback is called and what the payload represents.

-   Accessibility meaning.  
    Example: what element an `aria-label` labels.

-   Discriminated union behavior.  
    Example:

```tsx
/**
 * Navigation item rendered by the navbar.
 *
 * `itemType` determines whether the item is a standard link or a custom
 * component slot.
 */
export type NavItemProps<T> = NavItemLinkProps<T> | NavItemComponentProps;

export interface NavItemLinkProps<T> {
    itemType?: "link";
    id: string;
    label: string;
    options?: T | undefined;
}

export interface NavItemComponentProps {
    itemType: "component";
    children: JSX.Element;
}
```

-   Deprecated API.  
    Example: what prop or type should be used instead.

-   Imperative handle / ref types.  
    Example:

```tsx
/**
 * Imperative handle returned by NavbarDrawer via `ref`.
 * Use the ref to dismiss the drawer programmatically.
 */
export type NavbarDrawerHandle = HTMLDivElement & {
    dismissDrawer: () => void;
};
```

-   Generic public types when the generic meaning is important to consumers.  
    Explain in plain prose what the type parameter represents.

## Recommended tags

Use JSDoc tags only when they add useful information.

Recommended:

-   `@default` when the default is enforced by code
-   `@deprecated` with a migration path
-   `@remarks` for important caveats or relationships

Avoid:

-   `@returns` on interface properties
-   Tags that only repeat the type
-   Long explanations of internal implementation details

### Defaults

Use `@default` for:

-   A default value assigned in the destructuring or function body
-   A direct/simple fallback: a literal value (`200`, `"border"`), a named
    token (`Colour["border"]`), or a simple computation (`50% of container
height`)

```tsx
export interface ExampleProps {
    /**
     * Pins the component while the page scrolls.
     *
     * @default false
     */
    fixed?: boolean | undefined;

    /**
     * Stroke colour for the border.
     *
     * @default Colour["border"]
     */
    colour?: string | undefined;
}
```

For complex fallback logic (conditional, multi-step, or computed), use
`@remarks` instead of `@default`.

Do not document a default when the value is only assumed by convention.

### Deprecation

Deprecated props and types should include a direct migration target.

```tsx
export interface ExampleProps {
    /**
     * @deprecated Use `customLabels` instead.
     */
    headerTitle?: string | undefined;
}
```

### Params

@param for public function-like APIs when the parameter needs explanation beyond its TypeScript type.

```tsx
/**
 * Called when the drawer dismissal state changes.
 *
 * @param args Details about the dismissal event.
 * @param args.reason Reason the drawer was dismissed.
 * @param args.source Element or interaction that triggered the dismissal.
 */
onDrawerDismiss?: (( args: {
  reason: "escape-key" | "outside-click" | "item-click";
  source?: HTMLElement | undefined; }
) => void) | undefined;
```
