import { Link, MenuLinkDiv } from "./menu-link.styles";
import { MenuLinkProps } from "./types";

/**
 * A navigation link row within a `Menu.Content` or `Menu.Section`.
 *
 * Renders a styled anchor element without an underline. Use when a menu action should
 * navigate to another page rather than trigger a callback.
 * @example
 * ```tsx
 * <Menu.Link href="/settings">Settings</Menu.Link>
 * ```
 */
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
