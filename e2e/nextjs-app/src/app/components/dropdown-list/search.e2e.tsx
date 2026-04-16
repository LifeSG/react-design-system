"use client";

import {
    DropdownList,
    DropdownListState,
} from "@lifesg/react-design-system/shared/dropdown-list";

const ITEMS = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

export default function Story() {
    return (
        <div data-testid="search-container">
            <DropdownListState>
                <DropdownList
                    listItems={ITEMS}
                    listboxId="listbox-search"
                    ariaLabel="Search dropdown"
                    enableSearch
                />
            </DropdownListState>
        </div>
    );
}

export const story = { init: Story };
