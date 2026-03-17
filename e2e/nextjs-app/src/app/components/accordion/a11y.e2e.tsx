"use client";

import { Accordion } from "@lifesg/react-design-system/accordion";

export default function Story() {
    return (
        <div data-testid="accordion-story">
            <Accordion title="Account details">
                <Accordion.Item title="Personal information">
                    Full legal name and identification details
                </Accordion.Item>
                <Accordion.Item title="Contact information">
                    Mobile number and email address
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
