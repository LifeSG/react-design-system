export type LinkListStyle = "default" | "small";

/**
 * Represents a single link item in the LinkList.
 *
 * @keywords link-list-item, link, anchor, navigation
 */
export interface LinkListItemProps<T>
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The title of the item. */
    title: string;
    /** The first level description of the item. */
    description?: string | undefined;
    /** The second level description of the item. */
    secondaryDescription?: JSX.Element | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Any other custom properties to pass to the item. */
    options?: T | undefined;
}

/**
 * Base props shared by all LinkList variants. A component that displays a continuous group of link elements.
 *
 * @keywords link-list, links, navigation, list
 */
export type BaseProps<T> = {
    /** The items to be displayed. */
    items: LinkListItemProps<T>[];
    /** Specifies the text size style of the items. Values: "default" | "small" */
    style?: LinkListStyle | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** Captures item clicks on a component level */
    onItemClick?:
        | ((
              item: LinkListItemProps<T>,
              event: React.MouseEvent<HTMLAnchorElement>
          ) => void)
        | undefined;
    /** Specifies custom labels for expand/collapse buttons. */
    customLabels?:
        | {
              viewMore?: string | undefined;
              viewLess?: string | undefined;
          }
        | undefined;
};

/**
 * Props for the eager-loaded LinkList variant.
 *
 * @keywords link-list, eager, load
 */
export type LinkListEagerProps = {
    /** The loading mode for the data. @default "eager" */
    loadMode?: "eager" | undefined;
    /** Specifies the number of items to be shown. The others will be minimized */
    maxShown?: number | undefined;
};
/**
 * Props for the lazy-loaded LinkList variant.
 *
 * @keywords link-list, lazy, load-more, pagination
 */
export type LinkListLazyProps = {
    /** The loading mode for the data. */
    loadMode: "lazy";
    /** Controls if the "View more" button is displayed. Set to `true` if there are more items to be lazy loaded. */
    loadMore: boolean;
    /** Callback for when the "View more" button is clicked. This callback should update the `items` list. */
    onLoadMore: () => void | Promise<void>;
};
