import type { InputRangeSliderProps } from "./types";
/**
 * A draggable track slider for selecting one or more numeric values within a
 * bounded range.
 *
 * Use `InputRangeSlider` when the selection does not need to be precise;
 * the user picks a value or a range by dragging thumb controls along a track.
 * @keywords field, form, input, range, slider
 */
export declare const InputRangeSlider: ({ id, value, min, max, step, minRange, numOfThumbs, colors, disabled, readOnly, showSliderLabels, sliderLabelPrefix, sliderLabelSuffix, showIndicatorLabel, indicatorLabelPrefix, indicatorLabelSuffix, ariaLabels, ariaDescriptions, "aria-invalid": ariaInvalid, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, renderSliderLabel, onChange, onChangeEnd, className, ...otherProps }: InputRangeSliderProps) => import("react/jsx-runtime").JSX.Element;
