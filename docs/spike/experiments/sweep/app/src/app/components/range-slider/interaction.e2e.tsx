"use client";
import { InputRangeSlider } from "@lifesg/react-design-system/input-range-slider";
import { useState } from "react";

export default function Story() {
    const [value, setValue] = useState<[number, number]>([0, 10]);
    const handleChange = (value: number[]) => {
        setValue(value as [number, number]);
    };

    return (
        <div className="story-column-container">
            <button data-testid="focus-target-before">before</button>
            <InputRangeSlider
                value={value}
                onChange={handleChange}
                min={0}
                max={10}
                step={1}
                minRange={3}
                data-testid="range-slider-interaction"
            />
            <p>
                Min value:{" "}
                <span data-testid="range-slider-min-value">{value[0]}</span>
            </p>
            <p>
                Max value:{" "}
                <span data-testid="range-slider-max-value">{value[1]}</span>
            </p>
            <button data-testid="focus-target-after">after</button>
        </div>
    );
}
