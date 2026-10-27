"use client";

import { TextList } from "@lifesg/react-design-system/text-list";

export default function Story() {
    return (
        <div data-testid="text-list-unordered-default">
            <div>
                Circle
                <TextList.Ul bulletType="circle">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
            </div>
            <div>
                Disk
                <TextList.Ul bulletType="disc">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
            </div>
            <div>
                Square
                <TextList.Ul bulletType="square">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
            </div>
            <div>
                None
                <TextList.Ul bulletType="none">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </TextList.Ul>
            </div>
        </div>
    );
}
