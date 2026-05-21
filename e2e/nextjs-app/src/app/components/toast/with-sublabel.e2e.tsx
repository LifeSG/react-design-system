"use client";

import { Toast } from "@lifesg/react-design-system/toast";

export default function Story() {
    return (
        <div className="story-column-container">
            <Toast
                data-testid="toast-success"
                type="success"
                title="Booking updated"
                label="Your booking has been updated."
                fixed={false}
            />

            <Toast
                data-testid="toast-warning"
                type="warning"
                title="Unknown characters"
                label="Please remove the unsupported characters and try again."
                fixed={false}
            />

            <Toast
                data-testid="toast-info"
                type="info"
                title="Updated automatically"
                label="The calendar will update when you finish editing."
                fixed={false}
            />

            <Toast
                data-testid="toast-error"
                type="error"
                title="Error occurred"
                label="An internal system error has occurred."
                fixed={false}
            />
        </div>
    );
}
