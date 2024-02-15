import { InputProps } from "../input/types";

export type MaskedInputLoadState = "loading" | "fail" | "success";
export interface MaskedInputProps extends InputProps {
    maskRange?: number[] | undefined;
    unmaskRange?: number[] | undefined;
    maskRegex?: RegExp | undefined;
    maskTransformer?: ((value: string) => string) | undefined;
    iconMask?: JSX.Element;
    iconUnmask?: JSX.Element;
    iconActiveColor?: string | undefined;
    iconInactiveColor?: string | undefined;
    maskChar?: string | undefined;
    disableMask?: boolean | undefined;
    transformInput?: "uppercase" | "lowercase" | undefined;
    /**
     * Specifies the state of the component when there is a
     * loading behaviour. Note that this only applies if
     * the component is in `readOnly` mode.
     *
     * Values: "loading" | "fail" | "success"
     */
    loadState?: MaskedInputLoadState | undefined;
    onMask?: (() => void) | undefined;
    onUnmask?: (() => void) | undefined;
    /** The callback function when the "Try again" button is clicked in error state */
    onTryAgain?: (() => void) | undefined;
}

/** To be exposed for Form component inheritance */
export type MaskedInputPartialProps = Omit<MaskedInputProps, "error">;
