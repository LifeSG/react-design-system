import type { InputPartialProps } from "../../input/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.Input`, combining text input props with the shared form
 * field layout.
 */
export interface FormInputProps
    extends InputPartialProps,
        BaseFormElementProps {}
