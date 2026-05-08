"use client";
import { HistogramSlider } from "@lifesg/react-design-system/histogram-slider";
import { useState } from "react";
import { MOCK_BINS } from "./histogram-slider-shared";

export default function Story() {
    const [value, setValue] = useState<[number, number]>([2, 4]);

    return (
        <div className="story-column-container">
            <button data-testid="focus-target-before">before</button>
            <HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                value={value}
                onChange={(v) => setValue(v)}
                showRangeLabels
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="histogram-slider-interaction"
            />
            <p>
                Min:{" "}
                <span data-testid="histogram-slider-min-value">{value[0]}</span>
            </p>
            <p>
                Max:{" "}
                <span data-testid="histogram-slider-max-value">{value[1]}</span>
            </p>
            <button data-testid="focus-target-after">after</button>
        </div>
    );
}

const MOCK_BINS = [
    { count: 2, minValue: 1 },
    { count: 5, minValue: 2 },
    { count: 8, minValue: 3 },
    { count: 3, minValue: 4 },
    { count: 1, minValue: 5 },
];
