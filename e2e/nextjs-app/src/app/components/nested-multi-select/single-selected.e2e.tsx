"use client";

import { InputNestedMultiSelect } from "@lifesg/react-design-system/input-nested-multi-select";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <InputNestedMultiSelect
            data-testid="nested-multi-select"
            mode="expand"
            options={OPTIONS}
            selectedKeyPaths={[["1", "11"]]}
        />
    );
}
