"use client";

import { InputMultiSelect } from "@lifesg/react-design-system/input-multi-select";
import { useState } from "react";

const OPTIONS = [
    {
        value: "long",
        label: "This is a very long option label that cannot fit within the width of the field and should be truncated",
    },
    ...Array.from({ length: 29 }, (_, i) => ({
        value: `${i + 1}`,
        label: `Option ${i + 1}`,
    })),
];

export default function Story() {
    const [selected, setSelected] = useState<typeof OPTIONS>([]);

    return (
        <div className="story-column-container">
            <InputMultiSelect
                data-testid="tag-default"
                displayVariant="tag"
                options={OPTIONS}
                selectedOptions={selected}
                onSelectOptions={setSelected}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />
        </div>
    );
}
