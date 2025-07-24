export type LinkListStyle = "default" | "small";

export interface LinkListItemProps<T>
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    description?: string | undefined;
    secondaryDescription?: JSX.Element | undefined;
    "data-testid"?: string | undefined;
    options?: T | undefined; // Used to pass custom props
}

export type BaseProps<T> = {
    items: LinkListItemProps<T>[];
    style?: LinkListStyle | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /** Captures item clicks on a component level */
    onItemClick?:
        | ((
              item: LinkListItemProps<T>,
              event: React.MouseEvent<HTMLAnchorElement>
          ) => void)
        | undefined;
};

export type LinkListEagerProps = {
    loadMode?: "eager" | undefined;
    maxShown?: number | undefined;
};
export type LinkListLazyProps = {
    loadMode: "lazy";
    loadMore: boolean;
    onLoadMore: () => void | Promise<void>;
};
