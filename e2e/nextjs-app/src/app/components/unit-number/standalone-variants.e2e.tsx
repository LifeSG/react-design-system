"use client";

import { UnitNumberInput } from "@lifesg/react-design-system/unit-number";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <UnitNumberInput data-testid="unit-number-default" />
            <UnitNumberInput data-testid="unit-number-disabled" disabled />
            <UnitNumberInput data-testid="unit-number-readonly" readOnly />
            <UnitNumberInput data-testid="unit-number-error" error />
        </div>
    );
}
