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
                data-testid="input-select-small-default"
                label="Small default"
                options={OPTIONS}
                variant="small"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <Form.Select
                data-testid="input-select-small-search"
                label="Small searchable"
                options={OPTIONS}
                variant="small"
                enableSearch
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
