import type React from "react";

export type ButtonStyleType = "default" | "secondary" | "light" | "link";
export type ButtonSize = "large" | "default" | "small";
export type ButtonIconPosition = "left" | "right";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    "data-testid"?: string | undefined;
    /** The style type of the button. Values: "default" | "secondary" | "light" | "link" */
    styleType?: ButtonStyleType | undefined;
    /** The size of the button. Values: "large" | "default" | "small" */
    sizeType?: ButtonSize | undefined;
    /** If specified, the component will have a red color scheme being applied */
    danger?: boolean | undefined;
    /** Indicates if a loading spinner is to be displayed */
    loading?: boolean | undefined;
    /** If true, the button remains focusable when disabled. Defaults to false. */
    focusableWhenDisabled?: boolean | undefined;
    /**
     * The icon to be rendered in the button. When provided without children, the
     * button renders in icon-only mode (square). Requires aria-label on the button
     * for accessibility in icon-only mode.
     */
    icon?: JSX.Element | undefined;
    /** Specifies where the icon will be positioned relative to the label. */
    iconPosition?: ButtonIconPosition | undefined;
}

export type ButtonRef = React.Ref<HTMLButtonElement>;
