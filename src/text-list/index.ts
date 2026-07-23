import { OrderedList } from "./ordered-list";
import { UnorderedList } from "./unordered-list";

// @catalog
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
export const TextList = {
    /**
     * Renders a bulleted list. Supports predefined marker types or
     * a custom decorative icon.
     */
    Ul: UnorderedList,
    /**
     * Renders a numbered list with configurable counter display.
     */
    Ol: OrderedList,
};

export * from "./types";
