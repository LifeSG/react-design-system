"use client";

import { InputNestedMultiSelect } from "@lifesg/react-design-system/input-nested-multi-select";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-column-container">
            <InputNestedMultiSelect
                data-testid="nested-multi-select-default"
                options={OPTIONS}
            />

            <InputNestedMultiSelect
                data-testid="nested-multi-select-selected"
                options={OPTIONS}
                selectedKeyPaths={[
                    ["1", "11"],
                    ["2", "21"],
                ]}
            />

            <InputNestedMultiSelect
                data-testid="nested-multi-select-readonly"
                options={OPTIONS}
                readOnly
            />

            <InputNestedMultiSelect
                data-testid="nested-multi-select-disabled"
                options={OPTIONS}
                disabled
            />

            <InputNestedMultiSelect
                data-testid="nested-multi-select-error"
                options={OPTIONS}
                error
            />
        </div>
    );
}
