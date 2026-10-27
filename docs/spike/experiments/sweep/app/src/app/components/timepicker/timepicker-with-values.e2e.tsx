"use client";

import { Timepicker } from "@lifesg/react-design-system/timepicker";

export default function Story() {
    return (
        <div className="story-column-container">
            <div>
                <Timepicker data-testid="timepicker-default" value="18:00" />
            </div>
            <div>
                <Timepicker
                    data-testid="timepicker-disabled"
                    value="18:00"
                    disabled
                />
            </div>
            <div>
                <Timepicker
                    data-testid="timepicker-readonly"
                    value="18:00"
                    readOnly
                />
            </div>
            <div>
                <Timepicker
                    data-testid="timepicker-error"
                    value="18:00"
                    error
                />
            </div>
        </div>
    );
}
