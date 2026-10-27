"use client";
import { ESignature } from "@lifesg/react-design-system/e-signature";
import { useState } from "react";

export default function Story() {
    const [value, setValue] = useState<string | null | undefined>();

    return (
        <div className="story-column-container story-background">
            <ESignature
                data-testid="esig"
                onChange={setValue}
                value={value ?? undefined}
            />
        </div>
    );
}
