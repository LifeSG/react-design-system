import { useRef, useState } from "react";
import { SimpleIdGenerator } from "../util";
import { SidenavContext, SidenavContextItem } from "./sidenav-context";
import { SidenavDrawerItem } from "./sidenav-drawer-item";
import { SidenavDrawerSubitem } from "./sidenav-drawer-subitem";
import { SidenavGroup } from "./sidenav-group";
import { SidenavItem } from "./sidenav-item";
import { DesktopContainer, MobileContainer, Wrapper } from "./sidenav.styles";
import { SidenavProps } from "./types";

const SidenavBase = ({
    fixed = true,
    children,
    "aria-label": ariaLabel = "Sidebar",
    ...otherProps
}: SidenavProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const wrapperRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [internalId] = useState(() => SimpleIdGenerator.generate());

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
            <Wrapper $fixed={fixed} ref={wrapperRef} {...otherProps}>
                <DesktopContainer ref={menuRef} aria-label={ariaLabel}>
                    {children}
                </DesktopContainer>
                {/** NOTE: Since mobile view not supported yet, children will not be rendered */}
                <MobileContainer></MobileContainer>
            </Wrapper>
        </SidenavContext.Provider>
    );
};

export const Sidenav = Object.assign(SidenavBase, {
    Group: SidenavGroup,
    Item: SidenavItem,
    DrawerItem: SidenavDrawerItem,
    DrawerSubitem: SidenavDrawerSubitem,
});
