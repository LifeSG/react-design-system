import React from "react";
import { TextWeight } from "../text";
import {
    Link,
    LinkIndicator,
    LinkItem,
    MobileWrapper,
    Wrapper,
} from "./navbar-items.styles";
import { NavItemProps } from "./types";

interface Props<T> {
    items: NavItemProps<T>[];
    selectedId?: string | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemProps<T>
    ) => void;
}

export const NavbarItems = <T,>({
    items,
    selectedId,
    mobile = false,
    onItemClick,
}: Props<T>): JSX.Element => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLinkClick = (item: NavItemProps<T>) => {
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
                <LinkItem key={index}>
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
                </LinkItem>
            );
        });
    };

    if (items && items.length > 0) {
        const ContentWrapper = mobile ? MobileWrapper : Wrapper;
        return (
            <>
                <ContentWrapper>{renderItems(mobile)}</ContentWrapper>
            </>
        );
    }

    return <></>;
};
