import { InputProps } from "../input/types";

/**
 * The async load state for a MaskedInput in read-only mode.
 *
 * - `"loading"`: Shows a loading indicator.
 * - `"fail"`: Shows an error state with a retry action.
 * - `"success"`: Value is loaded and displayed.
 */
export type MaskedInputLoadState = "loading" | "fail" | "success";

/**
 * Configuration for how the input value is masked and revealed.
 *
 * Provide one of the range-based approaches (`maskRange`/`unmaskRange`),
 * the regex approach (`maskRegex`), or the transformer approach (`maskTransformer`).
 */
export interface MaskAttributeProps {
    /**
     * Character index range (inclusive) to mask, e.g., `[4, 7]` masks characters 4–7.
     *
     * @default undefined
     */
    maskRange?: number[] | undefined;
    /**
     * Character index range (inclusive) that remains visible; all others are masked.
     *
     * @default undefined
     */
    unmaskRange?: number[] | undefined;
    /**
     * A regular expression used to identify which characters in the value to mask.
     *
     * @default undefined
     */
    maskRegex?: RegExp | undefined;
    /**
     * A function that receives the raw value and returns the masked string.
     *
     * Use when neither range-based nor regex masking is sufficient.
     *
     * @param value - The current raw input value.
     *
     * @default undefined
     */
    maskTransformer?: ((value: string) => string) | undefined;
    /**
     * The character used to replace masked characters.
     *
     * @default undefined
     */
    maskChar?: string | undefined;
}

/**
 * Props for the MaskedInput component - text input with show/hide masking.
 *
 * Extends the standard Input with a toggle button that reveals or hides
 * sensitive text such as passwords, IC numbers, or credit card details.
 * Supports range-based, regex, and custom transformer masking strategies.
 * Can enter a loading/error read-only state for async value fetching.
 *
 * @example
 * ```tsx
 * <MaskedInput
 *     value={nricValue}
 *     unmaskRange={[0, 0]}
 *     maskChar="*"
 *     placeholder="S1234567A"
 * />
 * ```
 * @keywords sensitive field, redacted input, hide value, reveal toggle, mask unmask
 */
export interface MaskedInputProps extends InputProps, MaskAttributeProps {
    /** Custom icon element shown in the toggle button when the value is masked (hidden). */
    iconMask?: JSX.Element;
    /** Custom icon element shown in the toggle button when the value is unmasked (visible). */
    iconUnmask?: JSX.Element;
    /** The colour applied to the toggle icon when it is in its active (focused/hovered) state. */
    iconActiveColor?: string | undefined;
    /** The colour applied to the toggle icon when it is in its inactive (default) state. */
    iconInactiveColor?: string | undefined;
    /**
     * Hides the mask toggle button, keeping the value permanently visible.
     *
     * @default false
     */
    disableMask?: boolean | undefined;
    /**
     * Automatically transforms typed characters to the specified case.
     *
     * - `"uppercase"`: Converts all input to upper case.
     * - `"lowercase"`: Converts all input to lower case.
     *
     * @default undefined
     */
    transformInput?: "uppercase" | "lowercase" | undefined;
    /**
     * The async load state when the component is in `readOnly` mode.
     *
     * Use to indicate that the masked value is being fetched from an API.
     *
     * - `"loading"`: Shows a loading indicator.
     * - `"fail"`: Shows an error state with a retry action.
     * - `"success"`: Value is loaded and displayed normally.
     *
     * @default undefined
     */
    loadState?: MaskedInputLoadState | undefined;
    /** Called when the user masks (hides) the value via the toggle button. */
    onMask?: (() => void) | undefined;
    /** Called when the user unmasks (reveals) the value via the toggle button. */
    onUnmask?: (() => void) | undefined;
    /** Called when the user clicks the "Try again" button in the error load state. */
    onTryAgain?: (() => void) | undefined;
}

/** To be exposed for Form component inheritance */
export type MaskedInputPartialProps = Omit<MaskedInputProps, "error">;
