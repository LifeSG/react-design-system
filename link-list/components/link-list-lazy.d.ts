import type { LinkListBaseProps, LinkListLazyProps } from "../types";
type Props<T> = Omit<LinkListBaseProps<T>, "className" | "data-testid"> & Omit<LinkListLazyProps, "loadMode">;
export declare const LazyLinkList: <T>({ items, style, onItemClick, loadMore, onLoadMore, customLabels, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
