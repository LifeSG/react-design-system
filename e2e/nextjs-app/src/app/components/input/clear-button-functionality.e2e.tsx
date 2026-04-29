"use client";

import { useState } from "react";
import { Input } from "@lifesg/react-design-system/input";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    const [standaloneValue, setStandaloneValue] = useState("");
    const [formValue, setFormValue] = useState("");

    return (
        <div className="story-column-container">
            <Input
                data-testid="input-clear-standalone"
                value={standaloneValue}
                onChange={(e) => setStandaloneValue(e.target.value)}
                allowClear
            />
            <Form.Input
                data-testid="form-input-clear"
                label="Form input with clear button"
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                allowClear
            />
        </div>
    );
}
