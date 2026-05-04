"use client";

import { OPTIONS } from "./mock";
import { Form } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.MultiSelect
                data-testid="form-default"
                label="Default"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="form-readonly"
                readOnly
                label="Readonly"
                options={OPTIONS}
                placeholder="Readonly multi select"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="form-selected"
                label="Selected"
                options={OPTIONS}
                selectedOptions={[OPTIONS[0], OPTIONS[1]]}
                placeholder="Preselected multi select"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="form-disabled"
                label="Disabled"
                options={OPTIONS}
                disabled
                placeholder="Disabled multi select"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="form-error"
                label="Error"
                options={OPTIONS}
                errorMessage="Selection is required"
                placeholder="Error multi select"
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />
        </div>
    );
}
