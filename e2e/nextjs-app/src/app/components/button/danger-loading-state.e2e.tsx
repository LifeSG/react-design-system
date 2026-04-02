"use client";

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
            {(["large", "default", "small"] as const).map((size) => (
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
                                danger
                                loading
                            >
                                {size} {style}
                            </Button>
                        )
                    )}
                </div>
            ))}
        </div>
    );
}
