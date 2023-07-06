import React from "react";

export type Type = "outline" | "solid";
export type ColorType = "black" | "grey" | "green" | "yellow" | "red" | "blue";

export interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
    type: Type;
    colorType: ColorType;
    icon?: JSX.Element | undefined;
    "data-testid"?: string | undefined;
}
