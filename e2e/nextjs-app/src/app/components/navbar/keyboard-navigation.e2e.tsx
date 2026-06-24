"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";
import { downloadActionButtons, navItemsWithSubmenu } from "./common";

export default function Story() {
    return (
        <>
            <button data-testid="focus-start">Focus start</button>
            <Navbar
                data-testid="navbar-keyboard"
                selectedId="home"
                items={{ desktop: navItemsWithSubmenu }}
                actionButtons={{ desktop: downloadActionButtons }}
                masthead={false}
                onItemClick={() => {}}
            />
            <button data-testid="outside-button">Outside button</button>
        </>
    );
}
