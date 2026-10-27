"use client";

import { TimeRangePicker } from "@lifesg/react-design-system/time-range-picker";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <TimeRangePicker
                data-testid="time-range-picker-standalone-default"
                variant="combobox"
            />

            <TimeRangePicker
                data-testid="time-range-picker-standalone-disabled"
                variant="combobox"
                disabled
            />

            <TimeRangePicker
                data-testid="time-range-picker-standalone-readonly"
                variant="combobox"
                readOnly
            />

            <TimeRangePicker
                data-testid="time-range-picker-standalone-error"
                variant="combobox"
                error
            />
        </div>
    );
}
