export type FadePosition = "left" | "right" | "both";

export type SeparatorStyle = "chevron" | "slash";

/**
 * Gradient color values for the left and right fade overlays in the
 * breadcrumb scroll container.
 */
export interface FadeColorSet {
    left?: string[] | undefined;
    right?: string[] | undefined;
}

/**
 * Props for configuring the Breadcrumb navigation trail.
 */
export interface BreadcrumbProps {
    /**
     * Navigation items rendered as the breadcrumb trail. The last item is
     * treated as the current page (`aria-current="page"`) and is not clickable.
     * Items without `href` render as non-clickable labels. Items without
     * `children` are skipped.
     */
    links: React.AnchorHTMLAttributes<HTMLAnchorElement>[];
    /**
     * Gradient color stops for the fade overlays shown on horizontal scroll.
     * Pass a `string[]` to apply the same gradient to both edges, or a
     * `FadeColorSet` to configure each edge independently.
     */
    fadeColor?: string[] | FadeColorSet | undefined;
    /**
     * Which edges display fade overlays when content overflows.
     *
     * @default "both"
     */
    fadePosition?: FadePosition | undefined;
    /**
     * Visual separator between breadcrumb items.
     *
     * @default "chevron"
     */
    separatorStyle?: SeparatorStyle | undefined;
    className?: string | undefined;
    /**
     * HTML `id` for the wrapper element.
     *
     * @default "breadcrumb"
     */
    id?: string | undefined;
    "data-testid"?: string | undefined;
}
