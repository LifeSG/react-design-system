import { BaseProps, LinkListEagerProps } from "../internal-types";
type Props<T> = Omit<BaseProps<T>, "className" | "data-testid"> & Omit<LinkListEagerProps, "loadMode">;
export declare const EagerLinkList: <T>({ items, maxShown, style, onItemClick, customLabels, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
