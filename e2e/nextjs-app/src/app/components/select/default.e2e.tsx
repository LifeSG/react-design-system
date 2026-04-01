"use client";

import { InputSelect } from "@lifesg/react-design-system/input-select";

const OPTIONS = [
    { value: "A", label: "Option A" },
    { value: "B", label: "Option B" },
    { value: "C", label: "Option C" },
    { value: "D", label: "Option D" },
];

export default function Story() {
    return (
        <InputSelect
            data-testid="select"
            options={OPTIONS}
            placeholder="Select"
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
            displayValueExtractor={(item) => item.label}
        />
    );
}
