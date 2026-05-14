"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { navItems, downloadActionButtons } from "./common";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-secondary-brand"
            selectedId="guides"
            resources={{
                secondary: {
                    brandName: "BookingSG",
                    logoSrc: "https://www.booking.gov.sg/logo.svg",
                },
            }}
            items={{ desktop: navItems }}
            actionButtons={{ desktop: downloadActionButtons }}
        />
    );
}
