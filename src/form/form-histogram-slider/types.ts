import type { HistogramSliderProps } from "../../histogram-slider";
import type { BaseFormElementProps } from "../types";

/**
 * Props for `Form.HistogramSlider`, combining histogram slider props with the
 * shared form field layout.
 */
export interface FormHistogramSliderProps
    extends HistogramSliderProps,
        BaseFormElementProps {}
