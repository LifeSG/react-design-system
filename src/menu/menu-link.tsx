import { Link } from "./menu-link.styles";
import { MenuLinkProps } from "./types";

export const MenuLink = ({
    children,
    "data-testid": testId = "menu-link",
    ...otherProps
}: MenuLinkProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Link data-testid={testId} {...otherProps}>
            {children}
        </Link>
    );
};

MenuLink.displayName = "Menu.Link";
