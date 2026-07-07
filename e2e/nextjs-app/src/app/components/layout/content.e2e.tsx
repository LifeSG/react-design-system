"use client";

import styles from "./layout.module.css";
import { Layout } from "@lifesg/react-design-system/layout";

export default function ContentStory() {
    return (
        <>
            <Layout.Content
                data-testid="test-content"
                className={styles["layout-test-content"]}
            >
                <p>Flex child</p>
                <p>Flex child</p>
            </Layout.Content>
            <Layout.Content
                data-testid="content-grid"
                type="grid"
                className={styles["layout-content-grid"]}
            >
                <p>Col child</p>
                <p>Col child</p>
            </Layout.Content>
            <Layout.Content
                data-testid="content-stretched"
                stretch
                className={styles["layout-content-stretched"]}
            >
                <p>Stretched content</p>
            </Layout.Content>
        </>
    );
}
