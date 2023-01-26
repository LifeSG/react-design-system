import React, { useEffect, useRef, useState } from "react";
import { TextWeight } from "../text";
import { Form } from "../form";
import { IconButton } from "../icon-button/icon-button";
import { Icon } from "../icon";
import {
    Link,
    LinkIndicator,
    MenuBar,
    MenuItem,
    MobileWrapper,
} from "./search-input.styles";
import { NavItemProps, NavSubItemProps } from "./types";

interface Props<T> {
    items: NavSubItemProps<T>[];
    selectedId?: string | undefined;
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    toggleheaderClick?: boolean | undefined;
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavSubItemProps<T>
    ) => void;
    onToggleHeaderClick: () => void;
}

export const SearchInput = <T,>({
    items,
    selectedId,
    mobile = false,
    toggleheaderClick = false,
    onItemClick,
    onToggleHeaderClick,
}: Props<T>): JSX.Element => {
    // =============================================================================
    // STATE DECLARATIONS
    // =============================================================================
    const [toggleInput, setToggleInput] = useState<boolean>(false);
    const wrapperRef = useRef(null);
    //useOutsideAlerter(wrapperRef);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLinkClick = (item: NavSubItemProps<T>, index) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            //setShowDrawer(index);
            onItemClick(event, item);
        };
    };

    /**
     * Hook that alerts clicks outside of the passed ref
     */
    // function useOutsideAlerter(ref) {
    //     useEffect(() => {
    //         /**
    //          * Alert if clicked on outside of element
    //          */
    //         function handleClickOutside(event) {
    //             setToggleInput(!toggleInput);
    //             if (ref.current && !ref.current.contains(event.target)) {
    //                 // setToggleInput(!toggleInput);
    //             }
    //         }
    //         // Bind the event listener
    //         document.addEventListener("mousedown", handleClickOutside);
    //         return () => {
    //             // Unbind the event listener on clean up
    //             document.removeEventListener("mousedown", handleClickOutside);
    //         };
    //     }, [ref]);
    // }

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleToggleClick = () => {
        setToggleInput(!toggleInput);
        onToggleHeaderClick();
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
                        onClick={handleLinkClick(item, index)}
                        {...options}
                    >
                        {children}
                        {selected && <LinkIndicator />}
                    </Link>
                </MenuItem>
            );
        });
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderComponent = (isMobile = false) => {
        return (
            <>
                {!toggleInput ? (
                    <IconButton iconType="search" onClick={handleToggleClick} />
                ) : (
                    <Form.InputGroup
                        label=""
                        placeholder="Search"
                        addon={{
                            type: "custom",
                            position: "right",
                            attributes: {
                                children: <Icon type="search" />,
                            },
                        }}
                    />
                )}

                {/* {renderItems(mobile)} */}
            </>
        );
    };

    if (items && items.length > 0) {
        //const ContentWrapper = mobile ? MobileWrapper : Wrapper;
        return (
            <>
                {mobile ? (
                    <MobileWrapper>{renderComponent(mobile)}</MobileWrapper>
                ) : (
                    <MenuBar>{renderComponent(mobile)} </MenuBar>
                )}
            </>
        );
    }

    return <></>;
};
