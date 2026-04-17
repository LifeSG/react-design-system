"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            <div className="story-row-container">
                <Toggle type="checkbox" indicator removable>
                    Removable unchecked
                </Toggle>
                <Toggle type="checkbox" indicator removable checked>
                    Removable checked
                </Toggle>
                <Toggle type="checkbox" indicator removable disabled>
                    Removable disabled
                </Toggle>
            </div>
        </div>
    );
}
