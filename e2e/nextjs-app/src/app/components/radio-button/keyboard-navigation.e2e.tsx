"use client";

import { RadioButton } from "@lifesg/react-design-system/radio-button";
import { useState } from "react";

export default function Story() {
    const [checked, setChecked] = useState(false);
    const [changeCount, setChangeCount] = useState(0);

    return (
        <div className="story-column-container">
            <button data-testid="focus-start">Focus start</button>

            <RadioButton
                checked={checked}
                onChange={() => {
                    setChecked(true);
                    setChangeCount((value) => value + 1);
                }}
            />

            <span data-testid="change-count">{changeCount}</span>
        </div>
    );
}
