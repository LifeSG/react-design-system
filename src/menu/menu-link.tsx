import { Link, MenuLinkDiv } from "./menu-link.styles";
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
        <MenuLinkDiv>
            <Link data-testid={testId} underlineStyle="none" {...otherProps}>
                {children}
            </Link>
        </MenuLinkDiv>
    );
};

MenuLink.displayName = "Menu.Link";
