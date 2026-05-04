"use client";

import { InputMultiSelect } from "@lifesg/react-design-system/input-multi-select";

const LARGE_OPTIONS = Array.from({ length: 5000 }, (_, index) => ({
    value: index + 1,
    label: `Option ${index + 1}`,
}));

export default function Story() {
    return (
        <InputMultiSelect
            data-testid="multi-select"
            options={LARGE_OPTIONS}
            enableSearch
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
        />
    );
}
