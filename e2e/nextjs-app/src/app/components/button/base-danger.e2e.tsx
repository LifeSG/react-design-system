"use client";

import { Button } from "@lifesg/react-design-system/button";

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
                                danger
                            >
                                {size} {style}
                            </Button>
                        )
                    )}
                    <Button sizeType={size} danger disabled>
                        {size} disabled
                    </Button>
                </div>
            ))}
        </div>
    );
}
