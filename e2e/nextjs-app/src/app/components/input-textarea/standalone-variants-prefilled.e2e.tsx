"use client";

import { Textarea } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Textarea
                data-testid="textarea-default"
                value="Default textarea value"
                maxLength={100}
            />
            <Textarea
                data-testid="textarea-readonly"
                value="Readonly textarea value"
                readOnly
                maxLength={100}
            />
            <Textarea
                data-testid="textarea-disabled"
                value="Disabled textarea value"
                disabled
                maxLength={100}
            />
            <Textarea
                data-testid="textarea-error"
                value="Error textarea value"
                error
                maxLength={100}
            />
        </div>
    );
}
