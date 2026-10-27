"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* bordered + indicator */}
            <div className="story-row-container">
                <Toggle type="checkbox" indicator data-testid="toggle-default">
                    Bordered + indicator
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    checked
                    data-testid="toggle-checked"
                >
                    Bordered + indicator checked
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    disabled
                    data-testid="toggle-disabled"
                >
                    Bordered + indicator disabled
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    checked
                    disabled
                    data-testid="toggle-checked-disabled"
                >
                    Bordered + indicator checked disabled
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    error
                    data-testid="toggle-error"
                >
                    Bordered + indicator error
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    error
                    checked
                    data-testid="toggle-error-checked"
                >
                    Bordered + indicator error checked
                </Toggle>
            </div>

            {/* bordered + no indicator */}
            <div className="story-row-container">
                <Toggle type="checkbox">Bordered</Toggle>
                <Toggle type="checkbox" checked>
                    Bordered checked
                </Toggle>
                <Toggle type="checkbox" disabled>
                    Bordered disabled
                </Toggle>
                <Toggle type="checkbox" checked disabled>
                    Bordered checked disabled
                </Toggle>
                <Toggle type="checkbox" error>
                    Bordered error
                </Toggle>
                <Toggle type="checkbox" error checked>
                    Bordered error checked
                </Toggle>
            </div>

            {/* no-border + indicator */}
            <div className="story-row-container">
                <Toggle type="checkbox" indicator styleType="no-border">
                    No-border + indicator
                </Toggle>
                <Toggle type="checkbox" indicator styleType="no-border" checked>
                    No-border + indicator checked
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    styleType="no-border"
                    disabled
                >
                    No-border + indicator disabled
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    styleType="no-border"
                    checked
                    disabled
                >
                    No-border + indicator checked disabled
                </Toggle>
                <Toggle type="checkbox" indicator styleType="no-border" error>
                    No-border + indicator error
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    styleType="no-border"
                    error
                    checked
                >
                    No-border + indicator error checked
                </Toggle>
            </div>

            {/* no-border + no indicator */}
            <div className="story-row-container">
                <Toggle type="checkbox" styleType="no-border">
                    No-border
                </Toggle>
                <Toggle type="checkbox" styleType="no-border" checked>
                    No-border checked
                </Toggle>
                <Toggle type="checkbox" styleType="no-border" disabled>
                    No-border disabled
                </Toggle>
                <Toggle type="checkbox" styleType="no-border" checked disabled>
                    No-border checked disabled
                </Toggle>
                <Toggle type="checkbox" styleType="no-border" error>
                    No-border error
                </Toggle>
                <Toggle type="checkbox" styleType="no-border" error checked>
                    No-border error checked
                </Toggle>
            </div>
        </div>
    );
}
