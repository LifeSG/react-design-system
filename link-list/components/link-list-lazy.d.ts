import { BaseProps, LinkListLazyProps } from "../internal-types";
type Props<T> = Omit<BaseProps<T>, "className" | "data-testid"> & Omit<LinkListLazyProps, "loadMode">;
export declare const LazyLinkList: <T>({ items, style, onItemClick, loadMore, onLoadMore, customLabels, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
