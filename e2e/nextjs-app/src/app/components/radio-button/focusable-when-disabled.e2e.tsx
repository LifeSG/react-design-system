"use client";

import { RadioButton } from "@lifesg/react-design-system/radio-button";
import { useState } from "react";

export default function Story() {
    const [changeCount, setChangeCount] = useState(0);

    return (
        <div className="story-column-container">
            <button data-testid="focus-start">Focus start</button>

            <RadioButton
                disabled
                focusableWhenDisabled
                checked={false}
                onChange={() => setChangeCount((value) => value + 1)}
            />

            <span data-testid="change-count">{changeCount}</span>
        </div>
    );
}
