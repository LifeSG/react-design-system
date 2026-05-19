"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { navItems, downloadActionButtons } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-no-masthead"
            masthead={false}
            selectedId="guides"
            items={{ desktop: navItems }}
            actionButtons={{ desktop: downloadActionButtons }}
        />
    );
}
