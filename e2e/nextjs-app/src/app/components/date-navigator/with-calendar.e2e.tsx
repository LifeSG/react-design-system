"use client";
import { DateNavigator } from "@lifesg/react-design-system/date-navigator";
import { useState } from "react";

export default function Story() {
    const [date, setDate] = useState("2026-04-08");

    return (
        <DateNavigator
            data-testid="date-navigator-with-calendar"
            selectedDate={date}
            onLeftArrowClick={(d) =>
                setDate(
                    new Date(new Date(d).setDate(new Date(d).getDate() - 1))
                        .toISOString()
                        .slice(0, 10)
                )
            }
            onRightArrowClick={(d) =>
                setDate(
                    new Date(new Date(d).setDate(new Date(d).getDate() + 1))
                        .toISOString()
                        .slice(0, 10)
                )
            }
            onCalendarDateSelect={setDate}
        />
    );
}
