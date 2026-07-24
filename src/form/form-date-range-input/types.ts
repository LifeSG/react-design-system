import type { DateRangeInputProps } from "../../date-range-input/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.DateRangeInput`, combining date-range input props with the
 * shared form field layout.
 */
export interface FormDateRangeInputProps
    extends DateRangeInputProps,
        BaseFormElementProps {}
