"use client";

import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { Button } from "@lifesg/react-design-system/button";

export default function Story() {
    return (
        <div className="story-column-container">
            {(["default", "small"] as const).map((size) => (
                <div key={size} className="story-row-container">
                    {(["default", "secondary", "light", "link"] as const).map(
                        (style) => (
                            <Button
                                key={style}
                                sizeType={size}
                                styleType={style}
                                icon={<PlaceholderIcon />}
                                loading
                            >
                                {size} {style}
                            </Button>
                        )
                    )}
                    <Button
                        sizeType={size}
                        icon={<PlaceholderIcon />}
                        disabled
                        loading
                    >
                        {size} disabled
                    </Button>
                </div>
            ))}
        </div>
    );
}
