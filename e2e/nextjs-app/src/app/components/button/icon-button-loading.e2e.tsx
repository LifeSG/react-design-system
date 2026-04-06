"use client";

import { BoxIcon } from "@lifesg/react-icons/box";
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
                                icon={<BoxIcon />}
                                loading
                                aria-label={`${size} ${style} loading`}
                            />
                        )
                    )}
                    <Button
                        sizeType={size}
                        disabled
                        icon={<BoxIcon />}
                        loading
                        aria-label={`${size} disabled`}
                    />
                </div>
            ))}
        </div>
    );
}
