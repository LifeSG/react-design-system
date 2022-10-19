import React from "react";
import { ComponentLoadingSpinnerProps } from "src/shared/component-loading-spinner/component-loading-spinner";
declare type StyleType = "default" | "secondary" | "light" | "link";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The style type of the button. Values: "default" | "secondary" | "light" | "link" */
    styleType?: StyleType | undefined;
    /** Indicates if a loading spinner is to be displayed */
    loading?: boolean | undefined;
}
export declare type ButtonRef = React.Ref<HTMLButtonElement>;
export declare type MainButtonStyle = "default" | "disabled" | "secondary" | "light" | "link";
export declare type MainButtonSize = "default" | "small";
export interface MainStyleProps extends ComponentLoadingSpinnerProps {
    $buttonStyle: MainButtonStyle;
    $buttonSizeStyle?: MainButtonSize | undefined;
}
export {};
