"use client";

import { useState } from "react";
import { Input } from "@lifesg/react-design-system/input";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    const [spacing4Value, setSpacing4Value] = useState("");
    const [formSpacingValue, setFormSpacingValue] = useState("");

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
            <Form.Input
                data-testid="form-input-spacing"
                label="Phone number with spacing"
                type="tel"
                spacing={4}
                placeholder="Enter phone number"
                value={formSpacingValue}
                onChange={(e) => setFormSpacingValue(e.target.value)}
            />
        </div>
    );
}
