"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";

import { downloadActionButtons, navItemsWithSubmenuGrid } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-submenu-grid"
            items={{ desktop: navItemsWithSubmenuGrid }}
            actionButtons={{ desktop: downloadActionButtons }}
            onItemClick={() => {}}
        />
    );
}
