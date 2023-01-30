import React, { useEffect, useRef, useState } from "react";
import { TextWeight } from "../text";
import {
    Link,
    LinkIndicator,
    LinkItem,
    MobileWrapper,
    Wrapper,
} from "./navbar-items.styles";
import { NavItemProps, NavSubItemProps } from "./types";
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
    subMenu?: NavSubItemProps<T>[] | undefined;
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

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLinkClick = (item: NavItemProps<T>, index) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            setShowDrawer(index);
            setToggleDropdown(true);
            if (item && !item.subMenu) {
                onItemClick(event, item);
            }
        };
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSubLinkClick = (item: NavSubItemProps<T>[], index) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            setShowDrawer(index);
            onItemClick(event, item[index]);
        };
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = (isMobile = false) => {
        return items.map((item, index) => {
            const selected = selectedIndex === index;
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
                        onClick={handleLinkClick(item, index)}
                        {...options}
                    >
                        {children}
                        {selected && <LinkIndicator />}
                    </Link>

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
        //const ContentWrapper = mobile ? MobileWrapper : Wrapper;
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
                            selectedIndex &&
                            items[selectedIndex] &&
                            toggleDropdown && (
                                <Menu
                                    items={items[selectedIndex].subMenu}
                                    selectedId={selectedId}
                                    mobile={false}
                                    onItemClick={handleSubLinkClick(
                                        items[selectedIndex]?.subMenu,
                                        0
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
