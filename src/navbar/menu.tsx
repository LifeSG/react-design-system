import React from "react";
import { Link, MenuItem, MobileWrapper, Wrapper } from "./menu.styles";
import { NavItemCommonProps } from "./types";

interface Props<T> {
    items: NavItemCommonProps<T>[];
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemCommonProps<T>
    ) => void;
}

export const Menu = <T,>({
    items,
    mobile = false,
    onItemClick,
}: Props<T>): React.JSX.Element => {
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
            const { children, options, ...otherItemAttrs } = item;

            const testId = isMobile
                ? `link__mobile-${index + 1}`
                : `link__${index + 1}`;

            return (
                <MenuItem key={index}>
                    <Link
                        data-testid={testId}
                        {...otherItemAttrs}
                        onClick={handleLinkClick(item)}
                        {...options}
                    >
                        {children}
                    </Link>
                </MenuItem>
            );
        });
    };

    if (items && items.length > 0) {
        const ContentWrapper = mobile ? MobileWrapper : Wrapper;
        return <ContentWrapper>{renderItems(mobile)}</ContentWrapper>;
    }

    return <></>;
};
