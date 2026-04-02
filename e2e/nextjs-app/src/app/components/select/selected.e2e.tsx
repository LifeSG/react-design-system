"use client";

import { InputSelect } from "@lifesg/react-design-system/input-select";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <InputSelect
            data-testid="select"
            options={OPTIONS}
            selectedOption={OPTIONS[1]}
            placeholder="Select"
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
            displayValueExtractor={(item) => item.label}
        />
    );
}
