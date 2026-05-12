"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { navItems } from "./common";
import { Avatar } from "@lifesg/react-design-system/avatar";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-with-avatar"
            selectedId="guides"
            items={{ desktop: navItems }}
            actionButtons={{
                desktop: [
                    {
                        type: "component",
                        args: { render: <Avatar>GovTech</Avatar> },
                        uncollapsible: true,
                    },
                ],
            }}
        />
    );
}
