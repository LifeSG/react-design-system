"use client";

import { Toast } from "@lifesg/react-design-system/toast";

export default function Story() {
    return (
        <div className="story-column-container">
            <Toast
                data-testid="toast-success"
                type="success"
                label="Your booking has been updated successfully."
                fixed={false}
            />

            <Toast
                data-testid="toast-warning"
                type="warning"
                label="The template contains characters that cannot be updated."
                fixed={false}
            />

            <Toast
                data-testid="toast-error"
                type="error"
                label="An internal system error has occurred."
                fixed={false}
            />

            <Toast
                data-testid="toast-info"
                type="info"
                label="Your changes are saved as you continue editing."
                fixed={false}
            />
        </div>
    );
}
