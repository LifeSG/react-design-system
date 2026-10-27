"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.DateRangeInput
                data-testid="form-date-range-input-default"
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
            />
            <Form.DateRangeInput
                data-testid="form-date-range-input-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                disabled
            />
            <Form.DateRangeInput
                data-testid="form-date-range-input-readonly"
                label={{
                    children: "Readonly",
                    subtitle: "This is the subtitle",
                }}
                readOnly
            />
            <Form.DateRangeInput
                data-testid="form-date-range-input-error"
                label={{ children: "Error", subtitle: "This is the subtitle" }}
                errorMessage="This field is required"
            />
        </div>
    );
}
