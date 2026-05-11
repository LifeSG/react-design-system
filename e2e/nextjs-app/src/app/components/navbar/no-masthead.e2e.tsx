"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { desktopNavItems, downloadActionButtons } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-no-masthead"
            masthead={false}
            selectedId="guides"
            items={{ desktop: desktopNavItems }}
            actionButtons={{ desktop: downloadActionButtons }}
        />
    );
}
