import React from "react";
import { NavbarResourcesProps } from "./types";
interface Props {
    resources: NavbarResourcesProps;
    compress?: boolean | undefined;
    "data-testid"?: string | undefined;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void | undefined;
}
export declare const Brand: ({ resources, compress, onClick, "data-testid": testId, }: Props) => JSX.Element;
export {};
