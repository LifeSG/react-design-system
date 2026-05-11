"use client";
import { HistogramSlider } from "@lifesg/react-design-system/histogram-slider";

export default function Story() {
    return (
        <div className="story-column-container">
            <HistogramSlider
                bins={MOCK_EMPTY_BINS}
                interval={1}
                renderEmptyView={() => (
                    <div data-testid="empty-view">No data available</div>
                )}
                data-testid="histogram-slider-empty"
            />
        </div>
    );
}

const MOCK_EMPTY_BINS = [
    { count: 0, minValue: 1 },
    { count: 0, minValue: 2 },
    { count: 0, minValue: 3 },
];
