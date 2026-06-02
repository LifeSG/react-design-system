"use client";

import { PredictiveTextInput } from "@lifesg/react-design-system/predictive-text-input";
import { useState } from "react";

type Option = { value: string; label: string };

const SELECTED_OPTION: Option = { value: "apple", label: "Apple" };

const mockFetch = async (_input: string): Promise<Option[]> => [];

export default function Story() {
    const [selectedOption, setSelectedOption] = useState<Option | undefined>();

    return (
        <div className="story-column-container story-background">
            <PredictiveTextInput
                data-testid="pti-default"
                selectedOption={selectedOption}
                fetchOptions={mockFetch}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                onSelectOption={(option) => setSelectedOption(option)}
            />
            <PredictiveTextInput
                data-testid="pti-selected"
                selectedOption={SELECTED_OPTION}
                fetchOptions={mockFetch}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
            <PredictiveTextInput
                data-testid="pti-disabled"
                disabled
                fetchOptions={mockFetch}
            />
            <PredictiveTextInput
                data-testid="pti-readonly"
                readOnly
                selectedOption={SELECTED_OPTION}
                fetchOptions={mockFetch}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
            <PredictiveTextInput
                data-testid="pti-error"
                error
                fetchOptions={mockFetch}
            />
        </div>
    );
}
