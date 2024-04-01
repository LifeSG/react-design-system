import React from "react";

type StyleType = "default" | "secondary" | "light" | "link";
export interface ButtonWithIconProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The icon to be added to the button */
    icon: JSX.Element;
    /** Specifies where the icon will be positioned */
    iconPosition?: "left" | "right";
    /** The style type of the button. Values: "default" | "secondary" | "light" | "link" */
    styleType?: StyleType | undefined;
    /** Indicates if a loading spinner is to be displayed */
    danger?: boolean | undefined;
}

export type ButtonWithIconRef = React.Ref<HTMLButtonElement>;

export type MainButtonStyle =
    | "default"
    | "disabled"
    | "secondary"
    | "light"
    | "link";
export type MainButtonSize = "default" | "small";
export type ButtonIconPosition = "left" | "right";
export interface MainStyleProps {
    $buttonStyle: MainButtonStyle;
    $buttonIcon: JSX.Element;
    $buttonIconPosition?: ButtonIconPosition | undefined;
    $buttonSizeStyle?: MainButtonSize | undefined;
    $buttonIsDanger?: boolean;
}
