"use client";
import { LinkList } from "@lifesg/react-design-system/link-list";

import styles from "./link-list.module.css";

export default function Story() {
    return (
        <LinkList
            data-testid="link-list"
            items={[
                {
                    title: (
                        <span className={styles["custom-element"]}>
                            Custom title
                        </span>
                    ),
                    description: "I am a plain description with JSX title",
                    href: "#",
                },
                {
                    title: "Plain title with JSX description",
                    description: (
                        <span className={styles["custom-element"]}>
                            Custom description
                        </span>
                    ),
                    href: "#",
                },
            ]}
        />
    );
}
