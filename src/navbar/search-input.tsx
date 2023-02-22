import React, { useEffect, useRef, useState } from "react";
import { TextWeight } from "../text";
import { IconButton } from "../icon-button/icon-button";

import {
    CloseIconButton,
    CloseIconContainer,
    Container,
    CrossIconClose,
    Divider,
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
    const [toggleInputFocus, setToggleInputFocus] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<number>(0);
    /***
     * showDropdown state
     * 0 - default state
     * 1 - focus state
     * 2 - focus state with dropdown
     */
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const ref = useRef(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setShowDropdown(0);
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
            setShowDropdown(2);
            setToggleDropdown(true);
        } else {
            setToggleDropdown(false);
            if (inputValue && inputValue.length < 3) {
                setShowDropdown(1);
            } else {
                setShowDropdown(0);
            }
        }
    }, [inputValue]);

    // =============================================================================
    // HELPER FUNCTION
    // =============================================================================
    const onBlur = () => {
        setShowDropdown(0);
        setToggleDropdown(false);
    };

    const onInputFocus = () => {
        setToggleInputFocus(true);
        if (showDropdown !== 2) {
            setShowDropdown(1);
        }
    };

    const onInputBlur = () => {
        setToggleInputFocus(false);
        if (showDropdown !== 2) {
            setShowDropdown(0);
        }
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

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleToggleClick = () => {
        setToggleInput(!toggleInput);
        setInputValue("");
        onToggleHeaderClick();
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleSearchIconClick = () => {
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
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
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
    const renderSearchinput = () => {
        return (
            <Container key="search">
                {mobile && <SearchIcon />}

                <SearchInputComponent
                    ref={ref}
                    placeholder="Search"
                    value={inputValue}
                    onChange={(event) => setInput4(event.target.value)}
                    autoComplete="off"
                    onBlur={onInputBlur}
                    onFocus={onInputFocus}
                />

                {!mobile && <SearchIcon />}
            </Container>
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSearchComponent = (isMobile = false) => {
        return (
            <SearchMainBarContainer>
                <SearchBarContainer $dropdown={showDropdown}>
                    <SearchBarInputContainer>
                        <SearchInputContainer>
                            {renderSearchinput()}
                        </SearchInputContainer>
                        {showDropdown === 2 && <Divider />}
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
