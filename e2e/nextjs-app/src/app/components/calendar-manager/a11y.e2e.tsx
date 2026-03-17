"use client";

import { CalendarManager } from "@lifesg/react-design-system/shared/internal-calendar/calendar-manager";

export default function Story() {
    return (
        <CalendarManager initialCalendarDate="2026-03-12">
            <div>Default view content</div>
        </CalendarManager>
    );
}
