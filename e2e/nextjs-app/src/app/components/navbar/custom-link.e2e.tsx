"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { navItems } from "./common";
import styles from "./navbar.module.css";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-with-custom-link"
            items={{
                desktop: [
                    ...navItems,
                    {
                        itemType: "component",
                        children: (
                            <div
                                className={styles["navbar-link"]}
                                data-testid="navbar-custom-link"
                            >
                                Custom
                            </div>
                        ),
                    },
                ],
            }}
        />
    );
}
