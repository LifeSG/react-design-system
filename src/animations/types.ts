import type {
    ColourCSSVariableString,
    ComponentTokenCSSVariableString,
} from "../theme";

// @storybookSkipProps
type BaseAnimationProps = {
    id?: string;
    "data-testid"?: string | undefined;
    className?: string;
};

/**
 * Props for the animations component.
 */
export type AnimationProps = BaseAnimationProps & {};

/**
 * Props for any customisable animations component.
 */
export type CustomisableAnimationProps = BaseAnimationProps & {
    /**
     * The color that is to be applied on the animated elements
     */
    color?:
        | string
        | ColourCSSVariableString
        | ComponentTokenCSSVariableString
        | undefined;
};
