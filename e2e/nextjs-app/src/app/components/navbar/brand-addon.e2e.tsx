"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { Typography } from "@lifesg/react-design-system/typography";

import { navItems } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-brand-addon"
            selectedId="home"
            items={{ desktop: navItems }}
            headerBrandAddon={
                <Typography.LinkSM href="#" weight="regular">
                    Back to Home
                </Typography.LinkSM>
            }
            drawerHeader={
                <Typography.LinkMD href="#" weight="semibold">
                    Go to Home
                </Typography.LinkMD>
            }
        />
    );
}
