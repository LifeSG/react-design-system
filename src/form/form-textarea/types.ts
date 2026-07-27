import type { TextareaPartialProps } from "../../input-textarea/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.Textarea`, combining textarea props with the shared form
 * field layout.
 */
export interface FormTextareaProps
    extends TextareaPartialProps,
        BaseFormElementProps {}
