"use client";
import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";
import { MOCK_BINS } from "./select-histogram.shared";

export default function Story() {
    return (
        <Layout.Content
            data-testid="select-histogram-grid-layout"
            type="grid"
            className="story-background"
        >
            <Form.SelectHistogram
                data-testid="select-histogram-grid-short"
                label="A shorter form input"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                    ariaLabels: ["Minimum value", "Maximum value"],
                }}
                xxsCols={[1, 5]}
            />
            <Form.SelectHistogram
                data-testid="select-histogram-grid-long"
                label="A longer form input"
                histogramSlider={{
                    bins: MOCK_BINS,
                    interval: 1,
                    ariaLabels: ["Minimum value", "Maximum value"],
                }}
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
