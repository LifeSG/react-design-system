"use client";

import { PredictiveTextInput } from "@lifesg/react-design-system/predictive-text-input";

type Option = { value: string; label: string; description: string };

const MOCK_OPTIONS: Option[] = [
    { value: "finland", label: "Finland", description: "Northern Europe" },
    {
        value: "netherlands",
        label: "Netherlands",
        description: "Western Europe",
    },
    {
        value: "ireland",
        label: "Republic of Ireland",
        description: "Northwestern Europe",
    },
    {
        value: "iceland",
        label: "Iceland",
        description: "North Atlantic Ocean",
    },
    {
        value: "new-zealand",
        label: "New Zealand",
        description: "Pacific Ocean",
    },
    {
        value: "switzerland",
        label: "Switzerland",
        description: "Central Europe",
    },
];

const mockFetch = async (input: string): Promise<Option[]> => {
    const lower = input.toLowerCase();
    return MOCK_OPTIONS.filter((o) => o.label.toLowerCase().includes(lower));
};

export default function Story() {
    return (
        <PredictiveTextInput
            data-testid="pti-secondary-label"
            fetchOptions={mockFetch}
            valueExtractor={(item) => item.value}
            listExtractor={(item) => ({
                title: item.label,
                secondaryLabel: item.description,
            })}
            displayValueExtractor={(item) => item.label}
        />
    );
}
