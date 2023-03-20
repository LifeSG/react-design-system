import React, { useEffect, useRef, useState } from "react";
import { TextWeight } from "../text";
import {
    DownIcon,
    ItemContainer,
    Link,
    LinkIndicator,
    LinkItem,
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
    const [selectedNavElement, setSelectedNavElement] = useState<number>(-1);
    const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
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
    const handleLinkClick = (item: NavItemProps<T>, index) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            setSelectedNavElement(index);
            setShowSubMenu(true);
            onItemClick(event, item);
        };
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSubLinkClick = (item: NavItemCommonProps<T>[], index) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            setSelectedNavElement(index);
            onItemClick(event, item[index]);
            setShowSubMenu(false);
        };
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = () => {
        return items.map((item, index) => {
            //const selected = selectedNavElement === index;
            const selected = checkSelected(item, selectedId);
            const { children, options, ...otherItemAttrs } = item;

            const textWeight: TextWeight = selected ? "semibold" : "regular";
            const testId = `link__${index + 1}`;
            return (
                <ItemContainer key={index}>
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
                    </Link>
                </ItemContainer>
            );
        });
    };

    const renderItemsMobile = () => {
        return items.map((item, index) => {
            //const selected = selectedNavElement === index;
            const selected = checkSelected(item, selectedId);
            const { children, options, ...otherItemAttrs } = item;

            const textWeight: TextWeight = selected ? "bold" : "regular";
            const testId = `link__mobile-${index + 1}`;
            return (
                <>
                    <ItemContainer key={index}>
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
                            {item.subMenu && (
                                <MenuItemRightContainer>
                                    {selected ? <UpIcon /> : <DownIcon />}
                                </MenuItemRightContainer>
                            )}
                        </Link>
                    </ItemContainer>

                    {selectedNavElement >= 0 &&
                        selectedNavElement === index &&
                        showSubMenu && (
                            <Menu
                                items={item.subMenu}
                                selectedId={selectedId}
                                mobile={true}
                                onItemClick={handleSubLinkClick(
                                    item?.subMenu,
                                    index
                                )}
                            ></Menu>
                        )}
                </>
            );
        });
    };

    if (items && items.length > 0) {
        return (
            <>
                {mobile ? (
                    <MobileWrapper ref={ref}>
                        {renderItemsMobile()}
                    </MobileWrapper>
                ) : (
                    <Wrapper ref={ref}>
                        {renderItems()}
                        {items &&
                            selectedNavElement >= 0 &&
                            items[selectedNavElement] &&
                            showSubMenu && (
                                <Menu
                                    items={items[selectedNavElement].subMenu}
                                    selectedId={selectedId}
                                    mobile={false}
                                    onItemClick={handleSubLinkClick(
                                        items[selectedNavElement]?.subMenu,
                                        selectedNavElement
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
