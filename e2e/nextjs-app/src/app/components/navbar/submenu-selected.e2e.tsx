"use client";

import type { NavItemLinkProps } from "@lifesg/react-design-system/navbar";
import { Navbar } from "@lifesg/react-design-system/navbar";
import { useState } from "react";

import { downloadActionButtons, navItemsWithSubmenu } from "./common";

export default function Story() {
    const [selectedId, setSelectedId] = useState("services-baby-bonus");

    return (
        <Navbar
            data-testid="navbar-submenu-selected"
            items={{ desktop: navItemsWithSubmenu }}
            actionButtons={{ desktop: downloadActionButtons }}
            onItemClick={(item) =>
                setSelectedId((item as NavItemLinkProps<undefined>).id)
            }
            selectedId={selectedId}
        />
    );
}
