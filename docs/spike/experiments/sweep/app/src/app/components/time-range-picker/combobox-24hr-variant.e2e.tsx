"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.TimeRangePicker
                id="time-range-picker-combobox-24hr"
                data-testid="time-range-picker-combobox-24hr"
                label="24hour combobox format"
                format="24hr"
                variant="combobox"
            />
        </div>
    );
}
