import type { MaskedInputPartialProps } from "../../masked-input/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.MaskedInput`, combining masked input props with the shared
 * form field layout.
 */
export interface FormMaskedInputProps
    extends MaskedInputPartialProps,
        BaseFormElementProps {}
