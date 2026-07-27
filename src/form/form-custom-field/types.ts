import type { BaseFormElementProps, FormWrapperProps } from "../types";

/**
 * Props for `Form.CustomField`, which wraps any custom input element with a
 * shared label, subtitle, and inline error message layout.
 */
export interface FormCustomFieldProps
    extends FormWrapperProps,
        BaseFormElementProps {}
