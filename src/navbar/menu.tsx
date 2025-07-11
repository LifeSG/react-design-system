import React from "react";
import { Link, MenuItem, MobileWrapper, Wrapper } from "./menu.styles";
import { NavItemCommonProps, NavItemProps } from "./types";

interface Props<T> {
    items: NavItemProps<T>[];
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    alignment?: "left" | "right";
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemCommonProps<T>
    ) => void;
}

export const Menu = <T,>({
    items,
    mobile = false,
    alignment = "left",
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
            const { children, itemType } = item;

            const testId = isMobile
                ? `link__mobile-${index + 1}`
                : `link__${index + 1}`;

            const renderItem = () => {
                if (itemType === "component") {
                    return children;
                }

                const { options, ...otherItemAttrs } = item;
                return (
                    <Link
                        data-testid={testId}
                        {...otherItemAttrs}
                        onClick={handleLinkClick(item)}
                        {...options}
                    >
                        {children}
                    </Link>
                );
            };

            return <MenuItem key={index}>{renderItem()}</MenuItem>;
        });
    };

    if (items && items.length > 0) {
        const ContentWrapper = mobile ? MobileWrapper : Wrapper;
        const props = mobile ? {} : { $alignment: alignment };
        return (
            <ContentWrapper {...props}>{renderItems(mobile)}</ContentWrapper>
        );
    }

    return <></>;
};
