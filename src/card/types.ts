/**
 * Props for the Card component - elevated content container.
 *
 * Renders a styled box with a white background and rounded corners.
 * Inherits all `HTMLDivElement` attributes.
 *
 * @example
 * ```tsx
 * <Card>
 *     <p>Card content goes here.</p>
 * </Card>
 * ```
 * @keywords tile, panel, paper, content box, surface
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
}
