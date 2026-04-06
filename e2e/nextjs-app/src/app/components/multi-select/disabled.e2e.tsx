"use client";

import { InputMultiSelect } from "@lifesg/react-design-system/input-multi-select";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <InputMultiSelect
            data-testid="multi-select"
            options={OPTIONS}
            disabled
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
        />
    );
}
