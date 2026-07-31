"use client";

import { Textarea } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <Textarea
                data-testid="textarea-default"
                placeholder="Default textarea placeholder"
                maxLength={100}
            />
            <Textarea
                data-testid="textarea-readonly"
                placeholder="Readonly textarea placeholder"
                readOnly
                maxLength={100}
            />
            <Textarea
                data-testid="textarea-disabled"
                placeholder="Disabled textarea placeholder"
                disabled
                maxLength={100}
            />
            <Textarea
                data-testid="textarea-error"
                placeholder="Error textarea placeholder"
                error
                maxLength={100}
            />
        </div>
    );
}
