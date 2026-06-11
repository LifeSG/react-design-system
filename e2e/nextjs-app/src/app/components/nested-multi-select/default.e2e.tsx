"use client";

import { InputNestedMultiSelect } from "@lifesg/react-design-system/input-nested-multi-select";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-background">
            <InputNestedMultiSelect
                data-testid="nested-multi-select"
                options={OPTIONS}
            />
        </div>
    );
}
