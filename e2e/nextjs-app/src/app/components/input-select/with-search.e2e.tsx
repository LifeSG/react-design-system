"use client";

import { Form } from "@lifesg/react-design-system/form";
import { InputSelect } from "@lifesg/react-design-system";

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
        </div>
    );
}
