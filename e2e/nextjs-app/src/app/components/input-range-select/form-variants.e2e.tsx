"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./input-range-select.shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.RangeSelect
                data-testid="input-range-select-default"
                label="Default"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
            <Form.RangeSelect
                data-testid="input-range-select-disabled"
                label="Disabled"
                options={OPTIONS}
                disabled
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
            <Form.RangeSelect
                data-testid="input-range-select-readonly"
                label="Read only"
                options={OPTIONS}
                readOnly
                placeholders={{
                    from: OPTIONS.from[0].label,
                    to: OPTIONS.to[0].label,
                }}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
            <Form.RangeSelect
                data-testid="input-range-select-error"
                label="Error"
                options={OPTIONS}
                errorMessage="Selection is required"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
