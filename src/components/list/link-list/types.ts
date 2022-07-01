import { AnchorHTMLAttributes } from "react";

export interface LinkListItemProps<T = void>
    extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    description?: string;
    secondaryDescription?: JSX.Element;
    "data-testid"?: string;
    options?: T; // Used to pass custom props
}

export type LinkListStyle = "default" | "small";

export interface LinkListProps<T = void> {
    items: LinkListItemProps<T>[];
    maxShown?: number;
    style?: LinkListStyle;
    className?: string;
    "data-testid"?: string;
    onItemClick?: <K extends T>(item: LinkListItemProps<K>) => void;
    onDefaultClickHandler?: <K extends T>(
        item: LinkListItemProps<K>,
        event: React.MouseEvent<HTMLAnchorElement>
    ) => void;
}
