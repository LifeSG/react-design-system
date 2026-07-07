"use client";

import { TextList } from "@lifesg/react-design-system/text-list";
import styles from "./text-list.module.css";

export default function Story() {
    return (
        <div data-testid="text-list-advanced-nested-counter">
            <TextList.Ol>
                <li>Item A</li>
                <li>
                    Item B
                    <TextList.Ol>
                        <li>Nested 1</li>
                        <li>Nested 2</li>
                    </TextList.Ol>
                </li>
                <li>
                    Item C
                    <TextList.Ol className={styles["custom-ordered-list"]}>
                        <li>Nested with custom counter 1</li>
                        <li>Nested with custom counter 2</li>
                    </TextList.Ol>
                </li>
                <li>Item D</li>
                <li>
                    Item E
                    <TextList.Ol counterSeparator="--">
                        <li>Nested with counter separator 1</li>
                        <li>Nested with counter separator 2</li>
                    </TextList.Ol>
                </li>
            </TextList.Ol>
        </div>
    );
}
