import React from "react";
import { ButtonProps } from "../button/types";

export interface ButtonWithIconProps extends ButtonProps {
    /** The icon to be added to the button */
    icon: JSX.Element;
    /** Specifies where the icon will be positioned */
    iconPosition?: "left" | "right";
}

export type ButtonWithIconRef = React.Ref<HTMLButtonElement>;

export type ButtonIconPosition = "left" | "right";
