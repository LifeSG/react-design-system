"use client";

import { Alert } from "@lifesg/react-design-system/alert";

export default function Story() {
    return (
        <div className="story-column-container">
            <Alert
                type="info"
                sizeType="default"
                actionLink={{ href: "#", children: "Learn more" }}
                showIcon
            >
                Default size alert with link.
            </Alert>
            <Alert
                type="info"
                sizeType="default"
                maxCollapsedHeight={40}
                showIcon
            >
                Default size alert, collapsed.
                <br />
                &nbsp;
            </Alert>
            <Alert
                type="info"
                sizeType="small"
                maxCollapsedHeight={40}
                actionLink={{ href: "#", children: "Learn more" }}
                showIcon
            >
                Small size alert with link.
            </Alert>
            <Alert
                type="info"
                sizeType="small"
                maxCollapsedHeight={40}
                showIcon
            >
                Small size alert, collapsed.
                <br />
                &nbsp;
            </Alert>
        </div>
    );
}
