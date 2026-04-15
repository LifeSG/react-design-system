"use client";
import { Checkbox } from "@lifesg/react-design-system/checkbox";
import { useState } from "react";

export default function Story() {
    const [changeCount, setChangeCount] = useState(0);

    return (
        <div className="story-column-container">
            <button data-testid="focus-start">Focus start</button>

            <Checkbox
                data-testid="checkbox-input"
                disabled
                focusableWhenDisabled
                onChange={() => setChangeCount((c) => c + 1)}
            />

            <span data-testid="change-count">{changeCount}</span>
        </div>
    );
}
