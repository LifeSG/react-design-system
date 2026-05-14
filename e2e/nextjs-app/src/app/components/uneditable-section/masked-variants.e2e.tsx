"use client";

import { UneditableSection } from "@lifesg/react-design-system/uneditable-section";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <UneditableSection
                data-testid="uneditable-section-full-width"
                title="Personal Information"
                description="Sample description"
                items={[
                    {
                        displayWidth: "half",
                        label: "Plain text",
                        value: "S1234567D",
                    },
                    {
                        displayWidth: "half",
                        label: "With mask range",
                        maskRange: [1, 4],
                        maskState: "masked",
                        value: "S1234567D",
                    },
                    {
                        displayWidth: "half",
                        label: "With mask range (start only)",
                        maskRange: [4, 9999],
                        maskState: "masked",
                        value: "S1234567D",
                    },
                    {
                        displayWidth: "half",
                        label: "With mask range (end only)",
                        maskRange: [0, 4],
                        maskState: "masked",
                        value: "S1234567D",
                    },
                    {
                        displayWidth: "half",
                        label: "With unmask range",
                        maskState: "masked",
                        unmaskRange: [1, 4],
                        value: "S1234567D",
                    },
                    {
                        displayWidth: "half",
                        label: "With mask regex",
                        maskRegex: /\D/g,
                        maskState: "masked",
                        value: "S1234567D",
                    },
                    {
                        displayWidth: "half",
                        label: "With mask transformer (X)",
                        maskState: "masked",
                        maskTransformer: (value) => value.replace(/\d/g, "X"),
                        value: "S1234567D",
                    },
                    {
                        disableMaskUnmask: true,
                        displayWidth: "half",
                        label: "With mask range but disabled unmasking",
                        maskRange: [1, 4],
                        maskState: "masked",
                        value: "S1234567D",
                    },
                ]}
            />
        </div>
    );
}
