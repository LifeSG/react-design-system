"use client";

import { Button } from "@lifesg/react-design-system";
import { Avatar } from "@lifesg/react-design-system/avatar";
import { Badge } from "@lifesg/react-design-system/badge";

export default function Story() {
    return (
        <div className="story-row-container">
            <Badge data-testid="badge-anchored-dot" count={8} variant="dot">
                <Button styleType="secondary" />
            </Badge>

            <Badge
                data-testid="badge-anchored-offset"
                count={8}
                badgeOffset={["25%", "50%"]}
            >
                <Button styleType="secondary" />
            </Badge>

            <Badge
                data-testid="badge-anchored-dot-border"
                count={8}
                variant="dot-with-border"
                badgeOffset={["-4px", "4px"]}
            >
                <Avatar>Example</Avatar>
            </Badge>

            <Badge data-testid="badge-anchored-avatar" count={8}>
                <Avatar>Example</Avatar>
            </Badge>
        </div>
    );
}
