import React from "react";
import { BrandType, NavbarBrandingProps } from "./types";
interface Props {
    resources: NavbarBrandingProps;
    compress?: boolean | undefined;
    "data-testid"?: string | undefined;
    type: BrandType;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement>, type: BrandType) => void) | undefined;
}
export declare const Brand: ({ resources, compress, onClick, "data-testid": testId, type, }: Props) => JSX.Element;
export {};
