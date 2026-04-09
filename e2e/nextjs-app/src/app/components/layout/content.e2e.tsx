"use client";

import { Layout } from "@lifesg/react-design-system/layout";

export default function ContentStory() {
    return (
        <>
            <Layout.Content
                data-testid="test-content"
                className="layout-test-content"
            >
                <p>Content child</p>
            </Layout.Content>
            <Layout.Content
                data-testid="content-grid"
                type="grid"
                className="layout-content-grid"
            >
                <Layout.ColDiv
                    data-testid="content-col-div"
                    xxsCols={2}
                    className="layout-content-col-div"
                >
                    Col child
                </Layout.ColDiv>
            </Layout.Content>
            <Layout.Content
                data-testid="content-stretched"
                stretch
                className="layout-content-stretched"
            >
                <p>Stretched content</p>
            </Layout.Content>
        </>
    );
}
