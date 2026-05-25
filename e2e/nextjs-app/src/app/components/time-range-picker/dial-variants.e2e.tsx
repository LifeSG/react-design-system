"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.TimeRangePicker
                id="time-range-picker-default"
                data-testid="time-range-picker-default"
                label={{
                    children: "Default state",
                    subtitle: "This is the subtitle",
                }}
            />

            <Form.TimeRangePicker
                id="time-range-picker-disabled"
                data-testid="time-range-picker-disabled"
                label={{
                    children: "Disabled State",
                    subtitle: "This is the subtitle",
                }}
                disabled
            />

            <Form.TimeRangePicker
                id="time-range-picker-readonly"
                data-testid="time-range-picker-readonly"
                label={{
                    children: "Read-only State",
                    subtitle: "This is the subtitle",
                }}
                readOnly
            />

            <Form.TimeRangePicker
                id="time-range-picker-error"
                data-testid="time-range-picker-error"
                label={{
                    children: "Error State",
                    subtitle: "This is the subtitle",
                }}
                errorMessage="Sample error message"
            />

            <Form.TimeRangePicker
                data-testid="time-range-picker-12hr-default"
                label={{
                    children: "Time range picker 12hour variant",
                    subtitle: "This is the subtitle",
                }}
                format="12hr"
            />
        </div>
    );
}
