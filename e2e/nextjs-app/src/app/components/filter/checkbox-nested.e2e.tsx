"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import type { FilterItemCheckboxOptionProps } from "@lifesg/react-design-system/filter";
import { useState } from "react";

const NESTED_OPTIONS: FilterItemCheckboxOptionProps[] = [
    {
        value: "fruits",
        label: "Fruits",
        options: [
            { value: "apple", label: "Apple" },
            { value: "banana", label: "Banana" },
            { value: "cherry", label: "Cherry" },
        ],
    },
];

export default function Story() {
    const [selected, setSelected] = useState<FilterItemCheckboxOptionProps[]>(
        []
    );

    return (
        <div className="story-column-container">
            <Filter customLabels={{ headerTitle: "Filter" }}>
                <Filter.Checkbox
                    title="Nested categories"
                    data-testid="item-checkbox"
                    initialExpanded
                    options={NESTED_OPTIONS}
                    selectedOptions={selected}
                    onSelect={setSelected}
                />
            </Filter>
        </div>
    );
}
