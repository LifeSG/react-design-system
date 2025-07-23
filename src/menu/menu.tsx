import { useEffect, useRef, useState } from "react";
import { PopoverTrigger } from "../popover-v2";
import { MenuItem } from "./menu-item";
import { MenuSection } from "./menu-section";
import { MenuPanel } from "./menu.styles";
import { MenuProps } from "./types";
import { MenuLink } from "./menu-link";

export const MenuTrigger = ({
    children,
    position = "bottom-start",
    onPopoverAppear,
    menuContent,
    scrollable,
    "data-testid": testId = "menu",
    className,
    ...otherProps
}: MenuProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const panelRef = useRef<HTMLDivElement | null>(null);
    const [maxHeight, setMaxHeight] = useState<number>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (scrollable) {
            window.addEventListener("resize", handleViewportChange);
            window.addEventListener("scroll", handleViewportChange);
            return () => {
                window.removeEventListener("resize", handleViewportChange);
                window.removeEventListener("scroll", handleViewportChange);
            };
        }
    }, [scrollable]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleAppear = () => {
        onPopoverAppear?.();
        scrollable &&
            requestAnimationFrame(() => {
                handleViewportChange();
            });
    };

    const handleViewportChange = () => {
        if (panelRef.current) {
            const rect = panelRef.current.getBoundingClientRect();
            setMaxHeight(window.innerHeight - rect.top);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderMenuPanel = () => {
        return (
            <MenuPanel
                className={`${className}-panel`}
                data-testid={`${testId}-panel`}
                ref={panelRef}
                $maxHeight={maxHeight}
                tabIndex={0}
            >
                {menuContent}
            </MenuPanel>
        );
    };

    return (
        <PopoverTrigger
            position={position}
            onPopoverAppear={handleAppear}
            popoverContent={renderMenuPanel}
            data-testid={testId}
            {...otherProps}
        >
            {children}
        </PopoverTrigger>
    );
};

export const Menu = Object.assign(MenuTrigger, {
    Section: MenuSection,
    Item: MenuItem,
    Link: MenuLink,
});
