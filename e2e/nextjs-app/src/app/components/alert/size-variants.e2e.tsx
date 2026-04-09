"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <div className="alert-story-container">
            <Alert type="info" showIcon sizeType="default">
                Default size alert.
            </Alert>
            <Alert type="info" showIcon sizeType="small">
                Small size alert.
            </Alert>
        </div>
    );
}
