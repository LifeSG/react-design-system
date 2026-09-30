import { BaseProps, LinkListEagerProps, LinkListLazyProps } from "./internal-types";
export type { LinkListItemProps, LinkListStyle } from "./internal-types";
export type LinkListProps<T> = BaseProps<T> & (LinkListEagerProps | LinkListLazyProps);
