import type { InputProps } from "../input/types";

/**
 * Load state for `MaskedInput`.
 */
export type MaskedInputLoadState = "loading" | "fail" | "success";

/**
 * Shared masking configuration used by `MaskedInput` and related components.
 *
 * Exactly one masking strategy should be provided. When multiple are supplied
 * the precedence is: `maskTransformer` → `maskRegex` → `maskRange` /
 * `unmaskRange`.
 */
export interface MaskAttributeProps {
    /**
     * Index range `[start, end]` of the characters to mask (inclusive, zero-based).
     * Characters outside this range remain visible.
     *
     * @remarks Ignored when `maskTransformer` or `maskRegex` is provided.
     */
    maskRange?: number[] | undefined;
    /**
     * Index range `[start, end]` of the characters to keep visible (inclusive, zero-based).
     * Characters outside this range are masked.
     *
     * @remarks Ignored when `maskTransformer` or `maskRegex` is provided.
     */
    unmaskRange?: number[] | undefined;
    /**
     * Regular expression whose matches are replaced with `maskChar`.
     *
     * @remarks Ignored when `maskTransformer` is provided.
     */
    maskRegex?: RegExp | undefined;
    /**
     * Custom function that receives the raw value and returns the fully
     * masked string. Takes precedence over `maskRegex`, `maskRange`, and
     * `unmaskRange`.
     */
    maskTransformer?: ((value: string) => string) | undefined;
    /**
     * Character used to replace each masked character in the displayed value.
     *
     * @default "•"
     */
    maskChar?: string | undefined;
}

/**
 * Props for the `MaskedInput` component.
 */
export interface MaskedInputProps extends InputProps, MaskAttributeProps {
    value?: string | undefined;
    /**
     * Icon rendered inside the toggle button while the value is masked
     *
     * @default <EyeIcon />
     */
    iconUnmask?: JSX.Element;
    /**
     * Icon rendered inside the toggle button while the value is unmasked
     *
     * @default <EyeSlashIcon />
     */
    iconMask?: JSX.Element;
    /**
     * CSS color value applied to the mask-toggle icon when it is active
     */
    iconActiveColor?: string | undefined;
    /**
     * CSS color value applied to the mask-toggle icon in its default
     * inactive state.
     */
    iconInactiveColor?: string | undefined;
    /**
     * When `true`, masking is permanently disabled and the raw value is
     * always shown. The toggle icon is not rendered.
     *
     * @default false
     */
    disableMask?: boolean | undefined;
    /**
     * Automatically transforms the typed value before it is stored and
     * passed to `onChange`.
     */
    transformInput?: "uppercase" | "lowercase" | undefined;
    /**
     * Retrieval state for the value. Only applies when `readOnly` is `true`.
     */
    loadState?: MaskedInputLoadState | undefined;
    /**
     * Called when the value transitions from unmasked to masked.
     */
    onMask?: (() => void) | undefined;
    /**
     * Called when the value transitions from masked to unmasked.
     */
    onUnmask?: (() => void) | undefined;
    /**
     * Called when the user clicks the "Try again?" button shown in the
     * `loadState="fail"` state. Only relevant when `readOnly` is `true`.
     */
    onTryAgain?: (() => void) | undefined;
}

/**
 * A subset of `MaskedInputProps` used by form components that manage
 * the `error` state themselves.
 */
export type MaskedInputPartialProps = Omit<MaskedInputProps, "error">;
