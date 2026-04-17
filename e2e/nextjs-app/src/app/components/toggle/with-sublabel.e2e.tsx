"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            <div className="story-row-container">
                <Toggle
                    type="checkbox"
                    indicator
                    subLabel="This is a sub label"
                >
                    With sub label
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    checked
                    subLabel="This is a sub label"
                >
                    With sub label checked
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    disabled
                    subLabel="This is a sub label"
                >
                    With sub label disabled
                </Toggle>
            </div>
        </div>
    );
}
