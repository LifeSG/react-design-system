"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <div className="story-column-container">
            <Alert data-testid="alert-success" type="success">
                This is a success alert.
            </Alert>
            <Alert data-testid="alert-warning" type="warning">
                This is a warning alert.
            </Alert>
            <Alert data-testid="alert-error" type="error">
                This is an error alert.
            </Alert>
            <Alert data-testid="alert-info" type="info">
                This is an info alert.
            </Alert>
            <Alert data-testid="alert-description" type="description">
                This is a description alert.
            </Alert>
        </div>
    );
}
