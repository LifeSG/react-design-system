import { InputGroupProps } from "../input-group";

export interface MaskedInputProps<T, V>
    extends Omit<InputGroupProps<T, V>, "addon"> {
    maskRange?: number[] | undefined;
    unmaskRange?: number[] | undefined;
    maskRegex?: RegExp | undefined;
    maskTransformer?: (value: string) => string | undefined;
    iconMask?: JSX.Element;
    iconUnmask?: JSX.Element;
    iconActiveColor?: string | undefined;
    iconInactiveColor?: string | undefined;
    maskChar?: string | undefined;
    onMask?: () => void;
    onUnmask?: () => void;
}

/** To be exposed for Form component inheritance */
export type MaskedInputPartialProps<T, V> = Omit<
    MaskedInputProps<T, V>,
    "error"
>;
