/**
 * Visual size variant for `LinkList` items.
 *
 * - `"default"` renders standard body text
 * - `"small"` renders reduced text for compact layouts.
 *
 * @default "default"
 */
export type LinkListStyle = "default" | "small";

/**
 * Props for a single item in a `LinkList`.
 */
export interface LinkListItemProps<T>
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Primary label displayed as the link text. */
    title: string;
    /** Secondary text shown below the title. */
    description?: string | undefined;
    /**
     * Additional content rendered below the description.
     * Accepts a JSX element for rich secondary content.
     */
    secondaryDescription?: JSX.Element | undefined;
    "data-testid"?: string | undefined;
    /** Arbitrary custom data passed through to the `onItemClick` callback. */
    options?: T | undefined;
    /** Called when an item is clicked. This overrides the `onItemClick` event handler. */
    onClick?:
        | ((event: React.MouseEvent<HTMLAnchorElement>) => void)
        | undefined;
}

// @storybookSkipProps
/**
 * Base props for `LinkList`.
 */
type BaseProps<T> = {
    /** The list of link items to render. */
    items: LinkListItemProps<T>[];
    /**
     * Visual size variant applied to all items.
     *
     * @default "default"
     */
    style?: LinkListStyle | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * Component-level click handler called for every item click, unless the
     * item defines its own `onClick`.
     *
     * @param item The `LinkListItemProps` of the clicked item, including any
     * custom `options` data.
     * @param event The underlying mouse event from the anchor element.
     */
    onItemClick?:
        | ((
              item: LinkListItemProps<T>,
              event: React.MouseEvent<HTMLAnchorElement>
          ) => void)
        | undefined;
    /**
     * Overrides the default toggle button labels.
     */
    customLabels?:
        | {
              viewMore?: string | undefined;
              viewLess?: string | undefined;
          }
        | undefined;
};

/**
 * Props for eager rendering of `LinkList`.
 */
export type LinkListEagerProps = {
    /** When `"eager"`, all items are rendered immediately. */
    loadMode?: "eager" | undefined;
    /**
     * Maximum number of items shown before the list is truncated.
     * Items beyond this count are hidden until the user activates the toggle.
     * When omitted, all items are shown without truncation.
     */
    maxShown?: number | undefined;
};

/**
 * Props for lazy loading of `LinkList`.
 */
export type LinkListLazyProps = {
    /** When `"lazy"`, items are loaded on demand. */
    loadMode: "lazy";
    /**
     * Whether more items are available to load.
     * When `false`, the "View more" button is hidden.
     */
    loadMore: boolean;
    /**
     * Called when the user activates the "View more" button.
     */
    onLoadMore: () => void | Promise<void>;
};
/**
 * Props for the `LinkList` component.
 */
export type LinkListProps<T> = BaseProps<T> &
    (LinkListEagerProps | LinkListLazyProps);
