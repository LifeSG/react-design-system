"use client";
import { Divider, Layout } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div className="story-column-container">
            <h5>Full-width on grid layout</h5>
            <Divider data-testid="divider-solid-grid" layoutType="grid" />
            <Divider
                data-testid="divider-dashed-grid"
                layoutType="grid"
                lineStyle="dashed"
            />
            <h5>Column props specification</h5>
            <Layout.Content type="grid">
                <Divider
                    data-testid="divider-solid-grid-cols"
                    layoutType="grid"
                    xxsCols={[1, 5]}
                    mdCols={[1, 6]}
                    xlCols={[1, 8]}
                />
            </Layout.Content>
            <Layout.Content type="grid">
                <Divider
                    data-testid="divider-dashed-grid-cols"
                    layoutType="grid"
                    lineStyle="dashed"
                    xxsCols={[1, 5]}
                    mdCols={[1, 6]}
                    xlCols={[1, 8]}
                />
            </Layout.Content>
        </div>
    );
}
