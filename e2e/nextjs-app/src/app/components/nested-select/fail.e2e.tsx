"use client";

import { InputNestedSelect } from "@lifesg/react-design-system/input-nested-select";

export default function Story() {
    return (
        <InputNestedSelect
            data-testid="nested-select"
            options={[]}
            optionsLoadState="fail"
            onRetry={() => undefined}
        />
    );
}
