import React, { useState } from "react";
import { TextWeight } from "../text";
import {
    Link,
    LinkIndicator,
    MenuBar,
    MenuItem,
    MobileWrapper,
} from "./menu.styles";
import { NavItemCommonProps } from "./types";

interface Props<T> {
    items: NavItemCommonProps<T>[];
    selectedId?: string | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemCommonProps<T>
    ) => void;
}

export const Menu = <T,>({
    items,
    selectedId,
    mobile = false,
    onItemClick,
}: Props<T>): JSX.Element => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLinkClick = (item: NavItemCommonProps<T>) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            onItemClick(event, item);
        };
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = (isMobile = false) => {
        return items.map((item, index) => {
            const selected = item.id === selectedId;
            const { children, options, ...otherItemAttrs } = item;

            const textWeight: TextWeight = selected
                ? isMobile
                    ? "bold"
                    : "semibold"
                : "regular";
            const testId = isMobile
                ? `link__mobile-${index + 1}`
                : `link__${index + 1}`;

            return (
                <MenuItem key={index}>
                    <Link
                        data-testid={testId}
                        weight={textWeight}
                        $selected={selected} /* for mobile */
                        {...otherItemAttrs}
                        onClick={handleLinkClick(item)}
                        {...options}
                    >
                        {children}
                        {selected && <LinkIndicator />}
                    </Link>
                </MenuItem>
            );
        });
    };

    if (items && items.length > 0) {
        //const ContentWrapper = mobile ? MobileWrapper : Wrapper;
        return (
            <>
                {mobile ? (
                    <MobileWrapper>{renderItems(mobile)}</MobileWrapper>
                ) : (
                    <MenuBar>{renderItems(mobile)}</MenuBar>
                )}
            </>
        );
    }

    return <></>;
};
