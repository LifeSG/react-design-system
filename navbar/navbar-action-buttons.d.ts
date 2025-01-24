import React from "react";
import { NavbarActionButtonsProps, NavbarButtonProps } from "./types";
interface Props {
    actionButtons?: NavbarActionButtonsProps | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    onActionButtonClick: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<Element>, actionButton: NavbarButtonProps) => void;
    uncollapsible?: boolean | undefined;
}
export declare const NavbarActionButtons: ({ actionButtons, mobile, onActionButtonClick, }: Props) => JSX.Element;
export {};
