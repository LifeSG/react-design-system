export type FadePosition = "left" | "right" | "both";

export interface FadeColorSet {
    left?: string[] | undefined;
    right?: string[] | undefined;
}

/**
 * Props for the Breadcrumb component - horizontal navigation trail.
 *
 * Renders an ordered list of anchor links representing the current page
 * hierarchy. When links overflow, a fade gradient is applied at the
 * scrollable edges.
 *
 * @example
 * ```tsx
 * <Breadcrumb
 *     links={[
 *         { href: "/", children: "Home" },
 *         { href: "/products", children: "Products" },
 *         { children: "Current Page" },
 *     ]}
 * />
 * ```
 * @keywords navigation trail, page path, crumb nav, hierarchy links
 */
export interface BreadcrumbProps {
    /** The ordered list of anchor attributes for each breadcrumb link. */
    links: React.AnchorHTMLAttributes<HTMLAnchorElement>[];
    /**
     * The color(s) for the overflow fade gradient at each end.
     *
     * Pass a single `string[]` to apply the same gradient to both ends, or
     * a `FadeColorSet` to set different gradients for each side.
     */
    fadeColor?: string[] | FadeColorSet | undefined;
    /**
     * Controls which end(s) of the breadcrumb show the overflow fade gradient.
     *
     * @default "both"
     */
    fadePosition?: FadePosition | undefined;
    /** Custom CSS-in-JS style string applied to each breadcrumb item. */
    itemStyle?: string | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The unique id attribute of the component. */
    id?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
}
