import type { InputRangeSliderProps } from "../../input-range-slider/types";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.RangeSlider`, combining range slider props with the shared
 * form field layout.
 */
export interface FormRangeSliderProps
    extends InputRangeSliderProps,
        BaseFormElementProps {}
