import { ButtonProps, ButtonRef } from "../button/types";

/**
 * The primary call to action component with an icon.
 *
 * Extends `ButtonProps` with an icon slot that can be positioned on the left or right of the label.
 *
 * @keywords button, icon, action, call to action, interactive
 */
export interface ButtonWithIconProps extends ButtonProps {
    /** The icon component to be rendered */
    icon: JSX.Element;
    /** Specifies whether the icon is rendered on the left or right of the label. @default "left" */
    iconPosition?: "left" | "right";
}

export type ButtonWithIconRef = ButtonRef;

export type ButtonIconPosition = "left" | "right";
