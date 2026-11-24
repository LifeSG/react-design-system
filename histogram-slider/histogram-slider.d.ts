import type { HistogramSliderProps } from "./types";
/**
 * A histogram with an overlaid two-thumb range slider for numeric filtering.
 *
 * Use `HistogramSlider` to let users narrow a dataset by selecting a numeric
 * range while seeing how values are distributed across bins.
 * @keywords chart, distribution, field, form, input, range, visualization
 */
export declare const HistogramSlider: ({ bins, interval, disabled, readOnly, value, showRangeLabels, rangeLabelPrefix, rangeLabelSuffix, ariaLabels, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onChange, onChangeEnd, renderEmptyView, renderRangeLabel, className, ...otherProps }: HistogramSliderProps) => import("react/jsx-runtime").JSX.Element;
