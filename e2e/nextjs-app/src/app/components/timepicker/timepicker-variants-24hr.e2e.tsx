"use client";

import { Timepicker } from "@lifesg/react-design-system/timepicker";

export default function Story() {
    return (
        <div className="story-column-container">
            <div>
                <Timepicker data-testid="timepicker-default" />
            </div>
            <div>
                <Timepicker data-testid="timepicker-disabled" disabled />
            </div>
            <div>
                <Timepicker
                    data-testid="timepicker-readonly"
                    value="14:30"
                    readOnly
                />
            </div>
            <div>
                <Timepicker data-testid="timepicker-error" error />
            </div>
        </div>
    );
}
