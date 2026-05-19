"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { getOptions } from "./options";

export default function Story() {
    return (
        <Filter>
            <Filter.Checkbox
                data-testid="checkbox-non-minimisable"
                title="Non-minimisable"
                initialExpanded
                minimisableOptions={false}
                options={getOptions(8)}
            />
        </Filter>
    );
}
