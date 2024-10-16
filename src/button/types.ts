import React from "react";
import { ComponentLoadingSpinnerProps } from "../shared/component-loading-spinner/component-loading-spinner";

type StyleType = "default" | "secondary" | "light" | "link";

export interface ButtonBaseProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** The style type of the button. Values: "default" | "secondary" | "light" | "link" */
    styleType?: StyleType | undefined;
    /** If specified, the component will have a red color scheme being applied */
    danger?: boolean | undefined;
}

export interface ButtonProps extends ButtonBaseProps {
    /** Indicates if a loading spinner is to be displayed */
    loading?: boolean | undefined;
}

export type ButtonRef = React.Ref<HTMLButtonElement>;

/** @deprecated For internal use only */
export type MainButtonStyle =
    | "default"
    | "disabled"
    | "secondary"
    | "light"
    | "link";

/** @deprecated For internal use only */
export type MainButtonSize = "default" | "small" | "large";

/** @deprecated For internal use only */
export interface MainStyleProps extends ComponentLoadingSpinnerProps {
    $buttonStyle: MainButtonStyle;
    $buttonSizeStyle?: MainButtonSize | undefined;
    $buttonIsDanger?: boolean;
}
