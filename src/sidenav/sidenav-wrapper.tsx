import { useContext, useEffect, useRef } from "react";
import { SidenavContext } from "./sidenav-context";
import {
    DesktopContainer,
    DesktopDrawer,
    MobileContainer,
    Wrapper,
} from "./sidenav-wrapper.styles";
import { SidenavWrapperProps } from "./types";

export const SideNavWrapper = ({
    children,
    ...otherProps
}: SidenavWrapperProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { drawerContent, selectedItem, setDrawerContent, setSelectedItem } =
        useContext(SidenavContext);
    const drawerRef = useRef(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("click", handleOutsideClicks);
        return () => {
            document.removeEventListener("click", handleOutsideClicks);
        };
    }, []);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOutsideClicks = (e: PointerEvent) => {
        if (
            drawerRef &&
            drawerRef.current &&
            !drawerRef.current.contains(e.target)
        ) {
            setSelectedItem({ ...selectedItem, openDrawer: false });
            setDrawerContent(undefined);
        }
    };

    const handleMouseLeave = () => {
        setDrawerContent(undefined);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Wrapper ref={drawerRef} onMouseLeave={handleMouseLeave}>
            <DesktopContainer {...otherProps}>{children}</DesktopContainer>
            {drawerContent && <DesktopDrawer>{drawerContent}</DesktopDrawer>}
            {/** NOTE: Since mobile view not supported yet, children will not be rendered */}
            <MobileContainer></MobileContainer>
        </Wrapper>
    );
};
