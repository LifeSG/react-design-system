import type { InputSliderProps } from "./types";
/**
 * A single-thumb slider for selecting one numeric value within a range.
 *
 * Use `InputSlider` when a user needs to pick a single point on a continuous
 * scale without a precise value. For selecting a range between two values, use `InputRangeSlider` instead.
 * @keywords field, form, input, range, slider
 */
export declare const InputSlider: ({ value, ariaLabel, onChange, onChangeEnd, ...otherProps }: InputSliderProps) => import("react/jsx-runtime").JSX.Element;
