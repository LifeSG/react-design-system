import { BaseSliderProps } from "../input-range-slider/types";
export interface InputSliderProps extends BaseSliderProps {
    value?: number | undefined;
    ariaLabel?: string | undefined;
    onChange?: ((value: number) => void) | undefined;
}
