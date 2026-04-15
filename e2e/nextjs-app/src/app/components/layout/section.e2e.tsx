"use client";

import styles from "./layout.module.css";
import { Layout } from "@lifesg/react-design-system/layout";

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
