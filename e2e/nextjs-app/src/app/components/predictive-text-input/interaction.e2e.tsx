"use client";

import { Form } from "@lifesg/react-design-system/form";

type Option = { value: string; label: string };

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
        <Form.PredictiveTextInput
            data-testid="pti-default"
            fetchOptions={mockFetch}
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
            displayValueExtractor={(item) => item.label}
        />
    );
}
