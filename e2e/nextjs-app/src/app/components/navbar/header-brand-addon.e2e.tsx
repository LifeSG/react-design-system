"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";

import { navItems } from "./common";
import styles from "./navbar.module.css";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-header-brand-addon"
            selectedId="home"
            items={{ desktop: navItems }}
            headerBrandAddon={
                <div className={styles["custom-element"]}>Back to Home</div>
            }
        />
    );
}
