"use client";
import { SelectHistogram } from "@lifesg/react-design-system/select-histogram";
import { useState } from "react";
import { MOCK_BINS } from "./select-histogram.shared";

export default function Story() {
    const [value, setValue] = useState<[number, number]>([2, 4]);

    return (
        <div className="story-column-container story-background">
            <button data-testid="focus-target-before">before</button>
            <SelectHistogram
                data-testid="select-histogram-interaction"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                value={value}
                onChange={(v) => setValue(v)}
            />
            <p>
                Min: <span data-testid="min-value">{value[0]}</span>
            </p>
            <p>
                Max: <span data-testid="max-value">{value[1]}</span>
            </p>
            <button data-testid="focus-target-after">after</button>
        </div>
    );
}
