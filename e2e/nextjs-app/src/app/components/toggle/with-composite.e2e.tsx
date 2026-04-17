"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* Expandable composite (collapsed by default) */}
            <div className="story-row-container">
                <Toggle
                    type="checkbox"
                    indicator
                    compositeSection={{
                        children: <p>Composite section content</p>,
                        collapsible: true,
                        initialExpanded: false,
                    }}
                >
                    With composite (collapsed)
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    checked
                    compositeSection={{
                        children: <p>Composite section content</p>,
                        collapsible: true,
                        initialExpanded: true,
                    }}
                >
                    With composite (expanded)
                </Toggle>
            </div>

            {/* With errors (collapsed state shows error) */}
            <div className="story-row-container">
                <Toggle
                    type="checkbox"
                    indicator
                    checked
                    error
                    compositeSection={{
                        children: <p>Composite section content</p>,
                        collapsible: true,
                        initialExpanded: false,
                        errors: ["Error item 1", "Error item 2"],
                    }}
                >
                    With composite errors (collapsed)
                </Toggle>
                <Toggle
                    type="checkbox"
                    indicator
                    checked
                    error
                    compositeSection={{
                        children: <p>Composite section content</p>,
                        collapsible: true,
                        initialExpanded: true,
                        errors: ["Error item 1", "Error item 2"],
                    }}
                >
                    With composite errors (expanded)
                </Toggle>
            </div>
        </div>
    );
}
