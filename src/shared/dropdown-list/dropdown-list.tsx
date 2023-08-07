import find from "lodash/find";
import isEqual from "lodash/isEqual";
import React, { useEffect, useRef, useState } from "react";
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
    PrimaryText,
    ResultStateContainer,
    ResultStateText,
    SecondaryText,
    SelectAllContainer,
    TruncateFirstLine,
    TruncateSecondLine,
} from "./dropdown-list.styles";
import { DropdownSearch } from "./dropdown-search";
import { DropdownListProps, ListItemDisplayProps } from "./types";

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
    disableItemFocus,
    multiSelect,
    selectedItems,
    onSelectAll,
    onRetry,
    itemsLoadState = "success",
    itemTruncationType = "end",
    itemMaxLines = 2,
    labelDisplayType = "inline",
    renderListItem,
    onBlur,
    hideNoResultsDisplay,
    renderCustomCallToAction,
    ...otherProps
}: DropdownListProps<T, V>): JSX.Element => {
    // =============================================================================
    // CONST, REF, STATE
    // =============================================================================
    const [focusedListIndex, _setFocusedIndex] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>("");
    const [displayListItems, _setDisplayListItems] = useState<T[]>(listItems);
    const [contentHeight, setContentHeight] = useState<number>(0);

    // React spring animation configuration
    const containerStyles = useSpring({
        height: contentHeight,
    });

    const nodeRef = useRef<HTMLDivElement>();
    const listRef = useRef<HTMLUListElement>();
    const listItemRefs = useRef<HTMLButtonElement[]>([]);
    const searchInputRef = useRef<HTMLInputElement>();
    const customCallToActionRef = useRef<HTMLDivElement>();

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
            // Give some time for the custom call-to-action to be rendered
            setTimeout(() => {
                setContentHeight(getContentHeight());
            });

            if (disableItemFocus) return;

            // Focus search input if there is a search input
            if (searchInputRef && searchInputRef.current) {
                searchInputRef.current.focus();
                setFocusedIndex(-1);
            } else if (listItemRefs.current[focusedListIndex]) {
                // Else focus on the first/last focused element
                listItemRefs.current[focusedListIndex].focus();
            }
        } else {
            setContentHeight(0);
        }
    }, [visible]);

    useEffect(() => {
        if (visible) {
            // safeguard
            const contentHeight = getContentHeight();
            setContentHeight(contentHeight);
        }
    }, [displayListItems, itemsLoadState]);

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

    const getOptionLabel = (item: T): string | ListItemDisplayProps => {
        return listExtractor ? listExtractor(item) : item.toString();
    };

    const hasExceededContainer = (displayText: string) => {
        if (labelDisplayType !== "inline") {
            return false;
        }

        let widthOfElement = 0;
        if (listRef && listRef.current) {
            widthOfElement = listRef.current.getBoundingClientRect().width - 60;
        }

        const textWidth = StringHelper.getTextWidth(
            displayText,
            "1.125rem 'Open Sans'"
        );
        return textWidth > widthOfElement * itemMaxLines;
    };

    const checkListItemSelected = (item: T): boolean => {
        return !!find(selectedItems, (arrItem) => {
            return isEqual(arrItem, item);
        });
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
                const label = getOptionLabel(item);
                const title =
                    typeof label === "object"
                        ? label.title.toLowerCase()
                        : label.toLowerCase();
                const secondaryLabel =
                    typeof label === "string"
                        ? undefined
                        : label.secondaryLabel?.toLowerCase();
                const updatedSearchValue = searchValue.trim().toLowerCase();
                return (
                    title.includes(updatedSearchValue) ||
                    (secondaryLabel &&
                        secondaryLabel.includes(updatedSearchValue))
                );
            });
            setDisplayListItems(updated);
        }
    };

    const getContentHeight = () => {
        const listHeight =
            listRef && listRef.current
                ? listRef.current.getBoundingClientRect().height
                : 0;
        const customCallToActionHeight = customCallToActionRef.current
            ? customCallToActionRef.current.getBoundingClientRect().height
            : 0;
        return listHeight + customCallToActionHeight;
    };

    const hasNextLineLabel = () => {
        return (
            labelDisplayType === "next-line" &&
            displayListItems.length > 0 &&
            listExtractor &&
            typeof listExtractor(displayListItems[0]) !== "string"
        );
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
                    if (onDismiss) onDismiss(true);
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

    const handleOnClear = () => {
        setSearchValue("");
        searchInputRef.current.focus();

        if (onSearch) onSearch();
    };

    const handleTryAgain = () => {
        if (onRetry) onRetry();
    };

    const handleBlur = () => {
        if (onBlur) onBlur();
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderTruncatedText = (displayText: string): JSX.Element => {
        return (
            <>
                <TruncateFirstLine $maxLines={itemMaxLines} aria-hidden>
                    {displayText}
                </TruncateFirstLine>
                <TruncateSecondLine $maxLines={itemMaxLines} aria-hidden>
                    {displayText}
                </TruncateSecondLine>
            </>
        );
    };

    const renderDropdownLabels = (item: T) => {
        const label = getOptionLabel(item);
        const title = typeof label === "string" ? label : label.title;
        const secondaryLabel =
            typeof label == "string" ? undefined : label.secondaryLabel;

        const shouldTruncateTitle = hasExceededContainer(title);
        const shouldTruncateLabel =
            secondaryLabel && hasExceededContainer(secondaryLabel);

        // css cannot truncate inline elements so if needed, render as block elements instead
        const itemDisplayType =
            shouldTruncateTitle || shouldTruncateLabel
                ? "next-line"
                : labelDisplayType;

        return (
            <Label $labelDisplayType={itemDisplayType}>
                <PrimaryText
                    $truncateType={itemTruncationType}
                    $maxLines={itemMaxLines}
                    aria-label={title}
                >
                    {itemTruncationType === "middle" && shouldTruncateTitle
                        ? renderTruncatedText(title)
                        : title}
                </PrimaryText>
                {secondaryLabel && (
                    <SecondaryText
                        $truncateType={itemTruncationType}
                        $maxLines={itemMaxLines}
                        $labelDisplayType={labelDisplayType}
                        aria-label={secondaryLabel}
                    >
                        {itemTruncationType === "middle" && shouldTruncateLabel
                            ? renderTruncatedText(secondaryLabel)
                            : secondaryLabel}
                    </SecondaryText>
                )}
            </Label>
        );
    };

    const renderItems = () => {
        if (!onRetry || (onRetry && itemsLoadState === "success")) {
            return displayListItems.map((item, index) => {
                return (
                    <ListItem
                        key={getItemKey(item, index)}
                        $checked={checkListItemSelected(item) && !multiSelect}
                    >
                        <ListItemSelector
                            $hasNextLineLabel={hasNextLineLabel()}
                            onClick={(event) => {
                                handleListItemClick(event, item);
                            }}
                            ref={(element) =>
                                (listItemRefs.current[index] = element)
                            }
                            data-testid={`list-item`}
                            type="button"
                            tabIndex={visible ? 0 : -1}
                            $multiSelect={multiSelect}
                            onBlur={handleBlur}
                        >
                            {multiSelect && (
                                <ListCheckbox
                                    checked={checkListItemSelected(item)}
                                    displaySize={"small"}
                                />
                            )}
                            {renderListItem
                                ? renderListItem(item, {
                                      selected: checkListItemSelected(item),
                                  })
                                : renderDropdownLabels(item)}
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
                    onClear={handleOnClear}
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
                    <DropdownCommonButton onClick={onSelectAll} type="button">
                        {selectedItems.length === 0
                            ? "Select all"
                            : "Clear all"}
                    </DropdownCommonButton>
                </SelectAllContainer>
            );
        }
    };

    const renderNoResults = () => {
        if (
            !hideNoResultsDisplay &&
            (searchValue || !enableSearch) &&
            displayListItems.length === 0 &&
            itemsLoadState === "success"
        ) {
            return (
                <ResultStateContainer
                    key="noResults"
                    data-testid="list-no-results"
                >
                    <LabelIcon data-testid="no-result-icon" />
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
                    <LabelIcon data-testid="load-error-icon" />
                    <ResultStateText>Failed to load.</ResultStateText>
                    <DropdownCommonButton
                        onClick={handleTryAgain}
                        type="button"
                    >
                        Try again.
                    </DropdownCommonButton>
                </ResultStateContainer>
            );
        }
    };

    const renderList = () => {
        if (!visible) {
            return;
        }
        return (
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
        );
    };

    const renderBottomCta = () => {
        if (!visible || !renderCustomCallToAction) {
            return;
        }

        return (
            <div ref={customCallToActionRef} data-testid="custom-cta">
                {renderCustomCallToAction(onDismiss, displayListItems)}
            </div>
        );
    };

    return (
        <>
            <Container
                style={containerStyles}
                data-testid={
                    visible ? "dropdown-container" : "dropdown-container-hidden"
                }
                ref={nodeRef}
            >
                {renderList()}
                {renderBottomCta()}
            </Container>
        </>
    );
};
