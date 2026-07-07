"use client";
import { DateNavigator } from "@lifesg/react-design-system/date-navigator";

export default function Story() {
    const date = "2026-04-08";

    return (
        <div className="story-column-container">
            <DateNavigator
                data-testid="date-navigator-at-min"
                selectedDate={date}
                minDate={date}
                onLeftArrowClick={() => {}}
                onRightArrowClick={() => {}}
            />
            <DateNavigator
                data-testid="date-navigator-at-max"
                selectedDate={date}
                maxDate={date}
                onLeftArrowClick={() => {}}
                onRightArrowClick={() => {}}
            />
        </div>
    );
}
