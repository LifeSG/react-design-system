"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-row-container">
            <Toggle
                type="checkbox"
                indicator
                removable
                data-testid="removable-unchecked"
            >
                Removable unchecked
            </Toggle>
            <Toggle
                type="checkbox"
                indicator
                removable
                checked
                data-testid="removable-checked"
            >
                Removable checked
            </Toggle>
            <Toggle
                type="checkbox"
                indicator
                removable
                disabled
                data-testid="removable-disabled"
            >
                Removable disabled
            </Toggle>
        </div>
    );
}
