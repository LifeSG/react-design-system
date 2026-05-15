"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./input-range-select.shared";

export default function Story() {
    return (
        <div className="story-column-container">
            <button data-testid="focus-start">Focus start</button>
            <Form.RangeSelect
                data-testid="input-range-select-focus"
                label="Range Select"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
