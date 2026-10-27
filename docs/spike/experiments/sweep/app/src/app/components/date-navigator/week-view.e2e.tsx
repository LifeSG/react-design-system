"use client";
import { DateNavigator } from "@lifesg/react-design-system/date-navigator";

export default function Story() {
    const date = "2026-04-08";

    return (
        <div className="story-column-container">
            <DateNavigator
                data-testid="date-navigator-week-view"
                selectedDate={date}
                view="week"
                onLeftArrowClick={() => {}}
                onRightArrowClick={() => {}}
            />
        </div>
    );
}
