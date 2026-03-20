"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";
import { useRef } from "react";

export default function Story() {
    const rootNode = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={rootNode}
            style={{ minHeight: "260px", paddingBottom: "16px" }}
        >
            <PopoverTrigger
                rootNode={rootNode}
                popoverContent={
                    <div data-testid="basic-popover-content">
                        Basic popover content.
                    </div>
                }
            >
                <button type="button">Open popover</button>
            </PopoverTrigger>
        </div>
    );
}
