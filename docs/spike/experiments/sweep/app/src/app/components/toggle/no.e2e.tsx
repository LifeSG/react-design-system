"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* bordered + indicator */}
            <div className="story-row-container">
                <Toggle type="no" indicator>
                    Bordered + indicator
                </Toggle>
                <Toggle type="no" indicator checked>
                    Bordered + indicator checked
                </Toggle>
                <Toggle type="no" indicator disabled>
                    Bordered + indicator disabled
                </Toggle>
                <Toggle type="no" indicator checked disabled>
                    Bordered + indicator checked disabled
                </Toggle>
                <Toggle type="no" indicator error>
                    Bordered + indicator error
                </Toggle>
                <Toggle type="no" indicator error checked>
                    Bordered + indicator error checked
                </Toggle>
            </div>

            {/* bordered + no indicator */}
            <div className="story-row-container">
                <Toggle type="no">Bordered</Toggle>
                <Toggle type="no" checked>
                    Bordered checked
                </Toggle>
                <Toggle type="no" disabled>
                    Bordered disabled
                </Toggle>
                <Toggle type="no" checked disabled>
                    Bordered checked disabled
                </Toggle>
                <Toggle type="no" error>
                    Bordered error
                </Toggle>
                <Toggle type="no" error checked>
                    Bordered error checked
                </Toggle>
            </div>

            {/* no-border + indicator */}
            <div className="story-row-container">
                <Toggle type="no" indicator styleType="no-border">
                    No-border + indicator
                </Toggle>
                <Toggle type="no" indicator styleType="no-border" checked>
                    No-border + indicator checked
                </Toggle>
                <Toggle type="no" indicator styleType="no-border" disabled>
                    No-border + indicator disabled
                </Toggle>
                <Toggle
                    type="no"
                    indicator
                    styleType="no-border"
                    checked
                    disabled
                >
                    No-border + indicator checked disabled
                </Toggle>
                <Toggle type="no" indicator styleType="no-border" error>
                    No-border + indicator error
                </Toggle>
                <Toggle type="no" indicator styleType="no-border" error checked>
                    No-border + indicator error checked
                </Toggle>
            </div>

            {/* no-border + no indicator */}
            <div className="story-row-container">
                <Toggle type="no" styleType="no-border">
                    No-border
                </Toggle>
                <Toggle type="no" styleType="no-border" checked>
                    No-border checked
                </Toggle>
                <Toggle type="no" styleType="no-border" disabled>
                    No-border disabled
                </Toggle>
                <Toggle type="no" styleType="no-border" checked disabled>
                    No-border checked disabled
                </Toggle>
                <Toggle type="no" styleType="no-border" error>
                    No-border error
                </Toggle>
                <Toggle type="no" styleType="no-border" error checked>
                    No-border error checked
                </Toggle>
            </div>
        </div>
    );
}
