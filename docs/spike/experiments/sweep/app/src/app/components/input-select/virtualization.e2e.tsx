"use client";

import { Form } from "@lifesg/react-design-system/form";

const LARGE_OPTIONS = [...Array(50_000)].map((_, i) => ({
    value: i + 1,
    label: `Option ${i + 1}`,
}));

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Select
                data-testid="input-select-virtualization"
                label="Virtualization"
                options={LARGE_OPTIONS}
                enableSearch
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
