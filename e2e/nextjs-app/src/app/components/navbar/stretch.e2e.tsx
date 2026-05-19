"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { navItems, downloadActionButtons } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-stretch"
            layout="stretch"
            selectedId="guides"
            items={{ desktop: navItems }}
            actionButtons={{ desktop: downloadActionButtons }}
        />
    );
}
