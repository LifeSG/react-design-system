import React, { useEffect, useRef, useState } from "react";
import { TextWeight } from "../text";
import {
    DownIcon,
    Link,
    LinkIndicator,
    LinkItem,
    MenuItemContainer,
    MenuItemRightContainer,
    MobileWrapper,
    UpIcon,
    Wrapper,
} from "./navbar-items.styles";
import { NavItemCommonProps, NavItemProps } from "./types";
import { Menu } from "./menu";

interface Props<T> {
    items: NavItemProps<T>[];
    selectedId?: string | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemProps<T>
    ) => void;
    subMenu?: NavItemCommonProps<T>[] | undefined;
}

export const NavbarItems = <T,>({
    items,
    selectedId,
    mobile = false,
    onItemClick,
}: Props<T>): JSX.Element => {
    // =============================================================================
    // STATE DECLARATIONS
    // =============================================================================
    const [selectedIndex, setShowDrawer] = useState<number>(-1);
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const ref = useRef(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
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
        setToggleDropdown(false);
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
    const handleLinkClick = (item: NavItemProps<T>, index) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            setShowDrawer(index);
            setToggleDropdown(true);
            onItemClick(event, item);
        };
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSubLinkClick = (item: NavItemCommonProps<T>[], index) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            setShowDrawer(index);
            onItemClick(event, item[index]);
            setToggleDropdown(false);
        };
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = (isMobile = false) => {
        return items.map((item, index) => {
            //const selected = selectedIndex === index;
            const selected = checkSelected(item, selectedId);
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
                    <MenuItemContainer>
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
                            {isMobile && item.subMenu && (
                                <MenuItemRightContainer>
                                    {selected ? <UpIcon /> : <DownIcon />}
                                </MenuItemRightContainer>
                            )}
                        </Link>
                    </MenuItemContainer>

                    {isMobile &&
                        selectedIndex >= 0 &&
                        selectedIndex === index &&
                        toggleDropdown && (
                            <Menu
                                items={item.subMenu}
                                selectedId={selectedId}
                                mobile={isMobile}
                                onItemClick={handleSubLinkClick(
                                    item?.subMenu,
                                    0
                                )}
                            ></Menu>
                        )}
                </LinkItem>
            );
        });
    };

    if (items && items.length > 0) {
        return (
            <>
                {mobile ? (
                    <MobileWrapper ref={ref}>
                        {renderItems(mobile)}
                    </MobileWrapper>
                ) : (
                    <Wrapper ref={ref}>
                        {renderItems(mobile)}
                        {items &&
                            selectedIndex >= 0 &&
                            items[selectedIndex] &&
                            toggleDropdown && (
                                <Menu
                                    items={items[selectedIndex].subMenu}
                                    selectedId={selectedId}
                                    mobile={false}
                                    onItemClick={handleSubLinkClick(
                                        items[selectedIndex]?.subMenu,
                                        selectedIndex
                                    )}
                                ></Menu>
                            )}
                    </Wrapper>
                )}
            </>
        );
    }

    return <></>;
};
