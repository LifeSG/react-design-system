import type { MenuContentProps, MenuProps } from "./types";
/**
 * Trigger wrapper that anchors a `Menu.Content` panel to its child element.
 *
 * Prefer the `Menu` composite export when building a full menu — it bundles
 * `Menu.Content`, `Menu.Section`, `Menu.Item`, and `Menu.Link` as named
 * sub-components alongside the trigger.
 */
export declare const MenuTrigger: ({ children, position, menuContent, "data-testid": testId, ...otherProps }: MenuProps) => JSX.Element;
/**
 * A popover-anchored menu composed of sections and interactive items.
 *
 * Use `Menu` when a trigger element should open a floating panel of actions or
 * navigation links.
 *
 * Sub-components:
 * - `Menu.Content` — the floating panel that contains menu sections.
 * - `Menu.Item` — a non-anchor interactive list item with a primary label and optional sub-label.
 * - `Menu.Link` — an anchor (`<a>`) list item styled as a menu entry.
 * - `Menu.Section` — a grouping container for `Menu.Item` and `Menu.Link` entries.
 */
export declare const Menu: (({ children, position, menuContent, "data-testid": testId, ...otherProps }: MenuProps) => JSX.Element) & {
    /** Renders the floating panel that contains menu sections. */
    Content: {
        ({ children, className, "data-testid": testId, overflow, maxHeight, ...otherProps }: MenuContentProps): JSX.Element;
        displayName: string;
    };
    /** Renders a non-anchor interactive list item with a primary label and optional sub-label. */
    Item: {
        ({ label, subLabel, children, className, "data-testid": testId, ...otherProps }: import("./types").MenuItemProps): JSX.Element;
        displayName: string;
    };
    /** Renders an anchor (`<a>`) list item styled as a menu entry. */
    Link: {
        ({ children, className, "data-testid": testId, ...otherProps }: import("./types").MenuLinkProps): JSX.Element;
        displayName: string;
    };
    /** Groups related menu entries. */
    Section: {
        ({ children, label, showDivider, className, "data-testid": testId, ...otherProps }: import("./types").MenuSectionProps): JSX.Element;
        displayName: string;
    };
};
