"use client";

import { Masthead } from "@lifesg/react-design-system/masthead";

export default function Story() {
    return (
        <div className="story-column-container">
            <div data-testid="masthead-stretch">
                <Masthead stretch />
            </div>
        </div>
    );
}
