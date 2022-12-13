import findIndex from "lodash/findIndex";
import React, { useEffect, useRef, useState } from "react";
import { IoMdAlert } from "react-icons/io";
import { useSpring } from "react-spring";
import { Spinner } from "../../button/button.style";
import { StringHelper } from "../../util/string-helper";
import {
    Container,
    DropdownCommonButton,
    Label,
    LabelIcon,
    List,
    ListCheckbox,
    ListItem,
    ListItemSelector,
    ResultStateContainer,
    ResultStateText,
    SelectAllContainer,
    TruncateContainer,
    TruncateFirstLine,
    TruncateSecondLine,
} from "./dropdown-list.styles";
import { DropdownSearch } from "./dropdown-search";
import { DropdownListProps } from "./types";

/**
 * NOTE: This component is not directly exportables
 * but forms part of a component
 */
export const DropdownList = <T, V>({
    listItems,
    listExtractor,
    valueExtractor,
    onSelectItem,
    listStyleWidth,
    visible,
    enableSearch,
    searchPlaceholder = "Search",
    onSearch,
    searchFunction,
    onDismiss,
    multiSelect,
    selectedItems,
    onSelectAll,
    onRetry,
    itemsLoadState = "success",
    itemTruncationType = "end",
    ...otherProps
}: DropdownListProps<T, V>): JSX.Element => {
    // =============================================================================
    // CONST, REF, STATE
    // =============================================================================
    const [focusedListIndex, _setFocusedIndex] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>("");
    const [displayListItems, _setDisplayListItems] = useState<T[]>(listItems);
    const [listHeight, setListHeight] = useState<number>(0);

    // React spring animation configuration
    const containerStyles = useSpring({
        height: listHeight,
    });

    const nodeRef = useRef<HTMLDivElement>();
    const listRef = useRef<HTMLUListElement>();
    const listItemRefs = useRef<HTMLButtonElement[]>([]);
    const searchInputRef = useRef<HTMLInputElement>();

    /**
     * Have to use refs to allow the state values to be accessible
     * by the event listener callback functions
     * Reference:
     * https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
     */
    const focusedListIndexStateRef = useRef<number>(focusedListIndex);
    const displayListItemStateRef = useRef<T[]>(displayListItems);

    // =============================================================================
    // REF FUNCTIONS
    // =============================================================================
    const setFocusedIndex = (data: number) => {
        focusedListIndexStateRef.current = data;
        _setFocusedIndex(data);
    };

    const setDisplayListItems = (data: T[]) => {
        displayListItemStateRef.current = data;
        _setDisplayListItems(data);
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        document.addEventListener("keydown", handleKeyboardPress);
        return () => {
            document.removeEventListener("keydown", handleKeyboardPress);
        };
    }, []);

    useEffect(() => {
        filterAndUpdateList(searchValue);
    }, [searchValue]);

    useEffect(() => {
        setSearchValue("");

        if (visible) {
            setListHeight(getListHeight());

            // Focus search input if there is a search input
            if (searchInputRef && searchInputRef.current) {
                searchInputRef.current.focus();
                setFocusedIndex(-1);
            } else if (listItemRefs.current[focusedListIndex]) {
                // Else focus on the first/last focused element
                listItemRefs.current[focusedListIndex].focus();
            }
        } else {
            setListHeight(0);
        }
    }, [visible]);

    useEffect(() => {
        if (visible) {
            // safeguard
            const listHeight = getListHeight();
            setListHeight(listHeight);
        }
    }, [displayListItems]);

    useEffect(() => {
        setDisplayListItems(listItems);

        // Reset
        setSearchValue("");
        setFocusedIndex(0);
    }, [listItems]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getValue = (item: T): V => {
        return valueExtractor ? valueExtractor(item) : (item as unknown as V);
    };

    const getItemKey = (item: T, index: number) => {
        const formattedValue = valueExtractor ? valueExtractor(item) : item;
        // This is needed as some items might have the same value
        return `item_${index}__${formattedValue}`;
    };

    const getOptionLabel = (item: T): string => {
        return listExtractor ? listExtractor(item) : item.toString();
    };

    const hasExceededContainer = (item: T) => {
        const displayText = listExtractor
            ? listExtractor(item)
            : item.toString();
        let widthOfElement = 0;
        if (listRef && listRef.current) {
            widthOfElement =
                listRef.current.getBoundingClientRect().width - 100;
        }
        return StringHelper.shouldTruncateToTwoLines(
            displayText,
            widthOfElement
        );
    };

    const checkListItemSelected = (item: T): boolean => {
        return findIndex(selectedItems, item as any) > -1;
    };

    const filterAndUpdateList = (searchValue: string) => {
        if (searchValue === "") {
            // reset
            setDisplayListItems(listItems);
        } else if (searchFunction) {
            const updated = searchFunction(searchValue);
            setDisplayListItems(updated);
        } else {
            const updated = listItems.filter((item) => {
                const displayValue = getOptionLabel(item).toLowerCase();
                return displayValue.includes(searchValue.trim().toLowerCase());
            });
            setDisplayListItems(updated);
        }
    };

    const getListHeight = () => {
        return listRef && listRef.current
            ? listRef.current.getBoundingClientRect().height
            : 0;
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleKeyboardPress = (event: KeyboardEvent) => {
        if (nodeRef && (nodeRef.current as any).contains(event.target)) {
            // inside click
            switch (event.code) {
                case "ArrowDown":
                    // Cannot go further than last element
                    if (
                        focusedListIndexStateRef.current <
                        displayListItemStateRef.current.length - 1
                    ) {
                        const upcomingIndex =
                            focusedListIndexStateRef.current + 1;
                        listItemRefs.current[upcomingIndex].focus();

                        setFocusedIndex(upcomingIndex);
                    }
                    break;
                case "ArrowUp":
                    // Cannot go further than first element
                    if (focusedListIndexStateRef.current > 0) {
                        const upcomingIndex =
                            focusedListIndexStateRef.current - 1;
                        listItemRefs.current[upcomingIndex].focus();

                        setFocusedIndex(focusedListIndexStateRef.current - 1);
                    }
                    break;
                case "Escape":
                    if (onDismiss) onDismiss();
                    break;
                default:
                    break;
            }
        }
        return;
    };

    const handleListItemClick = (event: React.MouseEvent, item: T) => {
        event.preventDefault();
        if (onSelectItem) {
            onSelectItem(item, getValue(item));
        }
    };

    const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        setSearchValue(value);

        if (onSearch) onSearch();
    };

    const handleTryAgain = () => {
        if (onRetry) onRetry();
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderTruncatedText = (item: T): JSX.Element => {
        const displayText = listExtractor
            ? listExtractor(item)
            : item.toString();
        return (
            <TruncateContainer data-testid="truncate-middle-container">
                <TruncateFirstLine>{displayText}</TruncateFirstLine>
                <TruncateSecondLine> {displayText}</TruncateSecondLine>
            </TruncateContainer>
        );
    };

    const renderItems = () => {
        if (!onRetry || (onRetry && itemsLoadState === "success")) {
            return displayListItems.map((item, index) => {
                return (
                    <ListItem
                        key={getItemKey(item, index)}
                        checked={checkListItemSelected(item) && !multiSelect}
                    >
                        <ListItemSelector
                            onClick={(event) => {
                                handleListItemClick(event, item);
                            }}
                            ref={(element) =>
                                (listItemRefs.current[index] = element)
                            }
                            data-testid={`list-item`}
                            type="button"
                            tabIndex={visible ? 0 : -1}
                            multiSelect={multiSelect}
                        >
                            {multiSelect && (
                                <ListCheckbox
                                    checked={checkListItemSelected(item)}
                                    displaySize={"small"}
                                />
                            )}
                            <Label truncateType={itemTruncationType}>
                                {itemTruncationType === "middle" &&
                                hasExceededContainer(item)
                                    ? renderTruncatedText(item)
                                    : getOptionLabel(item)}
                            </Label>
                        </ListItemSelector>
                    </ListItem>
                );
            });
        }
    };

    const renderSearchInput = () => {
        if ((enableSearch || searchFunction) && itemsLoadState === "success") {
            return (
                <DropdownSearch
                    ref={searchInputRef}
                    onChange={handleSearchInputChange}
                    value={searchValue}
                    placeholder={searchPlaceholder}
                    data-testid="search-input"
                    aria-label="search-input"
                    tabIndex={visible ? 0 : -1}
                />
            );
        }

        return null;
    };

    const renderSelectAll = () => {
        if (
            multiSelect &&
            displayListItems.length > 0 &&
            !searchValue &&
            itemsLoadState === "success"
        ) {
            return (
                <SelectAllContainer key="selectAll">
                    <DropdownCommonButton onClick={onSelectAll}>
                        {selectedItems.length === 0
                            ? "Select all"
                            : "Unselect all"}
                    </DropdownCommonButton>
                </SelectAllContainer>
            );
        }
    };

    const renderNoResults = () => {
        if (searchValue && displayListItems.length === 0) {
            return (
                <ResultStateContainer
                    key="noResults"
                    data-testid="list-no-results"
                >
                    <LabelIcon data-testid="no-result-icon">
                        <IoMdAlert />
                    </LabelIcon>
                    <ResultStateText>No results found.</ResultStateText>
                </ResultStateContainer>
            );
        }
    };

    const renderLoading = () => {
        if (onRetry && itemsLoadState === "loading") {
            return (
                <ResultStateContainer key="loading" data-testid="list-loading">
                    <Spinner $buttonStyle="secondary" size={24} />
                    <ResultStateText>Loading...</ResultStateText>
                </ResultStateContainer>
            );
        }
    };

    const renderTryAgain = () => {
        if (onRetry && itemsLoadState === "fail") {
            return (
                <ResultStateContainer key="noResults" data-testid="list-fail">
                    <LabelIcon data-testid="load-error-icon">
                        <IoMdAlert />
                    </LabelIcon>
                    <ResultStateText>Failed to load.</ResultStateText>
                    <DropdownCommonButton onClick={handleTryAgain}>
                        Try again.
                    </DropdownCommonButton>
                </ResultStateContainer>
            );
        }
    };

    return (
        <Container
            style={containerStyles}
            data-testid={
                visible ? "dropdown-container" : "dropdown-container-hidden"
            }
            ref={nodeRef}
        >
            <List
                ref={listRef}
                data-testid="dropdown-list"
                width={listStyleWidth}
                role="list"
                {...otherProps}
            >
                {renderSearchInput()}
                {renderSelectAll()}
                {renderNoResults()}
                {renderLoading()}
                {renderTryAgain()}
                {renderItems()}
            </List>
        </Container>
    );
};
