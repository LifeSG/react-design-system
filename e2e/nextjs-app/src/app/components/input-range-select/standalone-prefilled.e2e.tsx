"use client";

import { InputRangeSelect } from "@lifesg/react-design-system/input-range-select";
import { OPTIONS } from "./input-range-select.shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <InputRangeSelect
                data-testid="input-range-select-selected"
                options={OPTIONS}
                selectedOptions={{
                    from: OPTIONS.from[0],
                    to: OPTIONS.to[0],
                }}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
