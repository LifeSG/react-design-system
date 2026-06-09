"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { Typography } from "@lifesg/react-design-system";

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
