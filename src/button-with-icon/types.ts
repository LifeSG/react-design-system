import { ButtonProps, ButtonRef } from "../button/types";

export interface ButtonWithIconProps extends ButtonProps {
    /** The icon to be rendered in the button */
    icon: JSX.Element;
    /** Specifies where the icon will be positioned */
    iconPosition?: "left" | "right";
}

export type ButtonWithIconRef = ButtonRef;

export type ButtonIconPosition = "left" | "right";
