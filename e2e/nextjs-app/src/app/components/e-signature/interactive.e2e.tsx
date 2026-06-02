"use client";
import { ESignature } from "@lifesg/react-design-system/e-signature";
import { useState } from "react";

export default function Story() {
    const [value, setValue] = useState<string | null>(null);

    return (
        <div className="story-column-container story-background">
            <ESignature
                data-testid="esig"
                id="esig"
                onChange={setValue}
                value={value ?? undefined}
            />
            <span data-testid="has-signature">{value ? "true" : "false"}</span>
        </div>
    );
}
