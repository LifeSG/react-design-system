/* eslint-disable react/display-name */
import React from "react";
import { LocalNavMenuItemComponentProps } from "../internal-types";
import { LocalNavMenuProps } from "../types";
import {
    Nav,
    NavItem,
    NavItemContent,
    TextLabel,
} from "./local-nav-menu.styles";

/**
 * A sidebar navigation element. The currently visible section will be highlighted.
 *
 * This component should be placed inside a container that aligns it to the side.
 * The container can also have `position: sticky` in order to make it a sticky sidebar.
 */
const Component = (
    {
        onNavItemSelect,
        items,
        selectedItemIndex,
        id,
        "data-testid": dataTestId,
        className,
        renderItem,
    }: LocalNavMenuProps,
    ref: React.Ref<HTMLUListElement>
): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const localNavMenuId = dataTestId || "local-nav-menu";

    // =============================================================================
    // EVENT HANDLERS
    // ============================================================================
    const handleNavItemKeyDown = (
        e: React.KeyboardEvent<HTMLElement>,
        handleClick: (
            e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
        ) => void
    ) => {
        const { key } = e;

        if (key === "Enter" || key === " ") {
            e.preventDefault();
            handleClick(e);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderLocalNavItem = ({
        handleClick,
        isSelected,
        item,
        renderItem,
        index,
    }: LocalNavMenuItemComponentProps) => {
        const { id, title } = item;

        const renderTitle = () => {
            if (renderItem) {
                return renderItem(item, { selected: isSelected });
            }
            return (
                <TextLabel weight={isSelected ? "semibold" : "regular"}>
                    {title}
                </TextLabel>
            );
        };

        return (
            <NavItem id={id} key={index} $isSelected={isSelected}>
                <NavItemContent
                    role="link"
                    onClick={handleClick}
                    onKeyDown={(e) => handleNavItemKeyDown(e, handleClick)}
                    tabIndex={0}
                    aria-current={isSelected ? true : undefined}
                >
                    {renderTitle()}
                </NavItemContent>
            </NavItem>
        );
    };
    return (
        <Nav
            ref={ref}
            id={id}
            className={className}
            data-testid={localNavMenuId}
        >
            {items.map((item, i) => {
                const isSelected = i === selectedItemIndex;
                return renderLocalNavItem({
                    handleClick: (e) => onNavItemSelect(e, item, i),
                    isSelected,
                    item,
                    renderItem,
                    index: i,
                });
            })}
        </Nav>
    );
};

export const LocalNavMenu = React.forwardRef(Component);
