"use client";
import { Typography } from "@lifesg/react-design-system";
import { Filter } from "@lifesg/react-design-system/filter";

export default function Story() {
    return (
        <div className="story-column-container">
            <Filter.Page data-testid="page-wrapper">
                <div>
                    <Typography.BodyMD data-testid="page-content">
                        Custom filter page content
                    </Typography.BodyMD>
                </div>
            </Filter.Page>
        </div>
    );
}
