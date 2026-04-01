"use client";

import { InputNestedSelect } from "@lifesg/react-design-system/input-nested-select";

export default function Story() {
    return (
        <InputNestedSelect
            options={[]}
            data-testid="nested-select"
            optionsLoadState="loading"
            onRetry={() => undefined}
        />
    );
}
