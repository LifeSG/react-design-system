import { useMemo, useRef, useState } from "react";
import {
    DesktopContainer,
    DesktopDrawer,
    MobileContainer,
    Wrapper,
} from "./sidenav.styles";
import { SidenavProps } from "./types";
import { SidenavItem } from "./sidenav-item";
import { SidenavGroup } from "./sidenav-group";
import { SelectedItem, SidenavContext } from "./sidenav-context";
import { SidenavDrawerItem } from "./sidenav-drawer-item";
import { SidenavDrawerSubitem } from "./sidenav-drawer-subitem";
import { useSpring } from "react-spring";
import { useEventListener } from "../util/use-event-listener";

const SidenavBase = ({
    fixed = true,
    children,
    ...otherProps
}: SidenavProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [currentItemId, setCurrentItemId] = useState<string | undefined>(
        undefined
    );
    const [selectedItem, setSelectedItem] = useState<SelectedItem | undefined>(
        undefined
    );
    const [drawerContent, setDrawerContent] = useState<
        React.ReactNode | undefined
    >(undefined);

    const value = useMemo(
        () => ({
            currentItemId,
            selectedItem,
            drawerContent,
            setCurrentItemId,
            setSelectedItem,
            setDrawerContent,
        }),
        [selectedItem, drawerContent, setSelectedItem, setDrawerContent]
    );

    const drawerAnimationProps = useSpring({
        width: drawerContent ? 240 : 0,
        borderWidth: drawerContent ? 1 : 0,
        borderStyle: "solid",
    });

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOutsideClicks = (e: PointerEvent) => {
        if (
            e.target instanceof HTMLDivElement &&
            wrapperRef.current &&
            !wrapperRef.current.contains(e.target)
        ) {
            setSelectedItem({
                itemId: selectedItem.prevSelectedId
                    ? selectedItem.prevSelectedId
                    : selectedItem.itemId,
                openDrawer: false,
                prevSelectedId: undefined,
            });
            setCurrentItemId(undefined);
            setDrawerContent(undefined);
        }
    };

    const handleMouseLeave = () => {
        if (selectedItem.itemId !== currentItemId) {
            setCurrentItemId(undefined);
        }
    };

    useEventListener("click", handleOutsideClicks);

    return (
        <SidenavContext.Provider value={value}>
            <Wrapper
                $fixed={fixed}
                {...otherProps}
                ref={wrapperRef}
                onMouseLeave={handleMouseLeave}
            >
                <DesktopContainer>{children}</DesktopContainer>
                <DesktopDrawer
                    style={drawerAnimationProps}
                    $showDrawer={!!drawerContent}
                    data-testid="sidenav-drawer"
                >
                    {drawerContent}
                </DesktopDrawer>
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
