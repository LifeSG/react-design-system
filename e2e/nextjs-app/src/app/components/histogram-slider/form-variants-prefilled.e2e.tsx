"use client";
import { Form } from "@lifesg/react-design-system/form";
import { MOCK_BINS } from "./histogram-slider-shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                value={[2, 4]}
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="form-histogram-slider-default"
            />
            <Form.HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                value={[2, 4]}
                disabled
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="form-histogram-slider-disabled"
            />
            <Form.HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                value={[2, 4]}
                readOnly
                label={{
                    children: "Readonly",
                    subtitle: "This is the subtitle",
                }}
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="form-histogram-slider-readonly"
            />
            <Form.HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                value={[2, 4]}
                errorMessage="This is the error state"
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                ariaLabels={["Minimum value", "Maximum value"]}
                data-testid="form-histogram-slider-error"
            />
        </div>
    );
}
