"use client";

import { Form } from "@lifesg/react-design-system/form";

const OPTIONS = [
    { value: "A", label: "Option A", description: "Secondary label A" },
    { value: "B", label: "Option B", description: "Secondary label B" },
    { value: "C", label: "Option C", description: "Secondary label C" },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Select
                data-testid="input-select-secondary-label-default"
                label="Default variant"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => ({
                    title: item.label,
                    secondaryLabel: item.description,
                })}
                displayValueExtractor={(item) => item.label}
            />

            <Form.Select
                data-testid="input-select-secondary-label-small"
                label="Small variant"
                options={OPTIONS}
                variant="small"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => ({
                    title: item.label,
                    secondaryLabel: item.description,
                })}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
