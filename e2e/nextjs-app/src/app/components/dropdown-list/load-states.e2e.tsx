"use client";

import { useState } from "react";
import {
    DropdownList,
    DropdownListState,
} from "@lifesg/react-design-system/shared/dropdown-list";

export default function Story() {
    const [failRetried, setFailRetried] = useState(false);

    return (
        <div className="story-column-container">
            <div data-testid="loading-container">
                <DropdownListState>
                    <DropdownList
                        listItems={[]}
                        itemsLoadState="loading"
                        listboxId="listbox-loading"
                        ariaLabel="Loading state"
                        onRetry={() => {}}
                    />
                </DropdownListState>
            </div>
            <div data-testid="fail-container">
                <DropdownListState>
                    <DropdownList
                        listItems={[]}
                        itemsLoadState="fail"
                        listboxId="listbox-fail"
                        ariaLabel="Fail state"
                        onRetry={() => setFailRetried(true)}
                    />
                </DropdownListState>
            </div>
            {failRetried && (
                <div data-testid="retry-triggered">Retry triggered</div>
            )}
        </div>
    );
}

export const story = { init: Story };
