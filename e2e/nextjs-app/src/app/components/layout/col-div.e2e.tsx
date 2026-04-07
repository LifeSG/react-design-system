"use client";

import { Layout } from "@lifesg/react-design-system/layout";

export default function ColDivStory() {
    return (
        <Layout.Container type="grid" data-testid="col-div-grid">
            <Layout.ColDiv
                data-testid="col-div-span"
                xxsCols={2}
                xsCols={3}
                mdCols={4}
            >
                Span child
            </Layout.ColDiv>
            <Layout.ColDiv data-testid="col-div-start-span" xxsCols={[2, 4]}>
                Start/span child
            </Layout.ColDiv>
            <Layout.ColDiv
                data-testid="col-div-end-minus-one"
                xxsCols={[1, -1]}
            >
                Full width child
            </Layout.ColDiv>
        </Layout.Container>
    );
}
