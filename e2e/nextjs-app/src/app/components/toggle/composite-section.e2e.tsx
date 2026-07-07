"use client";
import { Toggle } from "@lifesg/react-design-system/toggle";

export default function Story() {
    return (
        <div className="story-column-container">
            {/* collapsible composite section */}
            <div className="story-row-container">
                <Toggle
                    data-testid="toggle-default"
                    indicator
                    compositeSection={{
                        collapsible: true,
                        children: (
                            <p>This is a collapsible composite section.</p>
                        ),
                    }}
                >
                    Collapsible composite section
                </Toggle>
                <Toggle
                    indicator
                    checked
                    compositeSection={{
                        collapsible: true,
                        children: (
                            <p>This is a collapsible composite section.</p>
                        ),
                    }}
                >
                    Collapsible composite section checked
                </Toggle>
                <Toggle
                    indicator
                    disabled
                    compositeSection={{
                        collapsible: true,
                        children: (
                            <p>This is a collapsible composite section.</p>
                        ),
                    }}
                >
                    Collapsible composite section disabled
                </Toggle>
                <Toggle
                    indicator
                    error
                    compositeSection={{
                        collapsible: true,
                        children: (
                            <p>This is a collapsible composite section.</p>
                        ),
                    }}
                >
                    Collapsible composite section error
                </Toggle>
            </div>

            {/* non-collapsible composite section */}
            <div className="story-row-container">
                <Toggle
                    indicator
                    compositeSection={{
                        collapsible: false,
                        children: (
                            <p>This is a non-collapsible composite section.</p>
                        ),
                    }}
                >
                    Non-collapsible composite section
                </Toggle>
                <Toggle
                    indicator
                    checked
                    compositeSection={{
                        collapsible: false,
                        children: (
                            <p>This is a non-collapsible composite section.</p>
                        ),
                    }}
                >
                    Non-collapsible composite section checked
                </Toggle>
                <Toggle
                    indicator
                    disabled
                    compositeSection={{
                        collapsible: false,
                        children: (
                            <p>This is a non-collapsible composite section.</p>
                        ),
                    }}
                >
                    Non-collapsible composite section disabled
                </Toggle>
                <Toggle
                    indicator
                    error
                    compositeSection={{
                        collapsible: false,
                        children: (
                            <p>This is a non-collapsible composite section.</p>
                        ),
                    }}
                >
                    Non-collapsible composite section error
                </Toggle>
            </div>

            {/* composite section with errors */}
            <div className="story-row-container">
                <Toggle
                    indicator
                    error
                    compositeSection={{
                        collapsible: true,
                        errors: ["Error in the composite section"],
                        children: (
                            <p>This is a composite section with errors.</p>
                        ),
                    }}
                >
                    Composite section with errors (collapsed)
                </Toggle>
                <Toggle
                    indicator
                    error
                    checked
                    compositeSection={{
                        collapsible: true,
                        initialExpanded: true,
                        errors: ["Error in the composite section"],
                        children: (
                            <p>This is a composite section with errors.</p>
                        ),
                    }}
                >
                    Composite section with errors (expanded)
                </Toggle>
            </div>
        </div>
    );
}
