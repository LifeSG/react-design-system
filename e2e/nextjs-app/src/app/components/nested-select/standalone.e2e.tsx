"use client";

import { InputNestedSelect } from "@lifesg/react-design-system/input-nested-select";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-column-container">
            <InputNestedSelect
                data-testid="form-nested-select"
                options={OPTIONS}
            />

            <InputNestedSelect
                data-testid="form-nested-select"
                options={OPTIONS}
                disabled
            />

            <InputNestedSelect
                data-testid="form-nested-select"
                options={OPTIONS}
                readOnly
            />

            <InputNestedSelect
                data-testid="form-nested-select"
                options={OPTIONS}
                error
            />
        </div>
    );
}
