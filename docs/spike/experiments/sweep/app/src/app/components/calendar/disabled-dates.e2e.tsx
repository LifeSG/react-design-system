"use client";

import { Calendar } from "@lifesg/react-design-system/calendar";

const DISABLED_DATES = ["2026-04-10", "2026-04-15", "2026-04-20"];

export default function Story() {
    return <Calendar data-testid="calendar" disabledDates={DISABLED_DATES} />;
}
