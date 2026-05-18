"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.TimeRangePicker
                id="time-range-picker-combobox-interval"
                data-testid="time-range-picker-combobox-interval"
                label="1 hour interval between options"
                variant="combobox"
                interval={60}
            />

            <Form.TimeRangePicker
                id="time-range-picker-combobox-24hr"
                data-testid="time-range-picker-combobox-24hr"
                label="24hour combobox format"
                variant="combobox"
                format="24hr"
            />

            <Form.TimeRangePicker
                id="time-range-picker-combobox-limits"
                data-testid="time-range-picker-combobox-limits"
                label="Start and end option limits (12pm - 4pm)"
                variant="combobox"
                startLimit="12:00pm"
                endLimit="4:00pm"
                interval={60}
            />

            <Form.TimeRangePicker
                id="time-range-picker-combobox-validation"
                data-testid="time-range-picker-combobox-validation"
                label="Time range error validation"
                variant="combobox"
                value={{
                    end: "1:00pm",
                    start: "2:00pm",
                }}
            />
        </div>
    );
}
