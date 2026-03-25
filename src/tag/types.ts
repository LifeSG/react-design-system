import React from "react";

export type TagType = "outline" | "solid";
export type TagColorType =
    | "black"
    | "grey"
    | "green"
    | "yellow"
    | "red"
    | "blue"
    | "primary";

/**
 * A static or interactive element that is used to communicate selections, statuses and categories.
 *
 * @keywords tag, label, badge, status, category
 */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
    /** The display style of the Tag. */
    type: TagType;
    /** The color style of the Tag. @default "black" */
    colorType?: TagColorType | undefined;
    /** A component to be displayed as the icon. */
    icon?: JSX.Element | undefined;
    /** The position of the icon relative to the label text. @default "left" */
    iconPosition?: "left" | "right";
    /** Specifies if the tag is interactive. @default false */
    interactive?: boolean | undefined;
}
