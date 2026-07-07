"use client";

import { UneditableSection } from "@lifesg/react-design-system/uneditable-section";
import { Alert } from "@lifesg/react-design-system/alert";
import { Button } from "@lifesg/react-design-system/button";

export default function Story() {
    return (
        <UneditableSection
            data-testid="uneditable-section"
            title="Personal Information"
            description="Your personal details with additional sections"
            topSection={
                <Alert type="info" data-testid="top-section-alert">
                    Custom alert section
                </Alert>
            }
            items={[
                {
                    label: "Name (as in NRIC or passport)",
                    value: "Tom Tan Li Ho",
                    displayWidth: "half",
                },
                {
                    label: "NRIC or FIN",
                    value: "S1234534J",
                    displayWidth: "half",
                },
                {
                    label: "Date of birth",
                    value: "6 November 1992",
                    displayWidth: "half",
                },
                {
                    label: "Nationality",
                    value: "Singaporean",
                    displayWidth: "half",
                },
            ]}
            bottomSection={
                <div data-testid="bottom-section-actions">
                    <Button>Custom button</Button>
                </div>
            }
        />
    );
}
