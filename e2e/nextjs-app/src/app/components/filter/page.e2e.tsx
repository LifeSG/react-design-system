"use client";
import { Filter } from "@lifesg/react-design-system/filter";
import { Typography } from "@lifesg/react-design-system";
import { useState } from "react";

export default function Story() {
    const [dismissCount, setDismissCount] = useState(0);
    const [doneCount, setDoneCount] = useState(0);

    return (
        <div className="story-column-container" data-testid="page-wrapper">
            <Filter.Page
                onDismiss={() => setDismissCount((c) => c + 1)}
                onDone={() => setDoneCount((c) => c + 1)}
            >
                <div>
                    <Typography.BodyMD data-testid="page-content">
                        Custom filter page content
                    </Typography.BodyMD>
                    <Typography.BodySM data-testid="dismiss-count">
                        Dismiss count: {dismissCount}
                    </Typography.BodySM>
                    <Typography.BodySM data-testid="done-count">
                        Done count: {doneCount}
                    </Typography.BodySM>
                </div>
            </Filter.Page>
        </div>
    );
}
