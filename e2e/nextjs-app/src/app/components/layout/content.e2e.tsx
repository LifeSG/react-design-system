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
                <p>Content child</p>
            </Layout.Content>
            <Layout.Content
                data-testid="content-grid"
                type="grid"
                className={styles["layout-content-grid"]}
            >
                <Layout.ColDiv
                    data-testid="content-col-div"
                    xxsCols={2}
                    className={styles["layout-content-col-div"]}
                >
                    Col child
                </Layout.ColDiv>
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
