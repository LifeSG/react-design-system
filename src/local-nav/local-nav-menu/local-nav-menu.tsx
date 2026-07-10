import clsx from "clsx";
import React from "react";

import { Typography } from "../../typography";
import type { LocalNavMenuItemComponentProps } from "../internal-types";
import type { LocalNavMenuProps } from "../types";
import * as styles from "./local-nav-menu.styles";

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
                <Typography.BodyBL
                    className={styles.textLabel}
                    weight={isSelected ? "semibold" : "regular"}
                >
                    {title}
                </Typography.BodyBL>
            );
        };

        return (
            <li
                id={id}
                key={index}
                className={clsx(
                    styles.navItem,
                    isSelected && styles.navItemSelected
                )}
            >
                <div
                    className={styles.navItemContent}
                    role="link"
                    onClick={handleClick}
                    onKeyDown={(e) => handleNavItemKeyDown(e, handleClick)}
                    tabIndex={0}
                    aria-current={isSelected ? true : undefined}
                >
                    {renderTitle()}
                </div>
            </li>
        );
    };
    return (
        <ul
            ref={ref}
            id={id}
            className={clsx(styles.nav, className)}
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
        </ul>
    );
};

/**
 * A sidebar navigation list that highlights the currently selected section.
 *
 * Use `LocalNavMenu` for desktop in-page navigation where the list is always
 * visible.
 */
export const LocalNavMenu = React.forwardRef(Component);
