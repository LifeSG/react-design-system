"use client";

import { DateRangeInput } from "@lifesg/react-design-system/date-range-input";

export default function Story() {
    return (
        <div className="story-column-container">
            <DateRangeInput
                data-testid="date-range-input-default"
                value="2026-04-10"
                valueEnd="2026-04-16"
            />
            <DateRangeInput
                data-testid="date-range-input-disabled"
                disabled
                value="2026-04-10"
                valueEnd="2026-04-16"
            />
            <DateRangeInput
                data-testid="date-range-input-readonly"
                readOnly
                value="2026-04-10"
                valueEnd="2026-04-16"
            />
            <DateRangeInput
                data-testid="date-range-input-error"
                error
                value="2026-04-10"
                valueEnd="2026-04-16"
            />
        </div>
    );
}
