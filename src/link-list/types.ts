import type {
    BaseProps,
    LinkListEagerProps,
    LinkListLazyProps,
} from "./internal-types";

export type { LinkListItemProps, LinkListStyle } from "./internal-types";

/**
 * Props for the `LinkList` component.
 */
export type LinkListProps<T> = BaseProps<T> &
    (LinkListEagerProps | LinkListLazyProps);
