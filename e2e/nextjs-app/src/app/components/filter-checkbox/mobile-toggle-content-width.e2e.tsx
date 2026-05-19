"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { getOptions } from "./options";

export default function Story() {
    return (
        <Filter>
            <Filter.Checkbox
                data-testid="checkbox-toggle-content-width"
                title="Toggle content width"
                initialExpanded
                useToggleContentWidth
                options={getOptions(8, (i) => `${i + 1}`)}
            />
        </Filter>
    );
}
