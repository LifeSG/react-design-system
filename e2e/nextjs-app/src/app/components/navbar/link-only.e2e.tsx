"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { navItems } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-links-no-action-button"
            selectedId="guides"
            items={{ desktop: navItems }}
        />
    );
}
