"use client";

import { Layout } from "@lifesg/react-design-system/layout";

export default function ContainerStory() {
    return (
        <>
            <Layout.Container
                data-testid="container-flex"
                type="flex"
                className="layout-container-flex"
            >
                <span>Flex child</span>
            </Layout.Container>
            <Layout.Container
                data-testid="container-flex-column"
                type="flex-column"
                className="layout-container-flex-column"
            >
                <span>Flex column child</span>
            </Layout.Container>
            <Layout.Container
                data-testid="container-grid"
                type="grid"
                className="layout-container-grid"
            >
                <span>Grid child</span>
            </Layout.Container>
            <Layout.Container
                data-testid="container-stretched"
                type="flex"
                stretch
                className="layout-container-stretched"
            >
                <span>Stretched child</span>
            </Layout.Container>
        </>
    );
}
