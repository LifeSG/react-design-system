"use client";

import { Button } from "@lifesg/react-design-system/button";
import { InputMultiSelect } from "@lifesg/react-design-system/input-multi-select";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <InputMultiSelect
            data-testid="multi-select"
            options={OPTIONS}
            enableSearch
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
            renderCustomCallToAction={(onDismiss, displayListItems) => (
                <Button
                    data-testid="custom-cta-button"
                    onClick={() => onDismiss?.()}
                >
                    Create option ({displayListItems.length})
                </Button>
            )}
        />
    );
}
