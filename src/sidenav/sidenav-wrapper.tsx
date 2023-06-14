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
    const { drawerContent, setDrawerContent, setSelectedItemId } =
        useContext(SidenavContext);
    const clickRef = useRef(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("click", handleOutsideClicks);
        document.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            document.removeEventListener("click", handleOutsideClicks);
        };
    }, []);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleOutsideClicks = (e: PointerEvent) => {
        if (
            clickRef &&
            clickRef.current &&
            !clickRef.current.contains(e.target)
        ) {
            setSelectedItemId(undefined);
            setDrawerContent(undefined);
        }
    };

    const handleMouseLeave = (e: PointerEvent) => {
        if (
            !(
                clickRef &&
                clickRef.current &&
                clickRef.current.contains(e.target)
            )
        ) {
            setDrawerContent(undefined);
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Wrapper ref={clickRef}>
            <DesktopContainer {...otherProps}>{children}</DesktopContainer>
            {drawerContent && <DesktopDrawer>{drawerContent}</DesktopDrawer>}
            {/** NOTE: Since mobile view not supported yet, children will not be rendered */}
            <MobileContainer></MobileContainer>
        </Wrapper>
    );
};
