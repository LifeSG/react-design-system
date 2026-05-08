"use client";
import { HistogramSlider } from "@lifesg/react-design-system/histogram-slider";
import { MOCK_BINS } from "./histogram-slider-shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="histogram-slider-default"
            />
            <HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                disabled
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="histogram-slider-disabled"
            />
            <HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                readOnly
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="histogram-slider-readonly"
            />
        </div>
    );
}
