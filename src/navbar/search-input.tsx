import React, { useEffect, useRef, useState } from "react";
import { TextWeight } from "../text";
import { IconButton } from "../icon-button/icon-button";

import {
    CloseIconButton,
    CloseIconContainer,
    Container,
    CrossIconClose,
    Divider,
    DividerVertical,
    DropDownBar,
    Link,
    MenuItem,
    MobileWrapper,
    SearchBarContainer,
    SearchBarDesktop,
    SearchBarInputContainer,
    SearchIcon,
    SearchInputComponent,
    SearchInputContainer,
    SearchMainBarContainer,
    SearchSpan,
} from "./search-input.styles";
import { NavItemCommonProps } from "./types";

interface Props<T> {
    items: NavItemCommonProps<T>[];
    /** toggle for mobile or desktop view */
    mobile?: boolean | undefined;
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: NavItemCommonProps<T>
    ) => void;
    onToggleHeaderClick: () => void;
    onSearchButtonClick?: (searchInput: string) => void;
}

export const SearchInput = <T,>({
    items,
    mobile = false,
    onItemClick,
    onToggleHeaderClick,
    onSearchButtonClick,
}: Props<T>): JSX.Element => {
    // =============================================================================
    // STATE DECLARATIONS
    // =============================================================================
    const [toggleInput, setToggleInput] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [itemsLocal, setItemsLocalValue] = useState<NavItemCommonProps<T>[]>(
        []
    );
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<string>("on-blur");
    /***
     * showDropdown state
     * on-blur - default state
     * on-focus - focus state
     * on-dropdown-focus - focus state with dropdown
     */
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const ref = useRef(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setShowDropdown("on-blur");
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

        if (filtered && filtered.length >= 1) {
            setItemsLocalValue(filtered);
            setShowDropdown("on-dropdown-focus");
            setToggleDropdown(true);
        } else {
            setToggleDropdown(false);
            setShowDropdown("on-focus");
        }
    }, [inputValue]);

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const onBlur = () => {
        setShowDropdown("on-blur");
        setToggleDropdown(false);
    };

    const onInputFocus = () => {
        if (showDropdown !== "on-dropdown-focus") {
            setShowDropdown("on-focus");
        }
    };

    const onInputBlur = () => {
        if (showDropdown !== "on-dropdown-focus") {
            setShowDropdown("on-blur");
        }
    };
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleLinkClick = (item: NavItemCommonProps<T>, index) => {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation(); // in mobile, this prevents the drawer from intercepting event
            setInputValue("");
            onItemClick(event, item);
        };
    };

    const setInput4 = (value) => {
        setInputValue(value);
    };

    const handleToggleClick = () => {
        setToggleInput(!toggleInput);
        setInputValue("");
        onToggleHeaderClick();
    };

    const handleSearchIconClick = () => {
        setToggleDropdown(true);
        setShowDropdown("on-blur");
    };

    const handleSearchButtonClick = () => {
        if (
            itemsLocal &&
            itemsLocal.length >= 1 &&
            inputValue &&
            inputValue.length >= 3
        ) {
            setShowDropdown("on-dropdown-focus");
            setToggleDropdown(true);
        } else if (inputValue && inputValue.length >= 1) {
            setShowDropdown("on-focus");
            setToggleDropdown(false);
        } else {
            setToggleDropdown(false);
            setShowDropdown("on-blur");
        }
        if (onSearchButtonClick) {
            onSearchButtonClick(inputValue);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = (isMobile = false) => {
        return itemsLocal.map((item, index) => {
            const { children, options, ...otherItemAttrs } = item;

            const textWeight: TextWeight = "regular";
            const testId = isMobile
                ? `link__mobile-${index + 1}`
                : `link__${index + 1}`;

            return (
                <MenuItem key={index}>
                    <Link
                        data-testid={testId}
                        weight={textWeight}
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
            <SearchSpan>
                {parts.map((part, i) => (
                    <SearchSpan
                        key={i}
                        style={
                            part.toLowerCase() === highlight.toLowerCase()
                                ? { fontWeight: "bold" }
                                : {}
                        }
                    >
                        {part}
                    </SearchSpan>
                ))}
            </SearchSpan>
        );
    };

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

    const renderSearchinput = () => {
        return (
            <Container key="search">
                {mobile && <SearchIcon onClick={handleSearchButtonClick} />}

                <SearchInputComponent
                    ref={ref}
                    placeholder="Search"
                    value={inputValue}
                    onChange={(event) => setInput4(event.target.value)}
                    autoComplete="off"
                    onBlur={onInputBlur}
                    onFocus={onInputFocus}
                />

                {!mobile && (
                    <>
                        <DividerVertical />
                        <SearchIcon onClick={handleSearchButtonClick} />
                    </>
                )}
            </Container>
        );
    };

    const renderSearchComponent = (isMobile = false) => {
        return (
            <SearchMainBarContainer>
                <SearchBarContainer $dropdown={showDropdown}>
                    <SearchBarInputContainer>
                        <SearchInputContainer>
                            {renderSearchinput()}
                        </SearchInputContainer>
                        {showDropdown === "on-dropdown-focus" && <Divider />}
                    </SearchBarInputContainer>

                    {inputValue && inputValue.length >= 1 && toggleDropdown && (
                        <DropDownBar>{renderItems(mobile)}</DropDownBar>
                    )}
                </SearchBarContainer>
                <CloseIconContainer>
                    <CloseIconButton onClick={handleToggleClick}>
                        <CrossIconClose />
                    </CloseIconButton>
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
