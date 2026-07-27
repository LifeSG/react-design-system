/**
 * Renders styled ordered and unordered lists for body copy and structured content.
 *
 * Use `TextList` to present sequential or non-sequential items with consistent
 * typography and spacing.
 *
 * Sub-components:
 * - `TextList.Ol` — a numbered list with configurable counter style and direction.
 * - `TextList.Ul` — a bulleted list supporting predefined marker types or a custom icon.
 */
export declare const TextList: {
    /**
     * Renders a bulleted list. Supports predefined marker types or
     * a custom decorative icon.
     */
    Ul: {
        ({ className, size, bulletType, bottomMargin, children, ...otherProps }: import("./types").UnorderedListProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    /**
     * Renders a numbered list with configurable counter display.
     */
    Ol: {
        ({ className, size, counterType, counterSeparator, reversed, start, bottomMargin, children, ...otherProps }: import("./types").OrderedListProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export * from "./types";
