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
        <div className="story-column-container">
            <InputSelect
                data-testid="input-select-default"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <InputSelect
                data-testid="input-select-selected"
                options={OPTIONS}
                selectedOption={OPTIONS[1]}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <InputSelect
                data-testid="input-select-readonly"
                options={OPTIONS}
                readOnly
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <InputSelect
                data-testid="input-select-disabled"
                options={OPTIONS}
                disabled
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <InputSelect
                data-testid="input-select-error"
                error
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
