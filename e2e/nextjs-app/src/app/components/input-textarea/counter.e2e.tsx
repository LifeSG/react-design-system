"use client";

import { Form } from "@lifesg/react-design-system/form";
import { useState } from "react";

export default function Story() {
    const [value, setValue] = useState<string>("");

    return (
        <>
            <Form.Textarea
                label="Textarea with counter"
                maxLength={6}
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
            <Form.Textarea
                label="Textarea with counter & error"
                maxLength={6}
                errorMessage="Counter validation error"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
        </>
    );
}
