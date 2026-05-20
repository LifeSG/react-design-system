"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { getOptions } from "./options";

export default function Story() {
    return (
        <Filter>
            <Filter.Checkbox
                data-testid="checkbox-default"
                title="Default"
                initialExpanded
                options={getOptions(8)}
            />
        </Filter>
    );
}
