/** Visual style of the badge indicator. */
export type BadgeVariant =
    | "number"
    | "number-with-border"
    | "dot"
    | "dot-with-border"
    | "square-number";

/** Color scheme applied to the badge. */
export type BadgeColor = "default" | "important";

/** Props for the `Badge` component. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Horizontal and vertical offset applied to the badge when it overlays a
     * child element. Provided as a `[x, y]` tuple of CSS length values (e.g.
     * `["-4px", "-4px"]`). Ignored when no child is rendered.
     */
    badgeOffset?: [string, string] | undefined;
    /**
     * Element that the badge overlays. When provided, the badge is positioned
     * absolutely over the top-right corner of this child. Omit to render the
     * badge as a standalone indicator.
     */
    children?: JSX.Element | undefined;
    /**
     * Color scheme applied to the badge.
     *
     * @default "default"
     */
    color?: BadgeColor | undefined;
    /**
     * Numeric value displayed inside `number`, `number-with-border`, and
     * `square-number` variants. Values above 1000 are capped and shown as
     * `"1K"` or `"1K+"`. Has no effect on dot variants.
     */
    count?: number | undefined;
    /**
     * @default "badge"
     */
    "data-testid"?: string | undefined;
    /**
     * Visual style of the badge indicator.
     *
     * @default "number"
     */
    variant?: BadgeVariant | undefined;
}
