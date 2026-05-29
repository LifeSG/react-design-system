"use client";
import { SelectHistogram } from "@lifesg/react-design-system/select-histogram";
import { MOCK_BINS } from "./select-histogram.shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <SelectHistogram
                data-testid="select-histogram-default"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                placeholder="Select range"
            />
            <SelectHistogram
                data-testid="select-histogram-selected"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                value={[2, 4]}
            />
            <SelectHistogram
                data-testid="select-histogram-disabled"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                value={[2, 4]}
                disabled
            />
            <SelectHistogram
                data-testid="select-histogram-readonly"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                value={[2, 4]}
                readOnly
            />
            <SelectHistogram
                data-testid="select-histogram-error"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                error
            />
        </div>
    );
}
