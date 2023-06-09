import { Container, Divider } from "./side-nav-group.styles";
import { SideNavGroupProps } from "./types";

export const SideNavGroup = ({
    separator,
    children,
    ...otherProps
}: SideNavGroupProps) => {
    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    return (
        <Container {...otherProps}>
            {children}
            {separator && <Divider />}
        </Container>
    );
};
