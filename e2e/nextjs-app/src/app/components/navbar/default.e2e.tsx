"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { desktopNavItems, downloadActionButtons } from "./common";

export default function Story() {
    return (
        <div className="story-column-container">
            <Navbar
                data-testid="navbar-default"
                selectedId="guides"
                items={{ desktop: desktopNavItems }}
                actionButtons={{ desktop: downloadActionButtons }}
            />
        </div>
    );
}
