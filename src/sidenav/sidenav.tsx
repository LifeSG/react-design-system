import clsx from "clsx";
import { useRef, useState } from "react";

import { useId } from "../util";
import * as styles from "./sidenav.styles";
import type { SidenavContextItem } from "./sidenav-context";
import { SidenavContext } from "./sidenav-context";
import { SidenavDrawerItem } from "./sidenav-drawer-item";
import { SidenavDrawerSubitem } from "./sidenav-drawer-subitem";
import { SidenavGroup } from "./sidenav-group";
import { SidenavItem } from "./sidenav-item";
import type { SidenavProps } from "./types";

const SidenavBase = ({
    fixed = true,
    children,
    "aria-label": ariaLabel = "Sidebar",
    className,
    ...otherProps
}: SidenavProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const wrapperRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const internalId = useId();

    const [currentItem, setCurrentItem] = useState<
        SidenavContextItem | undefined
    >(undefined);
    const [selectedItem, setSelectedItem] = useState<
        SidenavContextItem | undefined
    >(undefined);
    const [previouslySelectedItemId, setPreviouslySelectedItemId] = useState<
        string | undefined
    >(undefined);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <SidenavContext.Provider
            value={{
                internalId,
                menuRef,
                currentItem,
                selectedItem,
                previouslySelectedItemId,
                setCurrentItem,
                setSelectedItem,
                setPreviouslySelectedItemId,
            }}
        >
            <div
                ref={wrapperRef}
                {...otherProps}
                className={clsx(
                    styles.wrapper,
                    fixed && styles.wrapperFixed,
                    className
                )}
            >
                <nav
                    ref={menuRef}
                    aria-label={ariaLabel}
                    className={clsx(
                        styles.containerBase,
                        styles.desktopContainer
                    )}
                >
                    {children}
                </nav>
                {/** NOTE: Since mobile view not supported yet, children will not be rendered */}
                <nav
                    className={clsx(
                        styles.containerBase,
                        styles.mobileContainer
                    )}
                ></nav>
            </div>
        </SidenavContext.Provider>
    );
};

export const Sidenav = Object.assign(SidenavBase, {
    Group: SidenavGroup,
    Item: SidenavItem,
    DrawerItem: SidenavDrawerItem,
    DrawerSubitem: SidenavDrawerSubitem,
});
