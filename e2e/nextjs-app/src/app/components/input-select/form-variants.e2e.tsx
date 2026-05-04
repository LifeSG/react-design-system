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
                data-testid="input-select-default"
                label="Default"
                options={OPTIONS}
                enableSearch
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <Form.Select
                data-testid="input-select-selected"
                label="Selected"
                options={OPTIONS}
                selectedOption={OPTIONS[1]}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <Form.Select
                data-testid="input-select-readonly"
                label="Read only"
                options={OPTIONS}
                readOnly
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <Form.Select
                data-testid="input-select-disabled"
                label="Disabled"
                options={OPTIONS}
                disabled
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
