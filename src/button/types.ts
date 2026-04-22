import React from "react";
import { ComponentLoadingSpinnerProps } from "../shared/component-loading-spinner";

export type ButtonStyleType = "default" | "secondary" | "light" | "link";

/** Base props shared by all Button component variants. */
export interface ButtonBaseProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Sets the `data-testid` attribute for targeting the element in automated tests. */
    "data-testid"?: string | undefined;
    /**
     * Controls the visual style of the button.
     * - `"default"`: Primary filled button style
     * - `"secondary"`: Secondary outlined button style
     * - `"light"`: Light/ghost button style
     * - `"link"`: Renders the button as an inline text link
     * @default "default"
     */
    styleType?: ButtonStyleType | undefined;
    /** If specified, the component will have a red color scheme being applied */
    danger?: boolean | undefined;
    /** If true, the button remains focusable when disabled. Defaults to false. */
    focusableWhenDisabled?: boolean | undefined;
}

/** Props for the Button component. */
export interface ButtonProps extends ButtonBaseProps {
    /** Displays a loading spinner and prevents interaction when `true`. @default false */
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
    $buttonWithIcon?: boolean;
}
