export type FadePosition = "left" | "right" | "both";

export type SeparatorStyle = "chevron" | "slash";

/** Color set for the left and right fade effect on overflowing breadcrumbs. */
export interface FadeColorSet {
    /** The color of the left fade */
    left?: string[] | undefined;
    /** The color of the right fade */
    right?: string[] | undefined;
}

/**
 * Displays the current page location in a hierarchy of pages.
 *
 * The last item is always unclickable as it represents the current location.
 *
 * @keywords breadcrumb, navigation, hierarchy, path, location
 */
export interface BreadcrumbProps {
    /** The links for the breadcrumbs */
    links: React.AnchorHTMLAttributes<HTMLAnchorElement>[];
    /** When the breadcrumbs are too long, controls the color of the fade effect at the ends */
    fadeColor?: string[] | FadeColorSet | undefined;
    /** When the breadcrumbs are too long, controls whether the fade effect is shown. @default "both" */
    fadePosition?: FadePosition | undefined;
    /** Custom style that can be passed to the `Breadcrumb` items */
    itemStyle?: string | undefined;
    /** Separator style between breadcrumb items. @default "chevron" */
    separatorStyle?: SeparatorStyle | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
}
