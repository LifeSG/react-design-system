"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <div className="alert-story-container">
            <Alert type="success">This is a success alert.</Alert>
            <Alert type="warning">This is a warning alert.</Alert>
            <Alert type="error">This is an error alert.</Alert>
            <Alert type="info">This is an info alert.</Alert>
            <Alert type="description">This is a description alert.</Alert>
        </div>
    );
}
