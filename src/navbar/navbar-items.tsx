import React, { useEffect, useRef, useState } from "react";
import { TextWeight } from "../text";
import { Menu } from "./menu";
import {
    ChevronIcon,
    ExpandCollapseButton,
    Link,
    LinkIconContainer,
    LinkIndicator,
    LinkItem,
    LinkLabel,
    MobileWrapper,
    Wrapper,
} from "./navbar-items.styles";
import { NavItemLinkProps, NavItemProps } from "./types";

interface Props<T> {
    items: NavItemProps<T>[];
    selectedId?: string | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    hideNavBranding?: boolean | undefined;
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemProps<T>
    ) => void;
}

export const NavbarItems = <T,>({
    items,
    selectedId,
    mobile = false,
    hideNavBranding,
    onItemClick,
}: Props<T>): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
    const ref = useRef<HTMLUListElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onBlur();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const onBlur = () => {
        setShowSubMenu(false);
    };

    const checkSelected = (item: NavItemLinkProps<T>): boolean => {
        if (item.id === selectedId) {
            return true;
        } else if (item?.subMenu && item.subMenu.length >= 1) {
            const foundSubItem = item.subMenu.find(
                (dataS) => dataS.id === selectedId
            );
            return !!foundSubItem;
        }
        return false;
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLinkClick = (item: NavItemProps<T>, index: number) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            setSelectedIndex(index);
            setShowSubMenu(true);
            onItemClick(event, item);
        };
    };

    const handleSubLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemLinkProps<T>
    ) => {
        event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
        onItemClick(event, item);
        setShowSubMenu(false);
    };
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = () => {
        return items.map((item, index) => {
            switch (item.itemType) {
                case "component": {
                    const component = (item && item.children) || null;
                    return <li key={index}>{component}</li>;
                }
                case "link":
                default: {
                    const selected = checkSelected(item);
                    const { children, options, ...otherItemAttrs } = item;

                    const textWeight: TextWeight = selected
                        ? mobile
                            ? "bold"
                            : "semibold"
                        : "regular";
                    const testId = mobile
                        ? `link__mobile-${index + 1}`
                        : `link__${index + 1}`;
                    const expanded =
                        selectedIndex >= 0 &&
                        selectedIndex === index &&
                        showSubMenu;
                    return (
                        <LinkItem key={index} $hiddenBranding={hideNavBranding}>
                            <Link
                                data-testid={testId}
                                weight={textWeight}
                                $selected={selected} /* for mobile */
                                {...otherItemAttrs}
                                onClick={handleLinkClick(item, index)}
                                {...options}
                            >
                                <LinkLabel>{children}</LinkLabel>
                                {selected && <LinkIndicator />}
                                {mobile && item.subMenu && (
                                    <LinkIconContainer>
                                        <ExpandCollapseButton
                                            data-testid={`${testId}-expand-collapse-button`}
                                            $selected={expanded}
                                            focusHighlight={false}
                                            focusOutline="browser"
                                            aria-label={
                                                expanded ? "Collapse" : "Expand"
                                            }
                                        >
                                            <ChevronIcon />
                                        </ExpandCollapseButton>
                                    </LinkIconContainer>
                                )}
                            </Link>
                            {expanded && (
                                <Menu
                                    items={item.subMenu}
                                    mobile={mobile}
                                    onItemClick={handleSubLinkClick}
                                />
                            )}
                        </LinkItem>
                    );
                }
            }
        });
    };

    if (items && items.length > 0) {
        return mobile ? (
            <MobileWrapper ref={ref}>{renderItems()}</MobileWrapper>
        ) : (
            <Wrapper ref={ref} $alignLeft={hideNavBranding}>
                {renderItems()}
            </Wrapper>
        );
    }

    return <></>;
};
