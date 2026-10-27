"use client";
import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.Slider
                label="A shorter form input"
                value={10}
                xxsCols={[1, 5]}
                data-testid="slider-grid-shorter"
            />
            <Form.Slider
                label="A longer form input"
                value={10}
                xxsCols={[1, 9]}
                data-testid="slider-grid-longer"
            />
        </Layout.Content>
    );
}
