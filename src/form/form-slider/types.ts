import type { InputSliderProps } from "../../input-slider";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.Slider`, combining single-value slider props with the shared
 * form field layout.
 */
export interface FormSliderProps
    extends InputSliderProps,
        BaseFormElementProps {}
