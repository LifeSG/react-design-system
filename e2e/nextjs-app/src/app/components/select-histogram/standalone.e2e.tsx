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
                    ariaLabels: ["Minimum value", "Maximum value"],
                }}
                placeholder="Select range"
            />
            <SelectHistogram
                data-testid="select-histogram-selected"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                    ariaLabels: ["Minimum value", "Maximum value"],
                }}
                value={[2, 4]}
            />
            <SelectHistogram
                data-testid="select-histogram-disabled"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                    ariaLabels: ["Minimum value", "Maximum value"],
                }}
                value={[2, 4]}
                disabled
            />
            <SelectHistogram
                data-testid="select-histogram-readonly"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                    ariaLabels: ["Minimum value", "Maximum value"],
                }}
                value={[2, 4]}
                readOnly
            />
            <SelectHistogram
                data-testid="select-histogram-error"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                    ariaLabels: ["Minimum value", "Maximum value"],
                }}
                error
            />
            <SelectHistogram
                data-testid="select-histogram-custom-label"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                    ariaLabels: ["Minimum value", "Maximum value"],
                }}
                value={[2, 4]}
                rangeLabelPrefix="$"
                rangeLabelSuffix="k"
            />
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
