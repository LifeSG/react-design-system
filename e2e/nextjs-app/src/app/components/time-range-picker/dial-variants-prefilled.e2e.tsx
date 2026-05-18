"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.TimeRangePicker
                id="time-range-picker-default"
                data-testid="time-range-picker-default"
                label="Default State"
                value={{
                    start: "12:00",
                    end: "21:00",
                }}
            />

            <Form.TimeRangePicker
                id="time-range-picker-disabled"
                data-testid="time-range-picker-disabled"
                label="Disabled State"
                disabled
                value={{
                    start: "12:00",
                    end: "21:00",
                }}
            />

            <Form.TimeRangePicker
                id="time-range-picker-readonly"
                data-testid="time-range-picker-readonly"
                label="Read-only State"
                value={{
                    start: "12:00",
                    end: "21:00",
                }}
                readOnly
            />

            <Form.TimeRangePicker
                id="time-range-picker-error"
                data-testid="time-range-picker-error"
                label="Error State"
                value={{
                    start: "12:00",
                    end: "09:00",
                }}
                errorMessage="Sample error message"
            />

            <Form.TimeRangePicker
                data-testid="time-range-picker-12hr-default"
                label="Time range picker 12hour variant"
                format="12hr"
                value={{
                    start: "12:00am",
                    end: "9:00am",
                }}
            />
        </div>
    );
}
