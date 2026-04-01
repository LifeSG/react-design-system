"use client";

import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { Button } from "@lifesg/react-design-system/button";

export default function Story() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                padding: "2rem",
            }}
        >
            {(["default", "small"] as const).map((size) => (
                <div
                    key={size}
                    style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                >
                    {(["default", "secondary", "light", "link"] as const).map(
                        (style) => (
                            <Button
                                key={style}
                                sizeType={size}
                                styleType={style}
                                icon={<PlaceholderIcon />}
                                iconPosition="right"
                            >
                                {size} {style}
                            </Button>
                        )
                    )}
                    <Button
                        sizeType={size}
                        icon={<PlaceholderIcon />}
                        iconPosition="right"
                        disabled
                    >
                        {size} disabled
                    </Button>
                </div>
            ))}
        </div>
    );
}
