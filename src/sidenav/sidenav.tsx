import { useEffect, useMemo, useRef, useState } from "react";
import {
    DesktopContainer,
    DesktopDrawer,
    MobileContainer,
    Wrapper,
} from "./sidenav.styles";
import { SidenavProps } from "./types";
import { SidenavItem } from "./sidenav-item";
import { SidenavGroup } from "./sidenav-group";
import { SidenavContext, SidenavContextItem } from "./sidenav-context";
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

    const [currentItem, setCurrentItem] = useState<
        SidenavContextItem | undefined
    >(undefined);
    const [selectedItem, setSelectedItem] = useState<
        SidenavContextItem | undefined
    >(undefined);
    const [previouslySelectedItemId, setPreviouslySelectedItemId] = useState<
        string | undefined
    >(undefined);
    const [showDrawer, setShowDrawer] = useState<boolean>(false);

    const value = useMemo(
        () => ({
            currentItem,
            selectedItem,
            previouslySelectedItemId,
            setCurrentItem,
            setSelectedItem,
            setPreviouslySelectedItemId,
        }),
        [
            currentItem,
            selectedItem,
            previouslySelectedItemId,
            setCurrentItem,
            setSelectedItem,
            setPreviouslySelectedItemId,
        ]
    );

    const drawerAnimationProps = useSpring({
        width: showDrawer ? 240 : 0,
        // // borderWidth property divided to avoid mixing shorthand and non-shorthand properties
        // // If so, it will through an error
        borderRightWidth: showDrawer ? 1 : 0,
        borderTopWidth: showDrawer ? 1 : 0,
        borderBottomWidth: showDrawer ? 1 : 0,
        borderLeftWidth: 0,
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
                itemId: previouslySelectedItemId
                    ? previouslySelectedItemId
                    : selectedItem.itemId,
                content: undefined,
            });
            setPreviouslySelectedItemId(undefined);
            setCurrentItem(undefined);
        }
    };

    const handleMouseLeave = () => {
        if (selectedItem.itemId !== currentItem.itemId) {
            setCurrentItem(undefined);
        }
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEventListener("click", handleOutsideClicks);

    useEffect(() => {
        setShowDrawer(
            (selectedItem && !!selectedItem.content) ||
                (currentItem && !!currentItem.content)
        );
    }, [currentItem, selectedItem]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
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
                    $showDrawer={showDrawer}
                    data-testid="sidenav-drawer"
                >
                    {(currentItem && currentItem.content) ||
                        (selectedItem && selectedItem.content)}
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
