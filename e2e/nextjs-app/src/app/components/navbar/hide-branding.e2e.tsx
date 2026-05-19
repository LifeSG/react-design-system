"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { navItems, downloadActionButtons } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-hide-branding"
            hideNavBranding
            selectedId="guides"
            items={{ desktop: navItems }}
            actionButtons={{ desktop: downloadActionButtons }}
        />
    );
}
