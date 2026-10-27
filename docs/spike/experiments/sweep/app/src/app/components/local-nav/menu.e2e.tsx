"use client";

import { LocalNavMenu } from "@lifesg/react-design-system/local-nav";
import { useState } from "react";

const ITEMS = Array.from({ length: 4 }, (_, i) => ({
    id: `section-${i + 1}`,
    title: `Title ${i + 1}`,
}));

export default function Story() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    return (
        <div className="story-background">
            <LocalNavMenu
                data-testid="local-nav-menu"
                items={ITEMS}
                selectedItemIndex={selectedItemIndex}
                onNavItemSelect={(_e, _item, index) =>
                    setSelectedItemIndex(index)
                }
            />
        </div>
    );
}
