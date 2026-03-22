export interface LinkListItemProps<T>
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    description?: string | undefined;
    secondaryDescription?: JSX.Element | undefined;
    "data-testid"?: string | undefined;
    options?: T | undefined; // Used to pass custom props
}

export type LinkListStyle = "default" | "small";

/**
 * Props for the LinkList component - list of labelled hyperlinks.
 *
 * Renders a vertical list of titled link items with optional descriptions.
 * If `maxShown` is set, extra items collapse behind a "Show more" toggle.
 *
 * @example
 * ```tsx
 * <LinkList
 *     items={[
 *         { title: "LifeSG", href: "https://life.gov.sg" },
 *         { title: "GovTech", href: "https://tech.gov.sg" },
 *     ]}
 *     maxShown={5}
 *     onItemClick={(item) => trackClick(item.title)}
 * />
 * ```
 * @keywords hyperlink list, resource links, link group, nav list, show more list
 */
export interface LinkListProps<T> {
    /** The list of link items to render. */
    items: LinkListItemProps<T>[];
    /** The maximum number of items visible before collapsing the rest. */
    maxShown?: number | undefined;
    /**
     * The text-size style of the list items.
     *
     * @default "default"
     */
    style?: LinkListStyle | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /**
     * Component-level click handler called when any link item is clicked.
     *
     * For per-item handling, pass `onClick` directly on the item instead.
     */
    onItemClick?:
        | ((
              item: LinkListItemProps<T>,
              event: React.MouseEvent<HTMLAnchorElement>
          ) => void)
        | undefined;
}
