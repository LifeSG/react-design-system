"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { nestedOptions } from "./options";

export default function Story() {
    return (
        <Filter customLabels={{ headerTitle: "Filter" }}>
            <Filter.Checkbox
                data-testid="checkbox-nested"
                title="Nested options"
                initialExpanded
                minimisableOptions={false}
                options={nestedOptions}
            />
        </Filter>
    );
}
