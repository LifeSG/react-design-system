"use client";

import { DateInput } from "@lifesg/react-design-system/date-input";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <DateInput data-testid="date-input-default" />
            <DateInput data-testid="date-input-disabled" disabled />
            <DateInput data-testid="date-input-readonly" readOnly />
            <DateInput data-testid="date-input-error" error />
        </div>
    );
}
