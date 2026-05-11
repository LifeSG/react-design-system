"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { desktopNavItems, downloadActionButtons } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-hide-nav-branding"
            hideNavBranding
            selectedId="guides"
            items={{ desktop: desktopNavItems }}
            actionButtons={{ desktop: downloadActionButtons }}
        />
    );
}
