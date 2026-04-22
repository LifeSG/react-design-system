import { Container, Divider } from "./sidenav-group.styles";
import { SidenavGroupProps } from "./types";

/**
 * A visual grouping container for `Sidenav.Item` elements.
 *
 * Renders its children in a block and optionally shows a divider below the group.
 * @example
 * ```tsx
 * <Sidenav.Group separator>
 *     <Sidenav.Item title="Home" icon={<HomeIcon />} />
 * </Sidenav.Group>
 * ```
 */
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
