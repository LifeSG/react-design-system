import type {
    ColourCSSVariableString,
    ComponentTokenCSSVariableString,
} from "../theme";

/**
 * Props for the animations component.
 */
export type AnimationProps = {
    id?: string;
    "data-testid"?: string | undefined;
    className?: string;
};

/**
 * Props for any customisable animations component.
 */
export type CustomisableAnimationProps = AnimationProps & {
    /**
     * The color that is to be applied on the animated elements
     */
    color?:
        | string
        | ColourCSSVariableString
        | ComponentTokenCSSVariableString
        | undefined;
};
