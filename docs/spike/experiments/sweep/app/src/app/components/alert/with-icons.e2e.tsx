"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <div className="story-column-container">
            <Alert type="success" showIcon role="alert">
                This is a success alert with icon.
            </Alert>
            <Alert type="warning" showIcon role="alert">
                This is a warning alert with icon.
            </Alert>
            <Alert type="error" showIcon role="alert">
                This is an error alert with icon.
            </Alert>
            <Alert type="info" showIcon role="alert">
                This is an info alert with icon.
            </Alert>
            <Alert type="description" showIcon role="alert">
                This is a description alert with icon.
            </Alert>
        </div>
    );
}
