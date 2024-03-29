import { useEffect, useState } from "react";
import { InputRangeSlider } from "../input-range-slider";
import { InputSliderProps } from "./types";

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
