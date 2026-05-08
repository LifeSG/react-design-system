"use client";
import { DateNavigator } from "@lifesg/react-design-system/date-navigator";

export default function Story() {
    const date = "2026-04-08";

    return (
        <div className="story-column-container">
            <DateNavigator
                data-testid="date-navigator-default"
                selectedDate={date}
                onLeftArrowClick={() => {}}
                onRightArrowClick={() => {}}
            />
            <DateNavigator
                data-testid="date-navigator-short-form"
                selectedDate={date}
                showDateAsShortForm
                onLeftArrowClick={() => {}}
                onRightArrowClick={() => {}}
            />
            <DateNavigator
                data-testid="date-navigator-show-today"
                selectedDate={date}
                showCurrentDateAsToday
                onLeftArrowClick={() => {}}
                onRightArrowClick={() => {}}
            />
        </div>
    );
}
