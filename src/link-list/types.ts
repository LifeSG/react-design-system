import {
    BaseProps,
    LinkListEagerProps,
    LinkListLazyProps,
} from "./internal-types";

export type { LinkListItemProps, LinkListStyle } from "./internal-types";

/**
 * Props for the LinkList component, which renders a grouped list of navigational
 * anchor links with optional eager or lazy loading of items.
 *
 * @keywords link-list, links, navigation, list, anchor, lazy, eager
 */
export type LinkListProps<T> = BaseProps<T> &
    (LinkListEagerProps | LinkListLazyProps);
