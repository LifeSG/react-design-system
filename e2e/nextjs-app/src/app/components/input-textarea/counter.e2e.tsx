"use client";

import { Textarea } from "@lifesg/react-design-system/input-textarea";
import { useState } from "react";

export default function Story() {
    const [value, setValue] = useState<string>("");

    return (
        <Textarea
            data-testid="textarea-counter"
            maxLength={6}
            value={value}
            onChange={(event) => {
                setValue(event.target.value);
            }}
        />
    );
}
