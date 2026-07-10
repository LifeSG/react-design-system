import type React from "react";

/** Visual style variant. */
export type TagType = "outline" | "solid";

/** Color theme applied to the tag. */
export type TagColorType =
    | "black"
    | "grey"
    | "green"
    | "yellow"
    | "red"
    | "blue"
    | "primary";

/** Props for the `Tag` component. */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
    /** Visual style variant. */
    type: TagType;
    /**
     * Color theme applied to the tag.
     *
     * @default "black"
     */
    colorType?: TagColorType | undefined;
    /**
     * Optional icon rendered alongside the label. The position is controlled by `iconPosition`.
     */
    icon?: JSX.Element | undefined;
    /**
     * Position of the icon relative to the label text.
     *
     * @default "left"
     */
    iconPosition?: "left" | "right";
    /**
     * When `true`, renders the tag as a `<button>` element to support click
     * and keyboard interactions. When `false`, renders as a non-interactive
     * `<div>`.
     *
     * @default false
     */
    interactive?: boolean | undefined;
}
