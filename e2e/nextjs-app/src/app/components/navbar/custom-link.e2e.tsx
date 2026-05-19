"use client";

import { Navbar, type NavItemProps } from "@lifesg/react-design-system/navbar";
import { Button } from "@lifesg/react-design-system/button";
import { navItems } from "./common";
import styles from "./navbar.module.css";

const customLink: NavItemProps<undefined> = {
    itemType: "component",
    children: (
        <div className={styles["navbar-link"]} data-testid="navbar-custom-link">
            <Button sizeType="small" styleType="secondary">
                Custom link
            </Button>
        </div>
    ),
};

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-with-custom-link"
            selectedId="home"
            items={{ desktop: [...navItems, customLink] }}
        />
    );
}
