"use client";
import { SelectHistogram } from "@lifesg/react-design-system/select-histogram";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <SelectHistogram
                data-testid="select-histogram-empty"
                histogramSlider={{
                    bins: [],
                    interval: 1,
                    renderEmptyView: () => (
                        <div data-testid="empty-view">No data available</div>
                    ),
                }}
            />
        </div>
    );
}
