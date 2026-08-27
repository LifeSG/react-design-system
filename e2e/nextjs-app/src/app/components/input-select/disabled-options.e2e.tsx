"use client";

import { Form } from "@lifesg/react-design-system/form";

const OPTIONS = [
    { value: "A", label: "Option A" },
    { value: "B", label: "Option B" },
    { value: "C", label: "Option C" },
    { value: "D", label: "Option D" },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Select
                data-testid="input-select-disabled-options"
                label="Disabled options"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                isOptionDisabled={(item) =>
                    item.value === "B" || item.value === "C"
                }
            />
        </div>
    );
}
