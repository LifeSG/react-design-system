/* eslint-disable react/display-name */
import React from "react";
import { Text } from "../../text/text";
import { LocalNavItemComponentProps } from "../internal-types";
import { LocalNavMenuProps } from "../types";
import { Nav, NavItem } from "./local-nav-menu.styles";

const LocalNavItem = (props: LocalNavItemComponentProps) => {
    const { handleClick, isSelected, item, renderItem } = props;
    const renderTitle = () => {
        if (renderItem) {
            return renderItem(item, { selected: isSelected });
        } else if (typeof item.title === "string") {
            return (
                <Text.Body
                    style={{ margin: 0 }}
                    weight={isSelected ? "semibold" : "regular"}
                    id={item.id + "-title"}
                >
                    {item.title}
                </Text.Body>
            );
        } else if (React.isValidElement(item.title)) {
            return item.title;
        }
        return null;
    };
    return (
        <NavItem id={item.id} isSelected={isSelected} onClick={handleClick}>
            {renderTitle()}
        </NavItem>
    );
};

/**
 * A sidebar navigation element. The currently visible section will be highlighted.
 *
 * This component should be placed inside a container that aligns it to the side.
 * The container can also have `position: sticky` in order to make it a sticky sidebar.
 */
export const LocalNavMenu = React.forwardRef<
    HTMLUListElement,
    LocalNavMenuProps
>(
    (
        {
            onNavItemSelect: onNavItemSelect,
            items,
            selectedItemIndex,
            id,
            "data-testid": dataTestId,
            className,
            renderItem,
        }: LocalNavMenuProps,
        ref
    ) => {
        const localNavMenuId = dataTestId || "local-nav-menu";
        return (
            <Nav
                ref={ref}
                id={id}
                className={className}
                data-testid={`${localNavMenuId}-container`}
            >
                {items.map((item, i) => {
                    const isSelected = i === selectedItemIndex;

                    return (
                        <LocalNavItem
                            key={i}
                            data-testid={`${localNavMenuId}-item--${i}`}
                            handleClick={(e) =>
                                onNavItemSelect?.(
                                    e.nativeEvent as MouseEvent,
                                    { title: item.title, id },
                                    i
                                )
                            }
                            isSelected={isSelected}
                            item={{ title: item.title, id }}
                            renderItem={renderItem}
                        />
                    );
                })}
            </Nav>
        );
    }
);
