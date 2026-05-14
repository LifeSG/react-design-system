"use client";

import { LocalNavMenu } from "@lifesg/react-design-system/local-nav";
import { useState } from "react";

const ITEMS = [
    { id: "section-1", title: "Title 1" },
    { id: "section-2", title: "Title 2" },
    { id: "section-3", title: "Title 3" },
    { id: "section-4", title: "Title 4" },
];

export default function Story() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    return (
        <div className="story-row-container story-background">
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
