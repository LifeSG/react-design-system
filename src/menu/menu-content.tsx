import { MenuPanel } from "./menu-content.styles";
import { MenuContentProps } from "./types";

export const MenuContent = ({
    children,
    "data-testid": testId = "menu-content",
    overflow,
    maxHeight,
    ...otherProps
}: MenuContentProps): JSX.Element => {
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <MenuPanel
            $overflow={overflow}
            $maxHeight={maxHeight}
            data-testid={testId}
            tabIndex={0}
            {...otherProps}
        >
            {children}
        </MenuPanel>
    );
};

MenuContent.displayName = "Menu.Content";
