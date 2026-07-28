import type { DateInputProps } from "../../date-input/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.DateInput`, combining date input props with the shared form
 * field layout.
 */
export interface FormDateInputProps
    extends DateInputProps,
        BaseFormElementProps {}
