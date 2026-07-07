"use client";

import { Calendar } from "@lifesg/react-design-system/calendar";

export default function Story() {
    return (
        <Calendar
            data-testid="calendar"
            minDate="2026-04-10"
            maxDate="2026-04-20"
        />
    );
}
