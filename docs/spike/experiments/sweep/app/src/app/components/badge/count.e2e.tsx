"use client";

import { Badge } from "@lifesg/react-design-system/badge";

export default function Story() {
    return (
        <div className="story-row-container">
            <Badge data-testid="badge-count-8" count={8} />
            <Badge data-testid="badge-count-88" count={88} />
            <Badge data-testid="badge-count-209" count={209} />
            <Badge data-testid="badge-count-1000" count={1000} />
            <Badge data-testid="badge-count-2090" count={2090} />
        </div>
    );
}
