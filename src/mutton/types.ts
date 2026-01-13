import React from "react";
import { ComponentLoadingSpinnerProps } from "../shared/component-loading-spinner";

export type MuttonStyleType = "default" | "secondary" | "light" | "link";

export interface MuttonBaseProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    "data-testid"?: string | undefined;
    /** The style type of the button. Values: "default" | "secondary" | "light" | "link" */
    styleType?: MuttonStyleType | undefined;
    /** If specified, the component will have a red color scheme being applied */
    danger?: boolean | undefined;
    /** If true, the button remains focusable when disabled. Defaults to false. */
    focusableWhenDisabled?: boolean | undefined;
}

export interface MuttonProps extends MuttonBaseProps {
    /** Indicates if a loading spinner is to be displayed */
    loading?: boolean | undefined;
}

export type MuttonRef = React.Ref<HTMLButtonElement>;
