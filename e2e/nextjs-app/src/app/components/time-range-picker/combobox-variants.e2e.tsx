"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.TimeRangePicker
                id="time-range-picker-combobox-default"
                data-testid="time-range-picker-combobox-default"
                label={{
                    children: "Default state",
                    subtitle: "This is the subtitle",
                }}
                variant="combobox"
            />

            <Form.TimeRangePicker
                id="time-range-picker-combobox-disabled"
                data-testid="time-range-picker-combobox-disabled"
                label={{
                    children: "Disabled State",
                    subtitle: "This is the subtitle",
                }}
                variant="combobox"
                disabled
            />

            <Form.TimeRangePicker
                id="time-range-picker-combobox-readonly"
                data-testid="time-range-picker-combobox-readonly"
                label={{
                    children: "Read-only State",
                    subtitle: "This is the subtitle",
                }}
                variant="combobox"
                readOnly
            />

            <Form.TimeRangePicker
                id="time-range-picker-combobox-error"
                data-testid="time-range-picker-combobox-error"
                label={{
                    children: "Error State",
                    subtitle: "This is the subtitle",
                }}
                variant="combobox"
                errorMessage="Sample error message"
            />
        </div>
    );
}
