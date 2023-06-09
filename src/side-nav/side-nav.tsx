import { DesktopContainer, MobileContainer } from "./side-nav.styles";
import { SideNavProps } from "./types";
import { SideNavItem } from "./side-nav-item";
import { SideNavGroup } from "./side-nav-group";
import { SideNavProvider } from "./side-nav.context";

const SideNavBase = ({ children, ...otherProps }: SideNavProps) => {
    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <SideNavProvider>
            <DesktopContainer {...otherProps}>{children}</DesktopContainer>
            {/** NOTE: Since mobile view not supported yet, children will not be rendered */}
            <MobileContainer></MobileContainer>
        </SideNavProvider>
    );
};

export const SideNav = Object.assign(SideNavBase, {
    Group: SideNavGroup,
    Item: SideNavItem,
});
