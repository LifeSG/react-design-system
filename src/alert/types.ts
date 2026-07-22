import type React from "react";

/** Visual severity or purpose of an alert banner. */
export type AlertType =
    | "success"
    | "warning"
    | "error"
    | "info"
    | "description";

/** Controls the overall size of the alert, affecting typography and icon dimensions. */
export type AlertSizeType = "default" | "small";

/** Props for the `Alert` component. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Visual severity or purpose of the alert banner. */
    type: AlertType;
    "data-testid"?: string | undefined;
    /**
     * Anchor attributes for an optional call-to-action link rendered below the
     * alert content. The link is styled with a trailing arrow icon by default;
     * supply `actionLinkIcon` to replace that icon.
     *
     * @default <ArrowRightIcon />
     */
    actionLink?: React.AnchorHTMLAttributes<HTMLAnchorElement> | undefined;
    /**
     * Renders the type-specific icon to the left of the content.
     *
     * @default false
     */
    showIcon?: boolean | undefined;
    /**
     * Replaces the default trailing arrow on the action link. Only visible when
     * `actionLink` is also provided.
     */
    actionLinkIcon?: JSX.Element | undefined;
    /** Controls the overall size of the alert, affecting typography and icon dimensions. */
    sizeType?: AlertSizeType | undefined;
    /** Replaces the default type-specific icon. Only visible when `showIcon` is `true`. */
    customIcon?: JSX.Element | undefined;
    /**
     * Maximum height in pixels before the content area is collapsed. When the
     * rendered content exceeds this value a "Show more / Show less" toggle is
     * displayed. The content container is marked as inert whenever the collapsed
     * state is active.
     */
    maxCollapsedHeight?: number | undefined;
}
