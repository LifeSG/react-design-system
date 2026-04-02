"use client";

import { InputNestedSelect } from "@lifesg/react-design-system/input-nested-select";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <InputNestedSelect
            data-testid="nested-select"
            options={OPTIONS}
            disabled
        />
    );
}
