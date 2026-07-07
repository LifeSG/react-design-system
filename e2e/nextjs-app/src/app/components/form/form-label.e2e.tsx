"use client";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.Label data-testid="label-basic">Basic label</Form.Label>

            <Form.Label
                data-testid="label-subtitle"
                subtitle="This is a label subtitle"
            >
                Label with subtitle
            </Form.Label>

            <Form.Label
                data-testid="label-addon"
                addon={{
                    type: "popover",
                    content: (
                        <div data-testid="label-addon-popover-content">
                            This is additional information about the field.
                        </div>
                    ),
                }}
            >
                Label with popover
            </Form.Label>
        </div>
    );
}
