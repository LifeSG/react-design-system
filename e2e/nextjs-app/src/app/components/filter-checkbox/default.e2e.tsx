"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { getOptions } from "./options";

export default function Story() {
    return (
        <Filter customLabels={{ headerTitle: "Filter" }}>
            <Filter.Checkbox
                data-testid="checkbox-default"
                title="Default"
                initialExpanded
                minimisableOptions={false}
                options={getOptions(8)}
            />
        </Filter>
    );
}
