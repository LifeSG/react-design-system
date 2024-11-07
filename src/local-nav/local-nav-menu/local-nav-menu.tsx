/* eslint-disable react/display-name */
import React from "react";
import { Text } from "../../text/text";
import { LocalNavItemComponentProps } from "../internal-types";
import { LocalNavMenuProps } from "../types";
import { Nav, NavItem } from "./local-nav-menu.styles";

/**
 * A sidebar navigation element. The currently visible section will be highlighted.
 *
 * This component should be placed inside a container that aligns it to the side.
 * The container can also have `position: sticky` in order to make it a sticky sidebar.
 */
const Component = (
    {
        onNavItemSelect: onNavItemSelect,
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
    // RENDER FUNCTIONS
    // =============================================================================

    const renderLocalNavItem = ({
        handleClick,
        isSelected,
        item,
        renderItem,
    }: LocalNavItemComponentProps) => {
        const { id = "local-nav-menu", title } = item;

        const renderTitle = () => {
            if (renderItem) {
                return renderItem(item, { selected: isSelected });
            } else if (typeof title === "string") {
                return (
                    <Text.Body
                        style={{ margin: 0 }}
                        weight={isSelected ? "semibold" : "regular"}
                        id={`${id}-title`}
                    >
                        {title}
                    </Text.Body>
                );
            } else if (React.isValidElement(title)) {
                return title;
            }
            return null;
        };

        return (
            <NavItem id={id} isSelected={isSelected} onClick={handleClick}>
                {renderTitle()}
            </NavItem>
        );
    };
    return (
        <Nav
            ref={ref}
            id={id}
            className={className}
            data-testid={`${localNavMenuId}-container`}
        >
            {items.map((item, i) => {
                const isSelected = i === selectedItemIndex;

                return renderLocalNavItem({
                    handleClick: (e) =>
                        onNavItemSelect?.(
                            e.nativeEvent as MouseEvent,
                            { title: item.title, id: item.id },
                            i
                        ),
                    isSelected,
                    item: { title: item.title, id: item.id },
                    renderItem, // Optional, based on whether renderItem is passed
                });
            })}
        </Nav>
    );
};

export const LocalNavMenu = React.forwardRef(Component);
