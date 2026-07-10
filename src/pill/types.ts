import type React from "react";

/** Visual style variant for `Pill`. */
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
    /**
     * Controls the visual style
     * - `solid` — filled background
     * - `outline` — border-only.
     */
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
