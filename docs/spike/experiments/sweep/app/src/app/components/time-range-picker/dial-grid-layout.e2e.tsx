"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.TimeRangePicker
                id="time-range-picker-short"
                data-testid="time-range-picker-short"
                label="Short form input"
                xxsCols={[1, 5]}
            />
            <Form.TimeRangePicker
                id="time-range-picker-long"
                data-testid="time-range-picker-long"
                label="Long form input"
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
