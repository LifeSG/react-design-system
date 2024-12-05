import React from "react";

export type TagType = "outline" | "solid";
export type TagColorType =
    | "black"
    | "grey"
    | "green"
    | "yellow"
    | "red"
    | "blue";

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
    type: TagType;
    colorType?: TagColorType | undefined;
    icon?: JSX.Element | undefined;
    iconPosition?: "left" | "right";
    interactive?: boolean | undefined;
}
