"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* Checkbox type */}
            <div className="story-row-container">
                <Toggle type="checkbox" indicator>
                    Checkbox unchecked
                </Toggle>
                <Toggle type="checkbox" indicator checked>
                    Checkbox checked
                </Toggle>
            </div>

            {/* Radio type */}
            <div className="story-row-container">
                <Toggle type="radio" indicator>
                    Radio unchecked
                </Toggle>
                <Toggle type="radio" indicator checked>
                    Radio checked
                </Toggle>
            </div>

            {/* Yes type */}
            <div className="story-row-container">
                <Toggle type="yes" indicator>
                    Yes unchecked
                </Toggle>
                <Toggle type="yes" indicator checked>
                    Yes checked
                </Toggle>
            </div>

            {/* No type */}
            <div className="story-row-container">
                <Toggle type="no" indicator>
                    No unchecked
                </Toggle>
                <Toggle type="no" indicator checked>
                    No checked
                </Toggle>
            </div>
        </div>
    );
}
