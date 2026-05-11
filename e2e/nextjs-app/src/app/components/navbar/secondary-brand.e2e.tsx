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
                    brandName: "BookingSG",
                    logoSrc: ASSETS.LOGO_LIFESG,
                },
            }}
            items={{ desktop: desktopNavItems }}
            actionButtons={{ desktop: downloadActionButtons }}
        />
    );
}
