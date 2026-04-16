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
        setSelected((prev) => (prev.includes(item) ? [] : [item]));
    };

    return (
        <div data-testid="keyboard-nav-container">
            <DropdownListState>
                <DropdownList
                    listItems={ITEMS}
                    selectedItems={selected}
                    listboxId="listbox-keyboard"
                    ariaLabel="Keyboard navigation"
                    onSelectItem={handleSelectItem}
                />
            </DropdownListState>
        </div>
    );
}

export const story = { init: Story };
