"use client";

import { Calendar } from "@lifesg/react-design-system/calendar";

export default function Story() {
    return (
        <div className="story-column-container">
            <Calendar data-testid="calendar" styleType="no-border" />
        </div>
    );
}
