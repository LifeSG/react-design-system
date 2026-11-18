"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";

import { navItems } from "./common";
import styles from "./navbar.module.css";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-drawer-header"
            selectedId="home"
            items={{ desktop: navItems }}
            drawerHeader={
                <div className={styles["custom-element"]}>Go to Home</div>
            }
        />
    );
}
