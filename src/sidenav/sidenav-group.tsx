import { Container, Divider } from "./sidenav-group.styles";
import { SidenavGroupProps } from "./types";

export const SidenavGroup = ({
    separator,
    children,
    ...otherProps
}: SidenavGroupProps) => {
    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Container {...otherProps}>
            {children}
            {separator && <Divider data-testid="divider" />}
        </Container>
    );
};
