"use client";

import { Timepicker } from "@lifesg/react-design-system/timepicker";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container">
            <Timepicker
                data-testid="timepicker-12hr-default"
                format="12hr"
                value="18:00"
                readOnly
            />
            <Form.Timepicker
                data-testid="form-timepicker-12hr-default"
                label="12hr Default"
                format="12hr"
                value="18:00"
                readOnly
                id="example-id"
            />
        </div>
    );
}
