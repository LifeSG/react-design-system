"use client";

import { OPTIONS } from "./mock";
import { Form } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.MultiSelect
                data-testid="form-custom-label"
                options={OPTIONS}
                selectedOptions={[OPTIONS[0], OPTIONS[1]]}
                placeholder="Custom labels"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                label="Custom Labels"
                customLabels={{
                    allSelectedLabel: "Custom all selected",
                    clearAllButtonLabel: "Custom clear all",
                    selectAllButtonLabel: "Custom select all",
                    multiSelectedLabel: "Custom multi selected",
                }}
            />
        </div>
    );
}
