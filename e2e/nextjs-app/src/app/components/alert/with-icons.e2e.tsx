"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <div className="alert-story-container">
            <Alert type="success" showIcon>
                This is a success alert with icon.
            </Alert>
            <Alert type="warning" showIcon>
                This is a warning alert with icon.
            </Alert>
            <Alert type="error" showIcon>
                This is an error alert with icon.
            </Alert>
            <Alert type="info" showIcon>
                This is an info alert with icon.
            </Alert>
            <Alert type="description" showIcon>
                This is a description alert with icon.
            </Alert>
        </div>
    );
}
