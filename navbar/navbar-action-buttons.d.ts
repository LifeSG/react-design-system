import React from "react";
import { NavbarButtonProps } from "./types";
interface Props {
    actionButtons?: NavbarButtonProps[] | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    onActionButtonClick: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<Element>, actionButton: NavbarButtonProps) => void;
}
export declare const NavbarActionButtons: ({ actionButtons, mobile, onActionButtonClick, }: Props) => JSX.Element;
export {};
