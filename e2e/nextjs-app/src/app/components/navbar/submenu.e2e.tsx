"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { downloadActionButtons, navItemsWithSubmenu } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-submenu"
            items={{ desktop: navItemsWithSubmenu }}
            actionButtons={{ desktop: downloadActionButtons }}
            onItemClick={() => {}}
            selectedId="services"
        />
    );
}
