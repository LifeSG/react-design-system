import React from "react";

export type PillType = "outline" | "solid";
export type PillColorType =
    | "black"
    | "grey"
    | "green"
    | "yellow"
    | "red"
    | "blue";

/**
 * Props for the Pill component - compact label badge.
 *
 * Renders a small pill-shaped tag with a configurable display style (solid
 * fill or outline) and color scheme. Inherits all `HTMLDivElement` attributes.
 *
 * @example
 * ```tsx
 * <Pill type="solid" colorType="green">Active</Pill>
 * <Pill type="outline" colorType="red">Expired</Pill>
 * ```
 * @keywords badge, chip, label tag, status badge, colored label
 */
export interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The display style of the Pill. */
    type: PillType;
    /**
     * The color scheme of the Pill.
     *
     * @default "black"
     */
    colorType?: PillColorType | undefined;
    /** An optional icon element rendered before the label text. */
    icon?: JSX.Element | undefined;
}
