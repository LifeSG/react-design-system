/* eslint-disable react/display-name */
import React, { ReactNode } from "react";
import { Text } from "../../text/text";
import { LocalNavItemComponentProps } from "../internal-types";
import { LocalNavItemProps, LocalNavPropsBase } from "../types";
import { Nav, NavItem } from "./local-nav-menu.styles";

const LocalNavItem = (props: LocalNavItemComponentProps) => {
    const { handleClick, isSelected, item } = props;
    const renderTitle = () => {
        if (typeof item.title === "string") {
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

export interface LocalNavMenuProps extends LocalNavPropsBase {
    renderTitle?: (props: LocalNavItemProps) => ReactNode;
}

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
            titleList,
            selectedItemIndex,
            renderTitle,
            id,
            "data-testid": dataTestId,
            className,
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
                {titleList.map((title, i) => {
                    const isSelected = i === selectedItemIndex;

                    return (
                        <LocalNavItem
                            key={i}
                            data-testid={`${localNavMenuId}-item--${i}`}
                            handleClick={(e) =>
                                onNavItemSelect?.(e, { title, id }, i)
                            }
                            isSelected={isSelected}
                            item={{ title, id }}
                        />
                    );
                })}
            </Nav>
        );
    }
);
