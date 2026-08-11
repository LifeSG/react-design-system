"use client";

import { Layout } from "@lifesg/react-design-system/layout";

import styles from "./layout.module.css";

export default function SectionStory() {
    return (
        <Layout.Section
            data-testid="test-section"
            className={`custom-section ${styles["layout-test-section"]}`}
        >
            <p>Section content</p>
        </Layout.Section>
    );
}
