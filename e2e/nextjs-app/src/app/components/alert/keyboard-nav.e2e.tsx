"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <div>
            <button data-testid="before-alert">Before alert</button>
            <Alert
                type="info"
                maxCollapsedHeight={60}
                role="alert"
                actionLink={{ href: "#", children: "Learn more" }}
            >
                <p>Line one of a long alert content.</p>
                <p>Line two of a long alert content.</p>
                <p>Line three of a long alert content.</p>
                <p>Line four of a long alert content.</p>
                <p>Line five of a long alert content.</p>
            </Alert>
            <button data-testid="after-alert">After alert</button>
        </div>
    );
}
