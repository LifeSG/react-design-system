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
    onMask?: () => void;
    onUnmask?: () => void;
}

/** To be exposed for Form component inheritance */
export type MaskedInputPartialProps = Omit<MaskedInputProps, "error">;
