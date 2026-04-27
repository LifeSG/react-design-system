"use client";

import { Textarea } from "@lifesg/react-design-system/input-textarea";

export default function Story() {
    return (
        <div className="story-column-container">
            <Textarea
                data-testid="textarea-default"
                placeholder="Default textarea"
                defaultValue="Default value"
            />
            <Textarea
                data-testid="textarea-readonly"
                placeholder="Readonly textarea"
                value="Readonly value"
                readOnly
            />
            <Textarea
                data-testid="textarea-disabled"
                placeholder="Disabled textarea"
                value="Disabled value"
                disabled
            />
            <Textarea
                data-testid="textarea-error"
                placeholder="Error textarea"
                defaultValue="Error value"
                error
            />
        </div>
    );
}
