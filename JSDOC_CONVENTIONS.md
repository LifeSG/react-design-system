# JSDoc Conventions

## Purpose

JSDoc should explain the public behavior of component APIs that TypeScript types alone cannot describe. We're using it for:

-   IntelliSense hover information
-   Generated props documentation
-   AI-friendly API understanding
-   Public API references

<br />

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

<br />

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
 * Use `selectedId` with `onItemClick` for controlled selection behavior.
 *
 * @example
 * <Navbar
 *   selectedId="overview"
 *   items={{
 *     desktop: [{ id: "overview", label: "Overview", href: "/overview" }],
 *   }}
 *   onItemClick={(item) => trackNavClick(item.id)}
 * />
 */
export interface NavbarProps {
    // ...
}
```

<br />

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

<br />

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

<br />

## Recommended tags

Use JSDoc tags only when they add useful information.

Recommended:

-   `@default` when the default is enforced by code
-   `@deprecated` with a migration path
-   `@example` for main props or complex public APIs
-   `@remarks` for important caveats or relationships

Avoid:

-   `@param` and `@returns` on interface properties
-   Tags that only repeat the type
-   Examples on every type
-   Long explanations of internal implementation details

<br />

## Defaults

Use `@default` only when the default value is stable and enforced by the component.

```tsx
export interface ExampleProps {
    /**
     * Pins the component while the page scrolls.
     *
     * @default false
     */
    fixed?: boolean | undefined;
}
```

Do not document a default when the value is only assumed by convention.

<br />

## Deprecation

Deprecated props and types should include a direct migration target.

```tsx
export interface ExampleProps {
    /**
     * @deprecated Use `customLabels` instead.
     */
    headerTitle?: string | undefined;
}
```

## Example

Use `@example` for main component props or complex public APIs where a short usage example helps clarify the API.

Avoid adding examples to every nested type. Prefer one useful example on the main public props type.

```tsx
/**
 * Props for rendering and controlling the navbar selection state.
 *
 * @remarks
 * Mobile items fall back to desktop items when `items.mobile` is not provided.
 *
 * @example
 * <Navbar
 *   selectedId="overview"
 *   items={{
 *     desktop: [{ id: "overview", label: "Overview", href: "/overview" }],
 *   }}
 *   drawerDismissalExclusions={["item-click"]}
 * />
 */
export interface NavbarProps {
    // ...
}
```

## Remarks

Use `@remarks` for important notes that are useful to consumers but do not belong in the first sentence.

Good use cases:

-   fallback behavior
-   accessibility notes
-   controlled/uncontrolled behavior
-   lifecycle or callback timing notes
-   constraints between props

```tsx
/**
 * Props for rendering an input-select with optional controlled selection.
 *
 * @remarks
 * Use `selectedKey` with `onSelectionChange` for controlled behavior.
 * When `selectedKey` is omitted, the component manages selection internally.
 */
export interface InputSelectProps {
    // ...
}
```
