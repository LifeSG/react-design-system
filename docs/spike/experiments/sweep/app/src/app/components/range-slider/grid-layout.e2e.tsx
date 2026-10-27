"use client";
import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.RangeSlider
                label="A shorter form input"
                value={[25, 50]}
                xxsCols={[1, 5]}
                data-testid="range-slider-grid-shorter"
            />
            <Form.RangeSlider
                label="A longer form input"
                value={[25, 50]}
                xxsCols={[1, 9]}
                data-testid="range-slider-grid-longer"
            />
        </Layout.Content>
    );
}
