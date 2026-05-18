"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { getOptions } from "./options";

export default function Story() {
    return (
        <Filter customLabels={{ headerTitle: "Filter" }}>
            <Filter.Checkbox
                data-testid="checkbox-mobile-checkbox"
                title="Mobile checkbox mode"
                initialExpanded
                showAsCheckboxInMobile
                options={getOptions(3)}
            />
        </Filter>
    );
}
