"use client";
import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Layout.Content type="grid">
                <Form.Timepicker
                    data-testid="form-timepicker-short"
                    label="Short form input"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                    format="24hr"
                />
                <Form.Timepicker
                    data-testid="form-timepicker-long"
                    label="Long form input"
                    xxsCols={[1, 9]}
                    format="24hr"
                />
            </Layout.Content>
        </div>
    );
}
