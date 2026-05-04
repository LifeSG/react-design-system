"use client";

import { Textarea } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Textarea
                data-testid="textarea-default"
                placeholder="Default textarea placeholder"
            />
            <Textarea
                data-testid="textarea-readonly"
                placeholder="Readonly textarea placeholder"
                readOnly
            />
            <Textarea
                data-testid="textarea-disabled"
                placeholder="Disabled textarea placeholder"
                disabled
            />
            <Textarea
                data-testid="textarea-error"
                placeholder="Error textarea placeholder"
                error
            />
        </div>
    );
}
