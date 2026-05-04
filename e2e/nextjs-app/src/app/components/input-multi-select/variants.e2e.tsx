"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.MultiSelect
                data-testid="variant-default"
                label="Default variant"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="variant-small"
                variant="small"
                label="Small variant"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                enableSearch
            />
        </div>
    );
}
