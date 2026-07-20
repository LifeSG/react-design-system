import type { BaseSliderProps } from "../input-range-slider/types";

/**
 * Props for the `InputSlider` component.
 */
export interface InputSliderProps extends BaseSliderProps {
    /**
     * The controlled value of the thumb.
     *
     * @default 0
     */
    value?: number | undefined;
    /**
     * Accessible label for the thumb.
     */
    ariaLabel?: string | undefined;
    /**
     * Called on every selection change.
     *
     * @param value The updated thumb value.
     */
    onChange?: ((value: number) => void) | undefined;
    /**
     * Called when a thumb is released after selection is complete.
     *
     * @param value The final thumb value.
     */
    onChangeEnd?: ((value: number) => void) | undefined;
}
