import { UnorderedList } from "./unordered-list";
import { OrderedList } from "./ordered-list";

/**
 * A namespace for list components that render `<ul>` and `<ol>` elements with design-system styling.
 *
 * Use `TextList.Ul` for unordered lists and `TextList.Ol` for ordered lists.
 */
export const TextList = {
    Ul: UnorderedList,
    Ol: OrderedList,
};

export * from "./types";
