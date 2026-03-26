import { InputProps } from "../input/types";

export type MaskedInputLoadState = "loading" | "fail" | "success";

/**
 * Configuration for masking behaviour applied to an input field.
 *
 * @keywords mask, unmask, obfuscate, character, regex, range
 */
export interface MaskAttributeProps {
    /** Index range [start, end] of characters to mask. Takes precedence over `unmaskRange` when both are set. */
    maskRange?: number[] | undefined;
    /** Index range [start, end] of characters to leave unmasked. */
    unmaskRange?: number[] | undefined;
    /** Regular expression used to determine which characters to mask. */
    maskRegex?: RegExp | undefined;
    /** Custom function to transform and produce the displayed masked string. */
    maskTransformer?: ((value: string) => string) | undefined;
    /** Character substituted for each masked character. @default "•" */
    maskChar?: string | undefined;
}

/**
 * Props for the MaskedInput component, a single-line input with built-in value masking and
 * optional load-state display. Extends `InputProps` and `MaskAttributeProps`.
 *
 * @keywords masked-input, obfuscate, password, toggle, loading, unmask
 */
export interface MaskedInputProps extends InputProps, MaskAttributeProps {
    /** Controlled value of the input. */
    value?: string | undefined;
    /** Icon element shown when the field is in the masked (hidden) state. */
    iconMask?: JSX.Element;
    /** Icon element shown when the field is in the unmasked (visible) state. */
    iconUnmask?: JSX.Element;
    /** Colour applied to the mask/unmask icon when in the active state. */
    iconActiveColor?: string | undefined;
    /** Colour applied to the mask/unmask icon when in the inactive state. */
    iconInactiveColor?: string | undefined;
    /** When `true`, masking is disabled and the value is always displayed as plain text. */
    disableMask?: boolean | undefined;
    /** Transforms the raw input value to uppercase or lowercase before storing. */
    transformInput?: "uppercase" | "lowercase" | undefined;
    /**
     * Specifies the state of the component when there is a
     * loading behaviour. Note that this only applies if
     * the component is in `readOnly` mode.
     *
     * Values: "loading" | "fail" | "success"
     */
    loadState?: MaskedInputLoadState | undefined;
    /** Called when the field is switched to the masked (hidden) state. */
    onMask?: (() => void) | undefined;
    /** Called when the field is switched to the unmasked (visible) state. */
    onUnmask?: (() => void) | undefined;
    /** The callback function when the "Try again" button is clicked in error state */
    onTryAgain?: (() => void) | undefined;
}

/** To be exposed for Form component inheritance */
export type MaskedInputPartialProps = Omit<MaskedInputProps, "error">;
