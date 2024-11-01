/* eslint-disable react/display-name */
import { Text } from "../../text/text";
import camelCase from "lodash/camelCase";
import React, { ReactNode } from "react";
import { LocalNavPropsBase, NavItemProps } from "../types";
import { Nav, NavItem } from "./local-nav-menu.styles";

const LocalNavItem = (props: NavItemProps) => {
    const { handleClick, isSelected, title, renderTitle, id, className } =
        props;

    return (
        <NavItem
            id={id}
            className={className}
            isSelected={isSelected}
            onClick={handleClick}
        >
            {renderTitle?.(props) ?? (
                <Text.Body
                    style={{ margin: 0 }}
                    weight={isSelected ? "semibold" : "regular"}
                    id={id + "-title"}
                    className={className + "-title"}
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
            id,
        }: LocalNavMenuProps,
        ref
    ) => {
        const localNavMenuId = id || "local-nav-menu";
        return (
            <Nav
                ref={ref}
                id={`${localNavMenuId}-container`}
                className={`${localNavMenuId}-container`}
                data-test-id={`${localNavMenuId}-container`}
            >
                {titleList.map((title, i) => {
                    const handleNavItemClick = onNavItemClickCb
                        ? onNavItemClickCb(i)
                        : undefined;
                    const isSelected = i === visibleSectionIndex;

                    return (
                        <LocalNavItem
                            key={`${camelCase(
                                title
                            )}__${localNavMenuId}-item--${i}`}
                            className={`${camelCase(
                                title
                            )}__${localNavMenuId}-item--${i}`}
                            id={`${camelCase(
                                title
                            )}__${localNavMenuId}-item--${i}`}
                            data-test-id={`${camelCase(
                                title
                            )}__${localNavMenuId}-item--${i}`}
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
