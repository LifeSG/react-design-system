import { InputProps } from "../input/types";

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
    /** Specifies if a loading spinner should appear when unmasking happens */
    renderLoadingOnUnmask?: boolean | undefined;
    /** Specifies if there is an error during unmasking */
    unmaskError?: boolean | undefined;
    onMask?: (() => void) | undefined;
    onUnmask?: (() => void) | undefined;
    /** The callback function when the "Try again" button is clicked in error state */
    onTryAgain?: (() => void) | undefined;
}

/** To be exposed for Form component inheritance */
export type MaskedInputPartialProps = Omit<MaskedInputProps, "error">;
