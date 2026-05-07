"use client";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.Slider
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
                data-testid="slider-default"
            />
            <Form.Slider
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                disabled
                data-testid="slider-disabled"
            />
            <Form.Slider
                label={{
                    children: "Read-only",
                    subtitle: "This is the subtitle",
                }}
                readOnly
                data-testid="slider-readonly"
            />
            <Form.Slider
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                errorMessage="Required"
                data-testid="slider-error"
            />
        </div>
    );
}
