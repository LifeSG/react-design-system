"use client";
import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";
import { MOCK_BINS } from "./histogram-slider-shared";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                label="Short range"
                ariaLabels={["Minimum value", "Maximum value"]}
                xxsCols={[1, 5]}
            />
            <Form.HistogramSlider
                bins={MOCK_BINS}
                interval={1}
                label="Long range"
                ariaLabels={["Minimum value", "Maximum value"]}
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
