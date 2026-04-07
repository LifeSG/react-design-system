"use client";

import { Layout } from "@lifesg/react-design-system/layout";

export default function SectionStory() {
    return (
        <Layout.Section data-testid="test-section" className="custom-section">
            <p>Section content</p>
        </Layout.Section>
    );
}
