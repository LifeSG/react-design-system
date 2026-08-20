import type { LinkListBaseProps, LinkListEagerProps } from "../types";
type Props<T> = Omit<LinkListBaseProps<T>, "className" | "data-testid"> & Omit<LinkListEagerProps, "loadMode">;
export declare const EagerLinkList: <T>({ items, maxShown, style, onItemClick, customLabels, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
