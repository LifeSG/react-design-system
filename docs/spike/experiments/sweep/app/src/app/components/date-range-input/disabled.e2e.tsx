"use client";

import { DateRangeInput } from "@lifesg/react-design-system/date-range-input";

export default function Story() {
    return (
        <div className="story-background">
            <DateRangeInput
                data-testid="date-range-input"
                disabled
                value="2026-04-08"
                valueEnd="2026-04-15"
            />
        </div>
    );
}
