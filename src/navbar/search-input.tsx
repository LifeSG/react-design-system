import React, { Component, useEffect, useRef, useState } from "react";
import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import { TextWeight } from "../text";
import { Form } from "../form";
import { IconButton } from "../icon-button/icon-button";

import {
    CloseIconContainer,
    CrossIconClose,
    DropDownBar,
    Link,
    MenuItem,
    MobileWrapper,
    SearchBarContainer,
    SearchBarDesktop,
    SearchBarInputContainer,
    SearchIcon,
    SearchInputContainer,
    SearchMainBarContainer,
} from "./search-input.styles";
import { NavSubItemProps } from "./types";

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
            inputValue && inputValue.length >= 3
                ? items.filter((data) =>
                      data.children
                          .toString()
                          .toLocaleLowerCase()
                          .includes(inputValue?.toString()?.toLocaleLowerCase())
                  )
                : [];
        setItemsLocalValue(filtered);
        setToggleDropdown(true);
    }, [inputValue]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleToggleClick = () => {
        setToggleInput(!toggleInput);
        onToggleHeaderClick();
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSearchIconClick = () => {
        setItemsLocalValue(items);
        setToggleDropdown(true);
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
                        {getHighlightedText(children, inputValue)}
                    </Link>
                </MenuItem>
            );
        });
    };

    const getHighlightedText = (text, highlight) => {
        // Split on highlight term and include term into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, "gi"));
        return (
            <span>
                {parts.map((part, i) => (
                    <span
                        key={i}
                        style={
                            part.toLowerCase() === highlight.toLowerCase()
                                ? { fontWeight: "bold" }
                                : {}
                        }
                    >
                        {part}
                    </span>
                ))}
            </span>
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderComponent = (isMobile = false) => {
        return (
            <>
                {!toggleInput ? (
                    <IconButton onClick={handleToggleClick}>
                        <SearchIcon
                            className="search-icon"
                            onClick={handleSearchIconClick}
                        />
                    </IconButton>
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
            <SearchMainBarContainer>
                <SearchBarContainer>
                    <SearchBarInputContainer>
                        <SearchInputContainer>
                            <Form.InputGroup
                                label=""
                                placeholder="Search"
                                addon={{
                                    type: "custom",
                                    position: "right",
                                    attributes: {
                                        children: (
                                            <MagnifierIcon
                                                type="search"
                                                onClick={handleSearchIconClick}
                                            />
                                        ),
                                    },
                                }}
                                value={inputValue}
                                onChange={(event) =>
                                    setInput4(event.target.value)
                                }
                                autoComplete="off"
                            />
                        </SearchInputContainer>
                    </SearchBarInputContainer>

                    {inputValue && inputValue.length >= 1 && toggleDropdown && (
                        <DropDownBar>{renderItems(mobile)}</DropDownBar>
                    )}
                </SearchBarContainer>
                <CloseIconContainer>
                    <IconButton onClick={handleToggleClick}>
                        <CrossIconClose />
                    </IconButton>
                </CloseIconContainer>
            </SearchMainBarContainer>
        );
    };

    if (items && items.length > 0) {
        return (
            <>
                {mobile ? (
                    <MobileWrapper ref={ref}>
                        {renderSearchComponent(mobile)}
                    </MobileWrapper>
                ) : (
                    <SearchBarDesktop ref={ref}>
                        {renderComponent(mobile)}{" "}
                    </SearchBarDesktop>
                )}
            </>
        );
    }

    return <></>;
};
