"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <Alert
            data-testid="alert-default"
            type="info"
            maxCollapsedHeight={60}
            role="alert"
        >
            <p>Line one of a long alert content.</p>
            <p>Line two of a long alert content.</p>
            <p>Line three of a long alert content.</p>
            <p>Line four of a long alert content.</p>
            <p>Line five of a long alert content.</p>
        </Alert>
    );
}
