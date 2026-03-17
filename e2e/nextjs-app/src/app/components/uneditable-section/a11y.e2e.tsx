"use client";

import { UneditableSection } from "@lifesg/react-design-system/uneditable-section";

export default function Story() {
    return (
        <div data-testid="uneditable-section-story">
            <UneditableSection
                title="Profile details"
                items={[
                    {
                        label: "NRIC or FIN",
                        value: "S1234567D",
                        maskState: "masked",
                        maskRange: [2, 5],
                        maskLoadingState: "fail",
                    },
                ]}
            />
        </div>
    );
}
