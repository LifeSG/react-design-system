"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <div className="story-column-container">
            <Alert data-testid="alert-success" type="success" role="alert">
                This is a success alert.
            </Alert>
            <Alert data-testid="alert-warning" type="warning" role="alert">
                This is a warning alert.
            </Alert>
            <Alert data-testid="alert-error" type="error" role="alert">
                This is an error alert.
            </Alert>
            <Alert data-testid="alert-info" type="info" role="alert">
                This is an info alert.
            </Alert>
            <Alert
                data-testid="alert-description"
                type="description"
                role="alert"
            >
                This is a description alert.
            </Alert>
        </div>
    );
}
