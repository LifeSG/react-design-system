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

function ComparisonPane({
    label,
    children,
}: Readonly<{
    label: string;
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.variant}>
            <p className={styles["variant-label"]}>{label}</p>
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
                Each example shows the default layout on the left and the
                consumer override on the right.
            </p>

            <DemoBlock title="Layout.Container + consumer padding override">
                <div
                    data-testid="layout-container-specificity"
                    className={styles.comparison}
                >
                    <ComparisonPane label="Default">
                        <Layout.Container>
                            <div className={styles.content} />
                        </Layout.Container>
                    </ComparisonPane>
                    <ComparisonPane label="Override">
                        <Layout.Container
                            className={styles["consumer-padding-override"]}
                        >
                            <div className={styles.content} />
                        </Layout.Container>
                    </ComparisonPane>
                </div>
            </DemoBlock>

            <DemoBlock title="Layout.Container (flex-column) + consumer padding override">
                <div
                    data-testid="layout-container-flex-column-specificity"
                    className={styles.comparison}
                >
                    <ComparisonPane label="Default">
                        <Layout.Container type="flex-column">
                            <div className={styles.content} />
                            <div className={styles.content} />
                        </Layout.Container>
                    </ComparisonPane>
                    <ComparisonPane label="Override">
                        <Layout.Container
                            type="flex-column"
                            className={styles["consumer-padding-override"]}
                        >
                            <div className={styles.content} />
                            <div className={styles.content} />
                        </Layout.Container>
                    </ComparisonPane>
                </div>
            </DemoBlock>

            <DemoBlock title="Layout.Container (grid) + consumer override">
                <div
                    data-testid="layout-container-grid-specificity"
                    className={styles.comparison}
                >
                    <ComparisonPane label="Default">
                        <Layout.Container type="grid">
                            <Layout.ColDiv xxsCols={4} smCols={4}>
                                <div className={styles.content} />
                            </Layout.ColDiv>
                            <Layout.ColDiv xxsCols={4} smCols={4}>
                                <div className={styles.content} />
                            </Layout.ColDiv>
                        </Layout.Container>
                    </ComparisonPane>
                    <ComparisonPane label="Override">
                        <Layout.Container
                            type="grid"
                            className={styles["consumer-grid-override"]}
                        >
                            <Layout.ColDiv xxsCols={4} smCols={4}>
                                <div className={styles.content} />
                            </Layout.ColDiv>
                            <Layout.ColDiv xxsCols={4} smCols={4}>
                                <div className={styles.content} />
                            </Layout.ColDiv>
                        </Layout.Container>
                    </ComparisonPane>
                </div>
            </DemoBlock>

            <DemoBlock title="Layout.Content + consumer padding override">
                <div
                    data-testid="layout-content-specificity"
                    className={styles.comparison}
                >
                    <ComparisonPane label="Default">
                        <Layout.Content>
                            <div className={styles.content} />
                        </Layout.Content>
                    </ComparisonPane>
                    <ComparisonPane label="Override">
                        <div className={styles["consumer-content-override"]}>
                            <Layout.Content>
                                <div className={styles.content} />
                            </Layout.Content>
                        </div>
                    </ComparisonPane>
                </div>
            </DemoBlock>
        </div>
    );
}
