import { LinkListItemProps, LinkListStyle } from "../internal-types";
type LinkListItemsProps<T> = {
    "data-testid"?: string | undefined;
    items: LinkListItemProps<T>[];
    handleItemClick: (event: React.MouseEvent<HTMLAnchorElement>, item: LinkListItemProps<T>) => void;
    style?: LinkListStyle | undefined;
};
export declare const LinkListItems: <T>({ "data-testid": testId, items, handleItemClick, style, }: LinkListItemsProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
