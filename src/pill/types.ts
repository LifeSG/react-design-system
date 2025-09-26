import React from "react";

export type PillType = "outline" | "solid";
export type PillColorType =
    | "black"
    | "grey"
    | "green"
    | "yellow"
    | "red"
    | "blue"
    | "primary";

export interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
    type: PillType;
    colorType?: PillColorType | undefined;
    icon?: JSX.Element | undefined;
}
