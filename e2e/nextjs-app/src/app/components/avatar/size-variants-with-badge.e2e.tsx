"use client";

import { Avatar } from "@lifesg/react-design-system/avatar";
import { Badge } from "@lifesg/react-design-system/badge";

export default function Story() {
    const textVariants = ["Name", "name", "A", "123", ""];

    return (
        <div className="story-column-container">
            <div className="story-row-container">
                <h3>Default Size Avatar with Number Badge (Important Color)</h3>
            </div>
            <div className="story-row-container">
                <div
                    style={{
                        fontSize: "0.875rem",
                        minWidth: "120px",
                        alignSelf: "center",
                    }}
                >
                    number (3)
                </div>
                {textVariants.map((text, textIndex) => (
                    <Badge
                        key={`default-${textIndex}`}
                        variant="number"
                        count={3}
                        color="important"
                        data-testid={`badge-default-important-0-${textIndex}`}
                    >
                        <Avatar
                            sizeType="default"
                            data-testid={`avatar-default-important-0-${textIndex}`}
                        >
                            {text}
                        </Avatar>
                    </Badge>
                ))}
            </div>

            <div className="story-row-container">
                <h3>Small Size Avatar with Dot Badge (Important Color)</h3>
            </div>
            <div className="story-row-container">
                <div
                    style={{
                        fontSize: "0.875rem",
                        minWidth: "120px",
                        alignSelf: "center",
                    }}
                >
                    dot
                </div>
                {textVariants.map((text, textIndex) => (
                    <Badge
                        key={`small-${textIndex}`}
                        variant="dot"
                        color="important"
                        data-testid={`badge-small-important-2-${textIndex}`}
                    >
                        <Avatar
                            sizeType="small"
                            data-testid={`avatar-small-important-2-${textIndex}`}
                        >
                            {text}
                        </Avatar>
                    </Badge>
                ))}
            </div>
        </div>
    );
}
