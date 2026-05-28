"use client";

import { Button } from "@lifesg/react-design-system/button";
import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";

export default function Story() {
    return (
        <div className="story-column-container">
            {(["large", "default", "small"] as const).map((size) => (
                <div key={size} className="story-row-container">
                    {(["default", "secondary", "light", "link"] as const).map(
                        (style) => (
                            <Button
                                key={style}
                                sizeType={size}
                                styleType={style}
                                icon={<PlaceholderIcon />}
                                danger
                                aria-label={`${size} ${style} danger`}
                            />
                        )
                    )}
                    <Button
                        sizeType={size}
                        disabled
                        icon={<PlaceholderIcon />}
                        danger
                        aria-label={`${size} disabled`}
                    />
                </div>
            ))}
        </div>
    );
}
