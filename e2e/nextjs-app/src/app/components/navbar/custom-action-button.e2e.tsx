"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { navItems } from "./common";
import styles from "./navbar.module.css";

export default function Story() {
    return (
        <Navbar
            data-testid="navbar-with-custom-action-button"
            items={{ desktop: navItems }}
            actionButtons={{
                desktop: [
                    {
                        type: "component",
                        args: {
                            render: (
                                <div
                                    className={styles["navbar-action-button"]}
                                    data-testid="navbar-custom-action-button"
                                >
                                    Custom
                                </div>
                            ),
                        },
                        uncollapsible: true,
                    },
                ],
            }}
        />
    );
}
