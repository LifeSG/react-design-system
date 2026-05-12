"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { ASSETS, desktopNavItems, downloadActionButtons } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-secondary-brand"
            selectedId="guides"
            resources={{
                secondary: {
                    brandName: "Support Go Where",
                    logoSrc: ASSETS.LOGO_SGW,
                },
            }}
            items={{ desktop: desktopNavItems }}
            actionButtons={{ desktop: downloadActionButtons }}
        />
    );
}
