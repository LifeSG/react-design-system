import { Container } from "./sidenav.styles";
import { SidenavProps } from "./types";
import { SidenavItem } from "./sidenav-item";
import { SidenavGroup } from "./sidenav-group";
import { SidenavProvider } from "./sidenav-context";
import { SidenavDrawerItem } from "./sidenav-drawer-item";
import { SidenavDrawerSubitem } from "./sidenav-drawer-subitem";
import { SideNavWrapper } from "./sidenav-wrapper";

const SidenavBase = ({
    fixed = true,
    children,
    ...otherProps
}: SidenavProps) => {
    return (
        <Container $fixed={fixed} {...otherProps}>
            <SidenavProvider>
                <SideNavWrapper>{children}</SideNavWrapper>
            </SidenavProvider>
        </Container>
    );
};

export const Sidenav = Object.assign(SidenavBase, {
    Group: SidenavGroup,
    Item: SidenavItem,
    DrawerItem: SidenavDrawerItem,
    DrawerSubitem: SidenavDrawerSubitem,
});
