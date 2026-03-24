import type { ButtonProps, ButtonRef } from "../button/types";

export type { ButtonIconPosition } from "../button/types";

export interface ButtonWithIconProps extends ButtonProps {
    /** The icon to be rendered in the button */
    icon: JSX.Element;
}

export type ButtonWithIconRef = ButtonRef;
