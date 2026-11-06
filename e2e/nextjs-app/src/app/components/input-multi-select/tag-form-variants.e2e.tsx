"use client";

import { Form } from "@lifesg/react-design-system/form";

import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.MultiSelect
                data-testid="tag-form-default"
                displayVariant="tag"
                label="Default"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="tag-form-disabled"
                displayVariant="tag"
                disabled
                label="Disabled"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="tag-form-readonly"
                displayVariant="tag"
                readOnly
                label="Readonly"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="tag-form-error"
                displayVariant="tag"
                label="Error"
                errorMessage="Selection is required"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />
        </div>
    );
}
