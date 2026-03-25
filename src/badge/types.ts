export type BadgeVariant =
    | "number"
    | "number-with-border"
    | "dot"
    | "dot-with-border"
    | "square-number";

export type BadgeColor = "default" | "important";

/**
 * A visual indicator for notifications or status, displayed as a badge overlay.
 *
 * @keywords badge, notification, count, dot, indicator
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Offsets the badge relative to the top right corner. Expects `[left, top]` CSS length values. */
    badgeOffset?: [string, string] | undefined;
    /** Content to display with the badge positioned in the corner. */
    children?: JSX.Element | undefined;
    /** The number to display inside the badge. Applies to number-based badge variants only. */
    count?: number | undefined;
    /** Specifies the visual style of the badge. @default "number" */
    variant?: BadgeVariant | undefined;
    /** Defines the visual color tone of the badge. @default "default" */
    color?: BadgeColor | undefined;
    /** Test identifier for automated testing. @default "badge" */
    "data-testid"?: string | undefined;
}
