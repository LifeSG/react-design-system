import { UnorderedList } from "./unordered-list";
import { OrderedList } from "./ordered-list";

export const TextList = Object.assign(
    {},
    {
        Ul: UnorderedList,
        Ol: OrderedList,
    }
);

export * from "./types";
