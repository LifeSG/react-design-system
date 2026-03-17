"use client";

import { CountdownTimer } from "@lifesg/react-design-system/countdown-timer";

export default function Story() {
    return (
        <div data-testid="countdown-timer-story">
            <CountdownTimer
                show
                fixed={false}
                timer={5}
                notifyTimer={3}
                reminderInterval={1}
            />
        </div>
    );
}
