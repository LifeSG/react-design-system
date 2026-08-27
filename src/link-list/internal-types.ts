export type LinkListStyle = "default" | "small";

export interface LinkListItemProps<T>
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "title"> {
    title: string | JSX.Element;
    description?: string | JSX.Element | undefined;
    secondaryDescription?: JSX.Element | undefined;
    "data-testid"?: string | undefined;
    options?: T | undefined; // Used to pass custom props
}

export type BaseProps<T> = {
    items: LinkListItemProps<T>[];
    /** Specifies the text size style of the items. Values: "default" | "small" */
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
    customLabels?:
        | {
              viewMore?: string | undefined;
              viewLess?: string | undefined;
          }
        | undefined;
};

export type LinkListEagerProps = {
    loadMode?: "eager" | undefined;
    /** Specifies the number of items to be shown. The others will be minimized */
    maxShown?: number | undefined;
};
export type LinkListLazyProps = {
    loadMode: "lazy";
    loadMore: boolean;
    onLoadMore: () => void | Promise<void>;
};
