"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { getOptions } from "./options";

export default function Story() {
    return (
        <Filter customLabels={{ headerTitle: "Filter" }}>
            <Filter.Checkbox
                data-testid="checkbox-minimisable"
                title="Minimisable"
                initialExpanded
                options={getOptions(8)}
            />
        </Filter>
    );
}
