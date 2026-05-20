"use client";

import { DateRangeInput } from "@lifesg/react-design-system/date-range-input";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <DateRangeInput data-testid="date-range-input-default" />
            <DateRangeInput data-testid="date-range-input-disabled" disabled />
            <DateRangeInput data-testid="date-range-input-readonly" readOnly />
            <DateRangeInput data-testid="date-range-input-error" error />
        </div>
    );
}
