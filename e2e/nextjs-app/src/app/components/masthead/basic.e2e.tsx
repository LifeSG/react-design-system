"use client";

import { Masthead } from "@lifesg/react-design-system/masthead";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <div data-testid="masthead-default">
                <Masthead />
            </div>
        </div>
    );
}
