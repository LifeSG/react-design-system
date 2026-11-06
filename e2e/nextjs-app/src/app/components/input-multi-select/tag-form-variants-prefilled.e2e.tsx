"use client";

import { Form } from "@lifesg/react-design-system/form";

import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.MultiSelect
                data-testid="tag-form-prefilled-default"
                displayVariant="tag"
                label="Default"
                options={OPTIONS}
                selectedOptions={[OPTIONS[0], OPTIONS[1]]}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="tag-form-prefilled-disabled"
                displayVariant="tag"
                disabled
                label="Disabled"
                options={OPTIONS}
                selectedOptions={[OPTIONS[0], OPTIONS[1]]}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="tag-form-prefilled-readonly"
                displayVariant="tag"
                readOnly
                label="Readonly"
                options={OPTIONS}
                selectedOptions={[OPTIONS[0], OPTIONS[1]]}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="tag-form-prefilled-error"
                displayVariant="tag"
                label="Error"
                errorMessage="Selection is required"
                options={OPTIONS}
                selectedOptions={[OPTIONS[0], OPTIONS[1]]}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />
        </div>
    );
}
