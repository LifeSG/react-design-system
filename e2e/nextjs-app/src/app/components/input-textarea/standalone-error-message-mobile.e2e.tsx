"use client";

import { Textarea } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Textarea
                data-testid="textarea-error-message"
                placeholder="Error message only"
                errorMessage="This field is required and must contain valid information before submitting"
            />
            <Textarea
                data-testid="textarea-error-message-counter"
                placeholder="Error message with counter"
                errorMessage="This field is required and must contain valid information before submitting"
                maxLength={100}
            />
        </div>
    );
}
