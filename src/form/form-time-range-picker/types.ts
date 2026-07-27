import type { TimeRangePickerProps } from "../../time-range-picker/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.TimeRangePicker`, combining time-range picker props with the
 * shared form field layout.
 */
export interface FormTimeRangePickerProps
    extends TimeRangePickerProps,
        BaseFormElementProps {}
