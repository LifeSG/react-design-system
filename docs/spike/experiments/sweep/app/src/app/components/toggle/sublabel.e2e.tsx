"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            <div className="story-row-container">
                <Toggle indicator subLabel="This is a sub label">
                    With sub label
                </Toggle>
                <Toggle indicator checked subLabel="This is a sub label">
                    With sub label checked
                </Toggle>
                <Toggle indicator disabled subLabel="This is a sub label">
                    With sub label disabled
                </Toggle>
                <Toggle indicator error subLabel="This is a sub label">
                    With sub label error
                </Toggle>
                <Toggle indicator error checked subLabel="This is a sub label">
                    With sub label error checked
                </Toggle>
            </div>
            <div className="story-row-container">
                <Toggle
                    indicator
                    styleType="no-border"
                    subLabel="This is a sub label"
                >
                    With sub label no border
                </Toggle>
                <Toggle
                    indicator
                    styleType="no-border"
                    checked
                    subLabel="This is a sub label"
                >
                    With sub label no border checked
                </Toggle>
                <Toggle
                    indicator
                    styleType="no-border"
                    disabled
                    subLabel="This is a sub label"
                >
                    With sub label no border disabled
                </Toggle>
                <Toggle
                    indicator
                    styleType="no-border"
                    error
                    subLabel="This is a sub label"
                >
                    With sub label no border error
                </Toggle>
                <Toggle
                    indicator
                    styleType="no-border"
                    error
                    checked
                    subLabel="This is a sub label"
                >
                    With sub label no border error checked
                </Toggle>
            </div>
        </div>
    );
}
