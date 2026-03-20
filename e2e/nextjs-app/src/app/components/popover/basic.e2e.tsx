"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";

export default function Story() {
    return (
        <PopoverTrigger
            popoverContent={
                <div data-testid="basic-popover-content">
                    Basic popover content.
                </div>
            }
        >
            <button type="button">Open popover</button>
        </PopoverTrigger>
    );
}
