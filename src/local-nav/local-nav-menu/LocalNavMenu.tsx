/* eslint-disable react/display-name */
import { Text } from "../../text/text";
import camelCase from "lodash/camelCase";
import React, { ReactNode } from "react";
import { LocalNavPropsBase, NavItemProps } from "../types";
import { Nav, NavItem } from "./local-nav-menu.styles";

const LocalNavItem = (props: NavItemProps) => {
    const { handleClick, isSelected, title, renderTitle } = props;

    return (
        <NavItem isSelected={isSelected} onClick={handleClick}>
            {renderTitle?.(props) ?? (
                <Text.Body
                    style={{ margin: 0 }}
                    weight={isSelected ? "semibold" : "regular"}
                >
                    {title}
                </Text.Body>
            )}
        </NavItem>
    );
};

export interface LocalNavMenuProps extends LocalNavPropsBase {
    renderTitle?: (props: NavItemProps) => ReactNode;
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
            onNavItemClickCb,
            titleList,
            visibleSectionIndex,
            renderTitle,
        }: LocalNavMenuProps,
        ref
    ) => {
        return (
            <Nav ref={ref}>
                {titleList.map((title, i) => {
                    const handleNavItemClick = onNavItemClickCb
                        ? onNavItemClickCb(i)
                        : undefined;
                    const isSelected = i === visibleSectionIndex;

                    return (
                        <LocalNavItem
                            key={`${camelCase(title)}__local-nav--${i}`}
                            handleClick={handleNavItemClick}
                            isSelected={isSelected}
                            title={title}
                            renderTitle={renderTitle}
                        />
                    );
                })}
            </Nav>
        );
    }
);
