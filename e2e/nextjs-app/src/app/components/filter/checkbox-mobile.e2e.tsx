"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { useState } from "react";
import { getOptions } from "./options";

const OPTIONS = getOptions(4);

export default function Story() {
    const [toggleSelected, setToggleSelected] = useState<typeof OPTIONS>([]);
    const [checkboxSelected, setCheckboxSelected] = useState<typeof OPTIONS>(
        []
    );

    return (
        <Filter.Modal
            onClear={() => {
                setToggleSelected([]);
                setCheckboxSelected([]);
            }}
            onDismiss={() => {}}
            onDone={() => {}}
            customLabels={{
                headerTitle: "Filter",
                toggleFilterButtonLabel: "Open filters",
                doneButtonLabel: "Apply",
            }}
        >
            <Filter.Checkbox
                title="Toggle pills"
                data-testid="item-checkbox-toggle"
                options={OPTIONS}
                selectedOptions={toggleSelected}
                onSelect={setToggleSelected}
            />
            <Filter.Checkbox
                title="Checkbox display"
                data-testid="item-checkbox-checkbox"
                showAsCheckboxInMobile
                options={OPTIONS}
                selectedOptions={checkboxSelected}
                onSelect={setCheckboxSelected}
            />
        </Filter.Modal>
    );
}
