"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { useState } from "react";
import { getOptions } from "./options";

const OPTIONS = getOptions(3);

export default function Story() {
    const [selected, setSelected] = useState<typeof OPTIONS>([]);

    return (
        <div className="story-column-container">
            <Filter customLabels={{ headerTitle: "Filter" }}>
                <Filter.Checkbox
                    title="Categories"
                    data-testid="item-checkbox"
                    initialExpanded
                    options={OPTIONS}
                    selectedOptions={selected}
                    onSelect={setSelected}
                />
            </Filter>
        </div>
    );
}
