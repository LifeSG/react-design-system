"use client";

import { Layout } from "@lifesg/react-design-system/layout";
import { useEffect } from "react";
import styles from "./media-query-specificity.module.css";

function DemoBlock({
    title,
    children,
}: Readonly<{
    title: string;
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.block}>
            <h3>{title}</h3>
            {children}
        </div>
    );
}

export default function Story() {
    useEffect(() => {
        document.body.classList.add("fds-breakpoint-sm-min");

        return () => {
            document.body.classList.remove("fds-breakpoint-sm-min");
        };
    }, []);

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>MediaQuery specificity repro</h2>
            <p className={styles.note}>
                This story uses <code>Layout.Container</code> (which already has
                pseudo media queries) and applies a consumer class that tries to
                override horizontal padding to 0.
            </p>
            <p className={styles.note}>
                It also forces <code>body.fds-breakpoint-sm-min</code> so the
                container media-query branch is active.
            </p>

            <DemoBlock title="Layout.Container + consumer padding override">
                <Layout.Container
                    data-testid="layout-container-specificity"
                    className={styles["consumer-padding-override"]}
                >
                    <div className={styles.content}>Padding should be 0</div>
                </Layout.Container>
            </DemoBlock>

            <DemoBlock title="Layout.Container (flex-column) + consumer padding override">
                <Layout.Container
                    data-testid="layout-container-flex-column-specificity"
                    type="flex-column"
                    className={styles["consumer-padding-override"]}
                >
                    <div className={styles.content}>Top item</div>
                    <div className={styles.content}>Bottom item</div>
                </Layout.Container>
            </DemoBlock>

            <DemoBlock title="Layout.Container (grid) + consumer override">
                <Layout.Container
                    data-testid="layout-container-grid-specificity"
                    type="grid"
                    className={styles["consumer-grid-override"]}
                >
                    <Layout.ColDiv xxsCols={4} smCols={4}>
                        <div className={styles.content}>
                            Grid items gap should be 0
                        </div>
                    </Layout.ColDiv>
                    <Layout.ColDiv xxsCols={4} smCols={4}>
                        <div className={styles.content}>
                            Grid items gap should be 0
                        </div>
                    </Layout.ColDiv>
                </Layout.Container>
            </DemoBlock>

            <DemoBlock title=" Layout.Content + consumer padding override">
                <div className={styles["consumer-content-override"]}>
                    <Layout.Content data-testid="layout-content-specificity">
                        <div className={styles.content}>
                            Nested content container padding should be 0
                        </div>
                    </Layout.Content>
                </div>
            </DemoBlock>
        </div>
    );
}
