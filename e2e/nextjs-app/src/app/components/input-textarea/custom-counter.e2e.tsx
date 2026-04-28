"use client";

import { Form } from "@lifesg/react-design-system/form";
import { useState } from "react";

export default function Story() {
    const [value, setValue] = useState<string>("");

    return (
        <Form.Textarea
            data-testid="textarea-custom-counter"
            label="Textarea with custom counter"
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
