"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* bordered + indicator */}
            <div className="story-row-container">
                <Toggle type="yes" indicator>
                    Bordered + indicator
                </Toggle>
                <Toggle type="yes" indicator checked>
                    Bordered + indicator checked
                </Toggle>
                <Toggle type="yes" indicator disabled>
                    Bordered + indicator disabled
                </Toggle>
                <Toggle type="yes" indicator checked disabled>
                    Bordered + indicator checked disabled
                </Toggle>
                <Toggle type="yes" indicator error>
                    Bordered + indicator error
                </Toggle>
                <Toggle type="yes" indicator error checked>
                    Bordered + indicator error checked
                </Toggle>
            </div>

            {/* bordered + no indicator */}
            <div className="story-row-container">
                <Toggle type="yes">Bordered</Toggle>
                <Toggle type="yes" checked>
                    Bordered checked
                </Toggle>
                <Toggle type="yes" disabled>
                    Bordered disabled
                </Toggle>
                <Toggle type="yes" checked disabled>
                    Bordered checked disabled
                </Toggle>
                <Toggle type="yes" error>
                    Bordered error
                </Toggle>
                <Toggle type="yes" error checked>
                    Bordered error checked
                </Toggle>
            </div>

            {/* no-border + indicator */}
            <div className="story-row-container">
                <Toggle type="yes" indicator styleType="no-border">
                    No-border + indicator
                </Toggle>
                <Toggle type="yes" indicator styleType="no-border" checked>
                    No-border + indicator checked
                </Toggle>
                <Toggle type="yes" indicator styleType="no-border" disabled>
                    No-border + indicator disabled
                </Toggle>
                <Toggle
                    type="yes"
                    indicator
                    styleType="no-border"
                    checked
                    disabled
                >
                    No-border + indicator checked disabled
                </Toggle>
                <Toggle type="yes" indicator styleType="no-border" error>
                    No-border + indicator error
                </Toggle>
                <Toggle
                    type="yes"
                    indicator
                    styleType="no-border"
                    error
                    disabled
                >
                    No-border + indicator error checked
                </Toggle>
            </div>

            {/* no-border + no indicator */}
            <div className="story-row-container">
                <Toggle type="yes" styleType="no-border">
                    No-border
                </Toggle>
                <Toggle type="yes" styleType="no-border" checked>
                    No-border checked
                </Toggle>
                <Toggle type="yes" styleType="no-border" disabled>
                    No-border disabled
                </Toggle>
                <Toggle type="yes" styleType="no-border" checked disabled>
                    No-border checked disabled
                </Toggle>
                <Toggle type="yes" styleType="no-border" error>
                    No-border error
                </Toggle>
                <Toggle type="yes" styleType="no-border" error checked>
                    No-border error checked
                </Toggle>
            </div>
        </div>
    );
}
