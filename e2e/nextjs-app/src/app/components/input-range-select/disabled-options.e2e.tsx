"use client";

import { Form } from "@lifesg/react-design-system/form";

import { OPTIONS } from "./input-range-select.shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.RangeSelect
                data-testid="input-range-select-disabled-options"
                label="Disabled options"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                isOptionDisabled={(item) =>
                    item.value === "B" || item.value === "L"
                }
            />
        </div>
    );
}
