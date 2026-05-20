"use client";

import { InputRangeSelect } from "@lifesg/react-design-system/input-range-select";
import { OPTIONS } from "./input-range-select.shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <InputRangeSelect
                data-testid="input-range-select-default"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
            <InputRangeSelect
                data-testid="input-range-select-readonly"
                options={OPTIONS}
                placeholders={{
                    from: OPTIONS.from[0].label,
                    to: OPTIONS.to[0].label,
                }}
                readOnly
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
            <InputRangeSelect
                data-testid="input-range-select-disabled"
                options={OPTIONS}
                disabled
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
            <InputRangeSelect
                data-testid="input-range-select-error"
                error
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
