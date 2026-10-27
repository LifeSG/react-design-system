"use client";

import { TimeRangePicker } from "@lifesg/react-design-system/time-range-picker";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <TimeRangePicker data-testid="time-range-picker-standalone-default" />

            <TimeRangePicker
                data-testid="time-range-picker-standalone-disabled"
                disabled
            />

            <TimeRangePicker
                data-testid="time-range-picker-standalone-readonly"
                readOnly
            />

            <TimeRangePicker
                data-testid="time-range-picker-standalone-error"
                error
            />
        </div>
    );
}
