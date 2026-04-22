import { useEffect, useState } from "react";
import { InputRangeSlider } from "../input-range-slider";
import { InputSliderProps } from "./types";

/**
 * Single-thumb numeric slider.
 *
 * Renders a horizontal slider with a single thumb for selecting a numeric value
 * within a given range. Supports step intervals, track colour customisation,
 * and value labels. For a dual-thumb range slider use `InputRangeSlider`.
 *
 * @example
 * ```tsx
 * <InputSlider min={0} max={10} step={1} value={5} onChange={(v) => setValue(v)} />
 * ```
 */
export const InputSlider = ({
    value,
    ariaLabel,
    onChange,
    onChangeEnd,
    ...otherProps
}: InputSliderProps) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const [selection, setSelection] = useState<number[]>(initialiseSelection());

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (value !== selection[0]) {
            setSelection(initialiseSelection());
        }
    }, [value]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleChange = (value: number[]) => {
        const [newVal] = value;
        setSelection([newVal]);
        onChange?.(newVal);
    };

    const handleChangeEnd = (value: number[]) => {
        const [newVal] = value;
        setSelection([newVal]);
        onChangeEnd?.(newVal);
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    function initialiseSelection() {
        return value != undefined ? [value] : [0];
    }

    return (
        <InputRangeSlider
            {...otherProps}
            value={selection}
            numOfThumbs={1}
            onChange={handleChange}
            onChangeEnd={handleChangeEnd}
            ariaLabels={ariaLabel ? [ariaLabel] : undefined}
        />
    );
};
