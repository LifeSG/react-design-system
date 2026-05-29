"use client";
import { SelectHistogram } from "@lifesg/react-design-system/select-histogram";
import { MOCK_BINS } from "./select-histogram.shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <SelectHistogram
                data-testid="select-histogram-custom-label"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                value={[2, 4]}
                rangeLabelPrefix="$"
                rangeLabelSuffix="k"
            />
        </div>
    );
}
