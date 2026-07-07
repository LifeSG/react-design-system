"use client";

import { Avatar } from "@lifesg/react-design-system/avatar";

export default function Story() {
    const textVariants = ["Name", "name", "A", "123", ""];

    return (
        <div className="story-row-container">
            {textVariants.map((text, index) => (
                <Avatar
                    key={index}
                    sizeType="small"
                    data-testid={`avatar-small-${index}`}
                >
                    {text}
                </Avatar>
            ))}
        </div>
    );
}
