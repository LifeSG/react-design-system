"use client";

import { Textarea } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Textarea
                data-testid="textarea-error-message"
                placeholder="Error message only"
                errorMessage="This field is required"
            />
            <Textarea
                data-testid="textarea-error-message-counter"
                placeholder="Error message with counter"
                errorMessage="This field is required"
                maxLength={100}
            />
        </div>
    );
}
