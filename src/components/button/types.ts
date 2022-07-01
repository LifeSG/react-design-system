import React from "react";

type StyleType = "default" | "secondary" | "light";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: StyleType;
    loading?: boolean;
}

export type ButtonRef = React.Ref<HTMLButtonElement>;

export type MainButtonStyle = "default" | "disabled" | "secondary" | "light";
export type MainButtonSize = "default" | "small";
export interface MainStyleProps {
    buttonStyle: MainButtonStyle;
    buttonSize?: MainButtonSize; // TODO: Make mandatory
}

export interface LinkButtonProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    styleType?: StyleType;
}
export type LinkButtonRef = HTMLAnchorElement;

export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
