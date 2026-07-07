"use client";

import { Form } from "@lifesg/react-design-system/form";

type Option = { value: string; label: string };

const SELECTED_OPTION: Option = { value: "finland", label: "Finland" };

const MOCK_OPTIONS: Option[] = [
    { value: "finland", label: "Finland" },
    { value: "netherlands", label: "Netherlands" },
    { value: "ireland", label: "Republic of Ireland" },
    { value: "iceland", label: "Iceland" },
    { value: "new-zealand", label: "New Zealand" },
    { value: "switzerland", label: "Switzerland" },
];

const mockFetch = async (input: string): Promise<Option[]> => {
    const lower = input.toLowerCase();
    return MOCK_OPTIONS.filter((o) => o.label.toLowerCase().includes(lower));
};

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.PredictiveTextInput
                data-testid="pti-default"
                label="Default"
                selectedOption={SELECTED_OPTION}
                fetchOptions={mockFetch}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <Form.PredictiveTextInput
                data-testid="pti-error"
                label="Error"
                errorMessage="Selection is required"
                selectedOption={SELECTED_OPTION}
                fetchOptions={mockFetch}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <Form.PredictiveTextInput
                data-testid="pti-disabled"
                label="Disabled"
                disabled
                selectedOption={SELECTED_OPTION}
                fetchOptions={mockFetch}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />

            <Form.PredictiveTextInput
                data-testid="pti-readonly"
                label="Readonly"
                readOnly
                selectedOption={SELECTED_OPTION}
                fetchOptions={mockFetch}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
