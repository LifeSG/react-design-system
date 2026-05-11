"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { desktopNavItems } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-multiple-action-buttons"
            selectedId="guides"
            items={{ desktop: desktopNavItems }}
            actionButtons={{
                desktop: [
                    { type: "download" },
                    {
                        type: "button",
                        args: { children: "Sign up", styleType: "secondary" },
                    },
                    {
                        type: "button",
                        args: { children: "Log in" },
                    },
                ],
            }}
        />
    );
}
