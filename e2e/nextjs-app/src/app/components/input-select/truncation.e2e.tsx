"use client";

import { Form } from "@lifesg/react-design-system/form";

const LONG_OPTIONS = ["fringilla urna porttitor rhoncus ".repeat(10)];

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Select
                data-testid="input-select-truncation-middle"
                label="Truncation middle"
                options={LONG_OPTIONS}
                selectedOption={LONG_OPTIONS[0]}
                optionTruncationType="middle"
            />

            <Form.Select
                data-testid="input-select-truncation-end"
                label="Truncation end"
                options={LONG_OPTIONS}
                selectedOption={LONG_OPTIONS[0]}
                optionTruncationType="end"
            />
        </div>
    );
}
