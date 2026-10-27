"use client";

import { InputNestedMultiSelect } from "@lifesg/react-design-system/input-nested-multi-select";

const LARGE_OPTIONS = Array.from({ length: 100 }, (_, index) => {
    const itemNumber = index + 1;

    return {
        label: `Category ${itemNumber}`,
        value: `${itemNumber}`,
        key: `${itemNumber}`,
        subItems: [
            {
                label: `Option ${itemNumber}.1`,
                value: `${itemNumber}.1`,
                key: `${itemNumber}-1`,
            },
        ],
    };
});

export default function Story() {
    return (
        <InputNestedMultiSelect
            data-testid="nested-multi-select"
            options={LARGE_OPTIONS}
            enableSearch
        />
    );
}
