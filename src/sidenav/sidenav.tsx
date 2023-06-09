import { DesktopContainer, MobileContainer } from "./sidenav.styles";
import { SidenavProps } from "./types";
import { SidenavItem } from "./sidenav-item";
import { SidenavGroup } from "./sidenav-group";
import { SidenavProvider } from "./sidenav-context";

const SidenavBase = ({
    fixed = true,
    children,
    ...otherProps
}: SidenavProps) => {
    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <SidenavProvider>
            <DesktopContainer $fixed={fixed} {...otherProps}>
                {children}
            </DesktopContainer>
            {/** NOTE: Since mobile view not supported yet, children will not be rendered */}
            <MobileContainer></MobileContainer>
        </SidenavProvider>
    );
};

export const Sidenav = Object.assign(SidenavBase, {
    Group: SidenavGroup,
    Item: SidenavItem,
});
