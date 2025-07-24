import { MenuPanel } from "./menu-content.styles";
import { MenuContentProps } from "./types";

export const MenuContent = ({
    children,
    "data-testid": testId = "menu-content",
    ...otherProps
}: MenuContentProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <MenuPanel data-testid={testId} tabIndex={0} {...otherProps}>
            {children}
        </MenuPanel>
    );
};
