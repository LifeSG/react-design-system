"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";

export default function Story() {
    return (
        <PopoverTrigger
            position="top"
            popoverAriaLabel="Top placement details"
            popoverContent={
                <div data-testid="popover-content">
                    Top placement popover content.
                </div>
            }
        >
            <button type="button" data-testid="popover-trigger">
                Top placement trigger
            </button>
        </PopoverTrigger>
    );
}
