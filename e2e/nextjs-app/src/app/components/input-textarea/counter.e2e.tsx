"use client";

import { Form } from "@lifesg/react-design-system/form";
import { useState } from "react";

export default function Story() {
    const [value, setValue] = useState<string>("");

    return (
        <Form.Textarea
            data-testid="textarea-counter"
            label="Textarea with counter"
            maxLength={6}
            value={value}
            onChange={(event) => {
                setValue(event.target.value);
            }}
        />
    );
}
