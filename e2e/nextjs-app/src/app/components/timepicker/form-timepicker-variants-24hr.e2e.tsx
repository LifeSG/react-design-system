"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Timepicker
                data-testid="form-timepicker-default"
                label="Default State"
            />

            <Form.Timepicker
                data-testid="form-timepicker-disabled"
                label="Disabled State"
                disabled
            />

            <Form.Timepicker
                data-testid="form-timepicker-readonly"
                label="Read-only State"
                value="14:30"
                readOnly
            />

            <Form.Timepicker
                data-testid="form-timepicker-error"
                label="Error State"
                errorMessage="Time input required"
            />
        </div>
    );
}
