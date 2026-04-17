"use client";

import {
    DropdownList,
    DropdownListState,
} from "@lifesg/react-design-system/shared/dropdown-list";

const ITEMS = ["Option A", "Option B", "Option C"];

export default function Story() {
    return (
        <div data-testid="custom-cta-container">
            <DropdownListState>
                <DropdownList
                    listItems={ITEMS}
                    listboxId="listbox-cta"
                    ariaLabel="Custom CTA"
                    renderCustomCallToAction={(dismiss) => (
                        <button
                            data-testid="cta-button"
                            onClick={dismiss}
                            type="button"
                        >
                            Apply
                        </button>
                    )}
                />
            </DropdownListState>
        </div>
    );
}

export const story = { init: Story };
