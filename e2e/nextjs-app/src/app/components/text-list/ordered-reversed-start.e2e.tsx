"use client";

import { TextList } from "@lifesg/react-design-system/text-list";

export default function Story() {
    return (
        <div data-testid="text-list-ordered-reversed-start">
            <TextList.Ol reversed start={3}>
                <li>Item A</li>
                <li>Item B</li>
                <li>Item C</li>
            </TextList.Ol>
        </div>
    );
}
