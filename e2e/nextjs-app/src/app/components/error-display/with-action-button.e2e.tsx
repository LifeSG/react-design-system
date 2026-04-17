"use client";
import { ErrorDisplay } from "@lifesg/react-design-system/error-display";
import { useState } from "react";

export default function Story() {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <ErrorDisplay
                type="unsupported-browser"
                actionButton={{
                    children: "Continue anyway",
                    onClick: () => setClicked(true),
                }}
            />
            {clicked && (
                <div data-testid="continue-button-click-result">clicked</div>
            )}
        </>
    );
}
