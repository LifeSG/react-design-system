"use client";

import { UneditableSection } from "@lifesg/react-design-system/uneditable-section";

export default function Story() {
    return (
        <UneditableSection
            data-testid="uneditable-section"
            title="Personal Information"
            items={[
                {
                    label: "Loading variant",
                    value: "S1234534J",
                    maskState: "masked",
                    maskRange: [1, 4],
                    maskLoadingState: "loading",
                    displayWidth: "half",
                },
            ]}
        />
    );
}
