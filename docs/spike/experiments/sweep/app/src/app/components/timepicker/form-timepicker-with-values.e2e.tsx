"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    const ID = "example-id";

    return (
        <div className="story-column-container">
            <Form.Timepicker
                data-testid="form-timepicker-default"
                label="Default State"
                value="18:00"
                id={ID}
            />

            <Form.Timepicker
                data-testid="form-timepicker-disabled"
                label="Disabled State"
                value="18:00"
                disabled
                id={ID}
            />

            <Form.Timepicker
                data-testid="form-timepicker-error"
                label="Error State"
                value="18:00"
                errorMessage="Time input required"
                id={ID}
            />
        </div>
    );
}
