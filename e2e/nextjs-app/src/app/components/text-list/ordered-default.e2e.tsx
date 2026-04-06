"use client";

import { TextList } from "@lifesg/react-design-system/text-list";

export default function Story() {
    return (
        <div data-testid="text-list-ordered-default">
            <div>
                Lower Alpha
                <TextList.Ol counterType="lower-alpha">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ol>
            </div>
            <div>
                Decimal
                <TextList.Ol counterType="decimal">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ol>
            </div>
            <div>
                Lower Roman
                <TextList.Ol counterType="lower-roman">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ol>
            </div>
        </div>
    );
}
