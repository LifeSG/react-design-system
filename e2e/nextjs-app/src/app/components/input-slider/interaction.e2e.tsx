"use client";
import { InputSlider } from "@lifesg/react-design-system/input-slider";
import { useState } from "react";

export default function Story() {
    const [value, setValue] = useState(0);

    return (
        <div className="story-column-container">
            <button data-testid="focus-target-before">before</button>
            <InputSlider
                value={value}
                onChange={setValue}
                min={0}
                max={10}
                step={1}
                data-testid="slider-interaction"
            />
            <p>
                Value: <span data-testid="slider-value">{value}</span>
            </p>
            <button data-testid="focus-target-after">after</button>
        </div>
    );
}
