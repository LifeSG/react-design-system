"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <div className="story-column-container">
            <Alert
                data-testid="alert-default"
                type="info"
                sizeType="default"
                maxCollapsedHeight={40}
                actionLink={{ href: "#", children: "Learn more" }}
                role="alert"
            >
                Default size alert.
            </Alert>
            <Alert
                data-testid="alert-small"
                type="info"
                sizeType="small"
                maxCollapsedHeight={40}
                actionLink={{ href: "#", children: "Learn more" }}
                role="alert"
            >
                Small size alert.
            </Alert>
        </div>
    );
}
