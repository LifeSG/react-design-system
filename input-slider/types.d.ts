import { BaseSliderProps } from "../input-range-slider/types";
export interface InputSliderProps extends BaseSliderProps {
    value?: number | undefined;
    ariaLabel?: string | undefined;
    /** Called on every selection change */
    onChange?: ((value: number) => void) | undefined;
    /** Called when the thumb is released after selection is complete */
    onChangeEnd?: ((value: number) => void) | undefined;
}
