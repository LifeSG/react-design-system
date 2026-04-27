"use client";

import { Textarea } from "@lifesg/react-design-system/input-textarea";
import { useState } from "react";

export default function Story() {
    const [value, setValue] = useState<string>("");

    return (
        <Textarea
            data-testid="textarea-custom-counter"
            maxLength={10}
            value={value}
            onChange={(event) => {
                setValue(event.target.value);
            }}
            renderCustomCounter={(maxLength, currentValueLength) => (
                <p data-testid="custom-counter-label">
                    {currentValueLength}/{maxLength}
                </p>
            )}
        />
    );
}
