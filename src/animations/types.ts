import type {
    ColourCSSVariableString,
    ComponentTokenCSSVariableString,
} from "../theme";

export interface BaseAnimationProps {
    id?: string;
    "data-testid"?: string | undefined;
    className?: string;
}

export interface CustomisedProps {
    color?:
        | string
        | ColourCSSVariableString
        | ComponentTokenCSSVariableString
        | undefined;
}

export interface CustomisableAnimationProps
    extends BaseAnimationProps,
        CustomisedProps {}
