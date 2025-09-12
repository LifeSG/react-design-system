import React from "react";
import { BrandType, NavbarBrandingProps } from "./types";
interface Props {
    resources: NavbarBrandingProps;
    compress?: boolean | undefined;
    "data-id"?: string | undefined;
    "data-testid"?: string | undefined;
    type: BrandType;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement>, type: BrandType) => void) | undefined;
}
export declare const Brand: ({ resources, onClick, "data-id": dataId, "data-testid": testId, type, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
