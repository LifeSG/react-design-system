import React, { useEffect, useRef, useState } from "react";
import { TextWeight } from "../text";
import { Menu } from "./menu";
import {
    DownIcon,
    Link,
    LinkIndicator,
    LinkItem,
    MenuItemRightContainer,
    MobileWrapper,
    UpIcon,
    Wrapper,
} from "./navbar-items.styles";
import { NavItemCommonProps, NavItemProps } from "./types";

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

    const checkSelected = (item: NavItemProps<T>, id) => {
        const foundItem = items.find((i) => item.id === id);
        if (foundItem) {
            return true;
        } else if (!foundItem && item && item.subMenu?.length >= 1) {
            const foundSubItem = item.subMenu.find(
                (dataS) => dataS.id === selectedId
            );
            if (foundSubItem) {
                return true;
            } else {
                return false;
            }
        }
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
        item: NavItemCommonProps<T>
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
            const selected = checkSelected(item, selectedId);
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
                selectedIndex >= 0 && selectedIndex === index && showSubMenu;
            return (
                <LinkItem key={index}>
                    <Link
                        data-testid={testId}
                        weight={textWeight}
                        $selected={selected} /* for mobile */
                        {...otherItemAttrs}
                        onClick={handleLinkClick(item, index)}
                        {...options}
                    >
                        {children}
                        {selected && <LinkIndicator />}
                        {mobile && item.subMenu && (
                            <MenuItemRightContainer>
                                {expanded ? <UpIcon /> : <DownIcon />}
                            </MenuItemRightContainer>
                        )}
                    </Link>
                    {expanded && (
                        <Menu
                            items={item.subMenu}
                            selectedId={selectedId}
                            mobile={mobile}
                            onItemClick={handleSubLinkClick}
                        />
                    )}
                </LinkItem>
            );
        });
    };

    if (items && items.length > 0) {
        const ContentWrapper = mobile ? MobileWrapper : Wrapper;
        return <ContentWrapper ref={ref}>{renderItems()}</ContentWrapper>;
    }

    return <></>;
};
