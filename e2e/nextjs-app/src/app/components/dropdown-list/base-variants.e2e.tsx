"use client";

import {
    DropdownList,
    DropdownListState,
} from "@lifesg/react-design-system/shared/dropdown-list";

const ITEMS = ["Option A", "Option B", "Option C", "Option D"];

export default function Story() {
    return (
        <div className="story-row-container">
            <div data-testid="variant-default">
                <DropdownListState>
                    <DropdownList
                        listItems={ITEMS}
                        listboxId="listbox-default"
                        ariaLabel="Default variant"
                        variant="default"
                    />
                </DropdownListState>
            </div>
            <div data-testid="variant-small">
                <DropdownListState>
                    <DropdownList
                        listItems={ITEMS}
                        listboxId="listbox-small"
                        ariaLabel="Small variant"
                        variant="small"
                    />
                </DropdownListState>
            </div>
        </div>
    );
}

export const story = { init: Story };
