import type { SelectHistogramProps } from "./types";
/**
 * A form input that displays the selected range and reveals a histogram slider in a dropdown.
 *
 * Use `SelectHistogram` when users need to select a numeric range against a data distribution.
 * @keywords bins, chart, distribution, field, form, input, range, visualization
 */
export declare const SelectHistogram: ({ alignment, className, disabled, dropdownZIndex, error, histogramSlider, id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, onBlur, onChange, onChangeEnd, optionTruncationType, placeholder, rangeLabelPrefix, rangeLabelSuffix, readOnly, renderRangeLabel, value, dropdownRootNode, ...otherProps }: SelectHistogramProps) => JSX.Element;
