"use client";

import { useState } from "react";
import { Input } from "@lifesg/react-design-system/input";

export default function Story() {
    const [spacing4Value, setSpacing4Value] = useState("");

    return (
        <div className="story-column-container">
            <Input
                data-testid="input-spacing"
                type="tel"
                spacing={4}
                placeholder="Enter phone number"
                value={spacing4Value}
                onChange={(e) => setSpacing4Value(e.target.value)}
            />
        </div>
    );
}
