"use client";
import { Checkbox } from "@lifesg/react-design-system/checkbox";
import { useState } from "react";

export default function Story() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="story-column-container">
            <button data-testid="focus-start">Focus start</button>

            <Checkbox
                checked={checked}
                onChange={() => setChecked((c) => !c)}
            />

            <span data-testid="checked-state">
                {checked ? "true" : "false"}
            </span>
        </div>
    );
}
