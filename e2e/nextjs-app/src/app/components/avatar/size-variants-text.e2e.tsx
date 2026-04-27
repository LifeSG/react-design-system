"use client";

import { Avatar } from "@lifesg/react-design-system/avatar";

export default function Story() {
    const textVariants = ["Name", "name", "A", "123", ""];

    return (
        <div className="story-column-container">
            <div className="story-row-container">
                <h3>Default Size</h3>
            </div>
            <div className="story-row-container">
                {textVariants.map((text, index) => (
                    <Avatar
                        key={`default-${index}`}
                        sizeType="default"
                        data-testid={`avatar-default-${index}`}
                    >
                        {text}
                    </Avatar>
                ))}
            </div>

            <div className="story-row-container">
                <h3>Small Size</h3>
            </div>
            <div className="story-row-container">
                {textVariants.map((text, index) => (
                    <Avatar
                        key={`small-${index}`}
                        sizeType="small"
                        data-testid={`avatar-small-${index}`}
                    >
                        {text}
                    </Avatar>
                ))}
            </div>
        </div>
    );
}
