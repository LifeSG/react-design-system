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
        /** NOTE
         * borderWidth property divided to avoid mixing shorthand and non-shorthand propertied.
         * Otherwise, it will throw an error
         */
        borderRightWidth: showDrawer ? 1 : 0,
        borderTopWidth: showDrawer ? 1 : 0,
        borderBottomWidth: showDrawer ? 1 : 0,
        borderLeftWidth: 0,
    });

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOutsideClicks = (e: MouseEvent) => {
        if (
            wrapperRef.current &&
            !wrapperRef.current.contains(e.target as Node)
        ) {
            setSelectedItem({
                itemId: previouslySelectedItemId
                    ? previouslySelectedItemId
                    : selectedItem
                    ? selectedItem.itemId
                    : undefined,
                content: undefined,
            });
            setPreviouslySelectedItemId(undefined);
            setCurrentItem(undefined);
        }
    };

    const handleMouseLeave = () => {
        setCurrentItem(undefined);
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEventListener("click", handleOutsideClicks, "window", true);

    useEffect(() => {
        setShowDrawer(!!selectedItem?.content || !!currentItem?.content);
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
