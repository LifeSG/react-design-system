"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./input-range-select.shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.RangeSelect
                data-testid="input-range-select-search"
                label="Range Select with search"
                options={OPTIONS}
                enableSearch
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
            />
        </div>
    );
}
