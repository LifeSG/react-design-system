"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Timepicker
                data-testid="form-timepicker-default"
                label="Default State"
                value="18:00"
            />

            <Form.Timepicker
                data-testid="form-timepicker-disabled"
                label="Disabled State"
                value="18:00"
                disabled
            />

            <Form.Timepicker
                data-testid="form-timepicker-readonly"
                label="Read-only State"
                value="18:00"
                readOnly
            />

            <Form.Timepicker
                data-testid="form-timepicker-error"
                label="Error State"
                value="18:00"
                errorMessage="Time input required"
            />
        </div>
    );
}
