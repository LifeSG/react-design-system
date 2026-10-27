"use client";
import { DateNavigator } from "@lifesg/react-design-system/date-navigator";

export default function Story() {
    const date = "2026-04-08";

    return (
        <DateNavigator
            data-testid="date-navigator-loading"
            selectedDate={date}
            loading
            onLeftArrowClick={() => {}}
            onRightArrowClick={() => {}}
            onCalendarDateSelect={() => {}}
        />
    );
}
