"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./input-range-select.shared";

export default function Story() {
    return (
        <div className="story-column-container">
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
                selectedOptions={{
                    from: OPTIONS.from[0],
                    to: OPTIONS.to[0],
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
