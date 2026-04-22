import { BaseSliderProps } from "../input-range-slider/types";

/**
 * Props for the InputSlider component - single-thumb numeric slider.
 *
 * Renders a horizontal slider with a single thumb for selecting a numeric value
 * within a given range. Supports step intervals, track colour customisation,
 * and value labels. For a dual-thumb range slider use `InputRangeSlider`.
 *
 * @example
 * ```tsx
 * <InputSlider min={0} max={10} step={1} value={5} onChange={(v) => setValue(v)} />
 * ```
 * @keywords knob, scrubber, range input, numeric slider, single handle slider
 */
export interface InputSliderProps extends BaseSliderProps {
    /**
     * The current selected value.
     *
     * @default undefined
     */
    value?: number | undefined;
    /**
     * The accessible label for the slider thumb.
     *
     * @default undefined
     */
    ariaLabel?: string | undefined;
    /**
     * Called on every value change while the thumb is being dragged.
     *
     * @param value - The current numeric value.
     */
    onChange?: ((value: number) => void) | undefined;
    /**
     * Called once when the thumb is released after dragging completes.
     *
     * @param value - The final numeric value.
     */
    onChangeEnd?: ((value: number) => void) | undefined;
}
