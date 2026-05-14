"use client";

import { UneditableSection } from "@lifesg/react-design-system/uneditable-section";
import { items } from "./uneditable-section-shared";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <UneditableSection
                data-testid="uneditable-section"
                title="Personal Information"
                description="Sample description"
                items={items}
                background={false}
            />
        </div>
    );
}
