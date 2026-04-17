"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* Default styleType */}
            <div className="story-row-container">
                <Toggle type="checkbox" indicator>
                    Default
                </Toggle>
                <Toggle type="checkbox" indicator checked>
                    Default checked
                </Toggle>
                <Toggle type="checkbox" indicator disabled>
                    Default disabled
                </Toggle>
                <Toggle type="checkbox" indicator checked disabled>
                    Default checked disabled
                </Toggle>
                <Toggle type="checkbox" indicator error>
                    Default error
                </Toggle>
                <Toggle type="checkbox" indicator error checked>
                    Default error checked
                </Toggle>
                <Toggle type="checkbox" indicator error disabled>
                    Default error disabled
                </Toggle>
            </div>

            {/* No-border styleType */}
            <div className="story-row-container">
                <Toggle type="checkbox" indicator styleType="no-border">
                    No-border
                </Toggle>
                <Toggle type="checkbox" indicator styleType="no-border" checked>
                    No-border checked
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    styleType="no-border"
                    disabled
                >
                    No-border disabled
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    styleType="no-border"
                    checked
                    disabled
                >
                    No-border checked disabled
                </Toggle>
                <Toggle type="checkbox" indicator styleType="no-border" error>
                    No-border error
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    styleType="no-border"
                    error
                    checked
                >
                    No-border error checked
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    styleType="no-border"
                    error
                    disabled
                >
                    No-border error disabled
                </Toggle>
            </div>
        </div>
    );
}
