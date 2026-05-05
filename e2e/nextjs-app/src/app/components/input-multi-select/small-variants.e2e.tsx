"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.MultiSelect
                data-testid="small-default"
                variant="small"
                label="Small default"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />

            <Form.MultiSelect
                data-testid="small-with-search"
                variant="small"
                label="Small with search"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                enableSearch
            />
        </div>
    );
}
