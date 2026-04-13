"use client";
import { Divider, Layout } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Divider data-testid="divider-solid-grid" layoutType="grid" />
            <Divider
                data-testid="divider-dashed-grid"
                layoutType="grid"
                lineStyle="dashed"
            />
        </Layout.Content>
    );
}
