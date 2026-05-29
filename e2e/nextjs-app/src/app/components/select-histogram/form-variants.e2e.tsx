"use client";
import { Form } from "@lifesg/react-design-system/form";
import { MOCK_BINS } from "./select-histogram.shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.SelectHistogram
                data-testid="select-histogram-form-default"
                label="Default"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                placeholder="Select range"
            />
            <Form.SelectHistogram
                data-testid="select-histogram-form-disabled"
                label="Disabled"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                disabled
            />
            <Form.SelectHistogram
                data-testid="select-histogram-form-readonly"
                label="Readonly"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                readOnly
            />
            <Form.SelectHistogram
                data-testid="select-histogram-form-error"
                label="Error"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                }}
                errorMessage="Please select a range"
            />
        </div>
    );
}
