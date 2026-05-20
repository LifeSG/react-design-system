"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { nonUniformOptions } from "./options";

export default function Story() {
    return (
        <Filter>
            <Filter.Checkbox
                data-testid="checkbox-toggle-content-width"
                title="Toggle content width"
                initialExpanded
                useToggleContentWidth
                options={nonUniformOptions}
            />
        </Filter>
    );
}
