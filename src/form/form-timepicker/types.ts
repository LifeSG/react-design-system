import type { TimepickerProps } from "../../timepicker/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.Timepicker`, combining time picker props with the shared
 * form field layout.
 */
export interface FormTimepickerProps
    extends TimepickerProps,
        BaseFormElementProps {}
