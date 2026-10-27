"use client";

import { Input } from "@lifesg/react-design-system/input";
import { useState } from "react";

export default function Story() {
    const [value, setValue] = useState("");

    return (
        <div className="story-column-container">
            <Input
                data-testid="input-spacing"
                type="tel"
                spacing={4}
                placeholder="Enter phone number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}
