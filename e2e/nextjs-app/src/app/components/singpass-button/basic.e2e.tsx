"use client";

import { SingpassButton } from "@lifesg/react-design-system/singpass-button";

export default function Story() {
    return (
        <div className="story-column-container" style={{ padding: "2rem" }}>
            <div className="story-row-container">
                <SingpassButton
                    data-testid="large-white"
                    sizeType="large"
                    styleType="white-filled"
                />
                <SingpassButton
                    data-testid="large-red"
                    sizeType="large"
                    styleType="red-filled"
                />
            </div>
            <div className="story-row-container">
                <SingpassButton
                    data-testid="default-white"
                    styleType="white-filled"
                />
                <SingpassButton
                    data-testid="default-red"
                    styleType="red-filled"
                />
            </div>
            <div className="story-row-container">
                <SingpassButton
                    data-testid="small-white"
                    sizeType="small"
                    styleType="white-filled"
                />
                <SingpassButton
                    data-testid="small-red"
                    sizeType="small"
                    styleType="red-filled"
                />
            </div>
        </div>
    );
}
