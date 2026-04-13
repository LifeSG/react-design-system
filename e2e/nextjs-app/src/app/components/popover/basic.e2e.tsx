"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";
import { Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div>
            <button type="button" data-testid="focus-start">
                Focus start
            </button>

            <PopoverTrigger
                popoverAriaLabel="More details"
                popoverContent={
                    <div data-testid="popover-content">
                        <Typography.BodyMD>
                            Basic popover content.
                        </Typography.BodyMD>
                    </div>
                }
            >
                <button data-testid="popover-trigger" type="button">
                    Open popover
                </button>
            </PopoverTrigger>

            <button type="button" data-testid="outside-dismiss-target">
                Outside target
            </button>
        </div>
    );
}
