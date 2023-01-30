import React, { Component, useEffect, useRef, useState } from "react";
import { TextWeight } from "../text";
import { Form } from "../form";
import { IconButton } from "../icon-button/icon-button";
import { Icon } from "../icon";
import {
    DropDownBar,
    Link,
    MenuBar,
    MenuItem,
    MobileWrapper,
    SearchBarContainer,
    SearchBarInputContainer,
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
    const [inputValue, setInputValue] = useState<string>("");
    const [itemsLocal, setItemsLocalValue] = useState<NavSubItemProps<T>[]>([]);
    const wrapperRef = useRef(null);
    //useOutsideAlerter(wrapperRef);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLinkClick = (item: NavSubItemProps<T>, index) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            setInputValue("");
            onItemClick(event, item);
        };
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const setInput4 = (value) => {
        setInputValue(value);
    };

    useEffect(() => {
        const filtered =
            inputValue && inputValue.length >= 1
                ? items.filter((data) =>
                      data.children
                          .toString()
                          .toLocaleLowerCase()
                          .includes(inputValue?.toString()?.toLocaleLowerCase())
                  )
                : [];
        setItemsLocalValue(filtered);
    }, [inputValue]);

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
        return itemsLocal.map((item, index) => {
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
                    <>{renderSearchComponent(isMobile)}</>
                )}
            </>
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSearchComponent = (isMobile = false) => {
        return (
            <>
                <SearchBarContainer>
                    <SearchBarInputContainer>
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
                            value={inputValue}
                            onChange={(event) => setInput4(event.target.value)}
                            autoComplete="nope"
                        />
                    </SearchBarInputContainer>
                    {inputValue && inputValue.length >= 1 && (
                        <DropDownBar>{renderItems(mobile)}</DropDownBar>
                    )}
                </SearchBarContainer>
            </>
        );
    };

    if (items && items.length > 0) {
        return (
            <>
                {mobile ? (
                    <MobileWrapper>
                        {renderSearchComponent(mobile)}
                    </MobileWrapper>
                ) : (
                    <MenuBar>{renderComponent(mobile)} </MenuBar>
                )}
            </>
        );
    }

    return <></>;
};
