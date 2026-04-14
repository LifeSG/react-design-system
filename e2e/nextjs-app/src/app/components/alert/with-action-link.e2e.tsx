"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <Alert
            type="info"
            actionLink={{ href: "#", children: "Learn more" }}
            role="alert"
        >
            This alert has an action link.
        </Alert>
    );
}
