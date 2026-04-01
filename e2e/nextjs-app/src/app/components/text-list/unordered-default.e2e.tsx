"use client";

import { TextList } from "@lifesg/react-design-system/text-list";

export default function Story() {
    return (
        <div data-testid="text-list-unordered-default">
            <TextList.Ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </TextList.Ul>
        </div>
    );
}
