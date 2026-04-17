"use client";

import { useState } from "react";
import {
    DropdownList,
    DropdownListState,
} from "@lifesg/react-design-system/shared/dropdown-list";

const ITEMS = ["Option A", "Option B", "Option C", "Option D"];

export default function Story() {
    const [selected, setSelected] = useState<unknown[]>([]);

    const handleSelectItem = (item: unknown) => {
        setSelected((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    const handleSelectAll = () => {
        setSelected((prev) => (prev.length === ITEMS.length ? [] : [...ITEMS]));
    };

    return (
        <div data-testid="multi-select-container">
            <DropdownListState>
                <DropdownList
                    listItems={ITEMS}
                    selectedItems={selected}
                    multiSelect
                    listboxId="listbox-multi"
                    ariaLabel="Multi selection"
                    onSelectItem={handleSelectItem}
                    onSelectAll={handleSelectAll}
                />
            </DropdownListState>
        </div>
    );
}

export const story = { init: Story };
