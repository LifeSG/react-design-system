"use client";

import { Calendar } from "@lifesg/react-design-system/calendar";
import { useState } from "react";

export default function Story() {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    return (
        <div className="story-column-container">
            <Calendar
                data-testid="calendar"
                variant="multi"
                values={selectedValues}
                onChange={setSelectedValues}
            />
            <p data-testid="selected-values">
                {selectedValues.length ? selectedValues.join(",") : "none"}
            </p>
        </div>
    );
}
