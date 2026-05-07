"use client";
import { HistogramSlider } from "@lifesg/react-design-system/histogram-slider";

export default function Story() {
    return (
        <div className="story-column-container">
            <HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                value={[2, 4]}
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="histogram-slider-default"
            />
            <HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                value={[2, 4]}
                disabled
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="histogram-slider-disabled"
            />
            <HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                value={[2, 4]}
                readOnly
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="histogram-slider-readonly"
            />
            <HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                value={[2, 4]}
                showRangeLabels
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="histogram-slider-range-labels"
            />
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
