"use client";

import { Form } from "@lifesg/react-design-system";

import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.MultiSelect
                data-testid="multi-select-disabled-options"
                label="Disabled options"
                options={OPTIONS}
                placeholder="Multi select"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                isOptionDisabled={(item) =>
                    item.value === "B" || item.value === "C"
                }
            />
        </div>
    );
}
