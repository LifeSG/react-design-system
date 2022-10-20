import React from "react";

export type IconType =
    | "address-book"
    | "alert"
    | "arrow-up"
    | "arrow-left"
    | "arrow-right"
    | "arrow-down"
    | "camera"
    | "chevron-up"
    | "chevron-left"
    | "chevron-right"
    | "chevron-down"
    | "clock"
    | "cross"
    | "cross-encased"
    | "external"
    | "info"
    | "link"
    | "menu"
    | "minus"
    | "plus"
    | "search"
    | "tick";

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
    type: IconType;
}

export interface IconSvgProps {
    id?: string | undefined;
    className?: string | undefined;
}
