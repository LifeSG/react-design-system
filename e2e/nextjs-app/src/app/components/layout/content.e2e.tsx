"use client";

import { Layout } from "@lifesg/react-design-system/layout";

export default function ContentStory() {
    return (
        <>
            <Layout.Content data-testid="test-content">
                <p>Content child</p>
            </Layout.Content>
            <Layout.Content data-testid="content-grid" type="grid">
                <Layout.ColDiv data-testid="content-col-div" xxsCols={2}>
                    Col child
                </Layout.ColDiv>
            </Layout.Content>
            <Layout.Content data-testid="content-stretched" stretch>
                <p>Stretched content</p>
            </Layout.Content>
        </>
    );
}
