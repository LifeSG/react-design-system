"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";

export default function Story() {
    return (
        <div>
            <button type="button" data-testid="focus-start">
                Focus start
            </button>

            <PopoverTrigger
                trigger="hover"
                popoverAriaLabel="Hover details"
                popoverContent={
                    <div data-testid="popover-content">
                        Hover popover content.
                    </div>
                }
            >
                <button data-testid="popover-trigger" type="button">
                    Hover popover trigger
                </button>
            </PopoverTrigger>

            <button type="button" data-testid="outside-dismiss-target">
                Outside target
            </button>
        </div>
    );
}
