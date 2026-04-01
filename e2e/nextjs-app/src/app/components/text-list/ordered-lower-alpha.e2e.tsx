"use client";

import { TextList } from "@lifesg/react-design-system/text-list";

export default function Story() {
    return (
        <div data-testid="text-list-ordered-lower-alpha">
            <TextList.Ol counterType="lower-alpha">
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </TextList.Ol>
        </div>
    );
}
