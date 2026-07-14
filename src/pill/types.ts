import type React from "react";

/**
 * Visual style variant for `Pill`.
 *
 * - `"solid"` renders a filled background.
 * - `"outline"` renders a border-only style.
 */
export type PillType = "outline" | "solid";

/** Color theme for `Pill`. */
export type PillColorType =
    | "black"
    | "grey"
    | "green"
    | "yellow"
    | "red"
    | "blue"
    | "primary";

/**
 * Props for the `Pill` component.
 */
export interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Visual style variant for the pill. */
    type: PillType;
    /**
     * Color theme applied to the pill.
     *
     * @default "black"
     */
    colorType?: PillColorType | undefined;
    /**
     * Icon rendered before the label text.
     */
    icon?: JSX.Element | undefined;
}
