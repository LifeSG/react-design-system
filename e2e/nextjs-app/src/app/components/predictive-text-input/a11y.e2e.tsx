"use client";

import { PredictiveTextInput } from "@lifesg/react-design-system/predictive-text-input";

const OPTIONS = ["Alpha Street", "Beta Avenue"];

export default function Story() {
    return (
        <PredictiveTextInput
            aria-label="Search for options"
            placeholder="Start typing..."
            minimumCharacters={3}
            fetchOptions={async (input) => {
                return OPTIONS.filter((option) =>
                    option.toLowerCase().includes(input.toLowerCase())
                );
            }}
        />
    );
}
