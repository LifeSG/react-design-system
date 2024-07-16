import find from "lodash/find";
import isEqual from "lodash/isEqual";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Spinner } from "../../button/button.style";
import {
    useCompare,
    useEvent,
    useEventListener,
    useIsMounted,
} from "../../util";
import { DropdownLabel } from "./dropdown-label";
import { DropdownListStateContext } from "./dropdown-list-state";
import {
    CheckboxSelectedIndicator,
    CheckboxUnselectedIndicator,
    Container,
    DropdownCommonButton,
    LabelIcon,
    List,
    ListItem,
    Listbox,
    ResultStateContainer,
    ResultStateText,
    SelectAllButton,
    SelectAllContainer,
    SelectedIndicator,
    UnselectedIndicator,
} from "./dropdown-list.styles";
import { DropdownSearch } from "./dropdown-search";
import { DropdownListProps, ListItemDisplayProps } from "./types";

/**
 * NOTE: This component is not directly exportable but forms part of a component
 */
export const DropdownList = <T, V>({
    listItems,
    multiSelect,
    selectedItems,
    disableItemFocus,
    itemsLoadState = "success",
    itemTruncationType = "end",
    itemMaxLines = 2,
    labelDisplayType = "inline",
    variant = "default",
    listboxId,
    width,
    onSelectItem,
    onSelectAll,
    onDismiss,
    onRetry,
    /* DropdownDisplayProps */
    valueExtractor,
    listExtractor,
    renderListItem,
    renderCustomCallToAction,
    /* DropdownSearchProps */
    enableSearch,
    hideNoResultsDisplay,
    searchPlaceholder = "Search",
    searchFunction,
    onSearch,
}: DropdownListProps<T, V>): JSX.Element => {
    // =========================================================================
    // CONST, REF, STATE
    // =========================================================================
    const { focusedIndex, setFocusedIndex } = useContext(
        DropdownListStateContext
    );
    const [searchValue, setSearchValue] = useState<string>("");
    const [displayListItems, setDisplayListItems] = useState(listItems);
    const itemsLoadStateChanged = useCompare(itemsLoadState);
    const mounted = useIsMounted();

    const nodeRef = useRef<HTMLDivElement>();
    const listRef = useRef<HTMLDivElement>();
    const listItemRefs = useRef<HTMLElement[]>([]);
    const searchInputRef = useRef<HTMLInputElement>();

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
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

    const checkListItemSelected = (item: T): boolean => {
        return !!find(selectedItems, (arrItem) => {
            return isEqual(arrItem, item);
        });
    };

    const filterItemsByCustomSearch = useEvent(() => {
        return searchFunction(searchValue);
    });

    const filterItemsByLabel = useEvent(() => {
        return listItems.filter((item) => {
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
                (secondaryLabel && secondaryLabel.includes(updatedSearchValue))
            );
        });
    });

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleKeyboardPress = (event: KeyboardEvent) => {
        switch (event.code) {
            case "ArrowDown":
                event.preventDefault();
                // Cannot go further than last element
                if (focusedIndex < displayListItems.length - 1) {
                    const upcomingIndex = focusedIndex + 1;
                    listItemRefs.current[upcomingIndex].focus();

                    setFocusedIndex(upcomingIndex);
                }
                break;
            case "ArrowUp":
                event.preventDefault();
                // Cannot go further than first element
                if (focusedIndex > 0) {
                    const upcomingIndex = focusedIndex - 1;
                    listItemRefs.current[upcomingIndex].focus();

                    setFocusedIndex(upcomingIndex);
                }
                break;
            case "Space":
                if (
                    document.activeElement ===
                    listItemRefs.current[focusedIndex]
                ) {
                    event.preventDefault();
                    if (displayListItems[focusedIndex]) {
                        handleListItemClick(
                            displayListItems[focusedIndex],
                            focusedIndex
                        );
                    }
                }
                break;
            default:
                break;
        }
    };

    const handleListItemClick = (item: T, upcomingIndex: number) => {
        setFocusedIndex(upcomingIndex);
        onSelectItem?.(item, getValue(item));
    };

    const handleListItemHover = (index: number) => {
        setFocusedIndex(index);
    };

    const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        setSearchValue(value);

        onSearch?.();
    };

    const handleOnClear = () => {
        setSearchValue("");
        searchInputRef.current.focus();

        onSearch?.();
    };

    const handleTryAgain = () => {
        onRetry?.();
    };

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEventListener("keydown", handleKeyboardPress);

    useEffect(() => {
        if (mounted) {
            // only run on mount
            return;
        }

        if (disableItemFocus) return;

        // Focus search input if there is one
        if (searchInputRef.current) {
            setFocusedIndex(-1);
            setTimeout(() => searchInputRef.current.focus(), 200); // wait for animation
        } else if (listItemRefs.current[focusedIndex]) {
            // Else focus on the specified element
            setTimeout(() => listItemRefs.current[focusedIndex].focus(), 200);
        } else {
            // Else focus on the first list item
            setFocusedIndex(0);
            setTimeout(() => listItemRefs.current[0]?.focus(), 200);
        }
    }, [disableItemFocus, focusedIndex, mounted, setFocusedIndex]);

    useEffect(() => {
        if (!mounted || !itemsLoadStateChanged) {
            // skip effect as dependency did not change
            return;
        }

        if (disableItemFocus) return;

        // Reset focus when options are loaded
        if (itemsLoadState === "success") {
            if (searchInputRef.current) {
                setFocusedIndex(-1);
                searchInputRef.current.focus();
            }
        }
    }, [
        mounted,
        itemsLoadStateChanged,
        itemsLoadState,
        setFocusedIndex,
        disableItemFocus,
    ]);

    useEffect(() => {
        const filterItems = () => {
            if (searchValue === "") {
                return listItems;
            } else if (searchFunction) {
                return filterItemsByCustomSearch();
            } else {
                return filterItemsByLabel();
            }
        };

        setDisplayListItems(filterItems());
    }, [
        filterItemsByCustomSearch,
        filterItemsByLabel,
        listItems,
        searchFunction,
        searchValue,
    ]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderListItemIcon = (selected: boolean) => {
        if (multiSelect) {
            return selected ? (
                <CheckboxSelectedIndicator aria-hidden />
            ) : (
                <CheckboxUnselectedIndicator aria-hidden />
            );
        }

        return selected ? (
            <SelectedIndicator aria-hidden />
        ) : (
            <UnselectedIndicator />
        );
    };

    const renderDropdownLabel = (item: T, selected: boolean) => {
        const label = getOptionLabel(item);
        const title = typeof label === "string" ? label : label.title;
        const secondaryLabel =
            typeof label == "string" ? undefined : label.secondaryLabel;

        return (
            <DropdownLabel
                displayType={labelDisplayType}
                label={title}
                maxLines={itemMaxLines}
                selected={selected}
                sublabel={secondaryLabel}
                truncationType={itemTruncationType}
                variant={variant}
            />
        );
    };

    const renderItems = () => {
        if (!onRetry || (onRetry && itemsLoadState === "success")) {
            return displayListItems.map((item, index) => {
                const selected = checkListItemSelected(item);
                const active = index === focusedIndex;
                return (
                    <ListItem
                        aria-selected={selected}
                        aria-multiselectable={multiSelect}
                        data-testid="list-item"
                        key={getItemKey(item, index)}
                        onClick={() => handleListItemClick(item, index)}
                        onMouseEnter={() => handleListItemHover(index)}
                        ref={(element) =>
                            (listItemRefs.current[index] = element)
                        }
                        role="option"
                        tabIndex={active ? 0 : -1}
                        $active={active}
                    >
                        {renderListItemIcon(selected)}
                        {renderListItem
                            ? renderListItem(item, { selected })
                            : renderDropdownLabel(item, selected)}
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
                    aria-label="Enter text to search"
                    onClear={handleOnClear}
                    variant={variant}
                />
            );
        }
    };

    const renderSelectAll = () => {
        if (
            multiSelect &&
            displayListItems.length > 0 &&
            !searchValue &&
            itemsLoadState === "success"
        ) {
            return (
                <SelectAllContainer>
                    <SelectAllButton
                        onClick={onSelectAll}
                        type="button"
                        $variant={variant}
                    >
                        {selectedItems.length === 0
                            ? "Select all"
                            : "Clear all"}
                    </SelectAllButton>
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
                <ResultStateContainer data-testid="list-no-results">
                    <LabelIcon
                        data-testid="no-result-icon"
                        $variant={variant}
                    />
                    <ResultStateText $variant={variant}>
                        No results found.
                    </ResultStateText>
                </ResultStateContainer>
            );
        }
    };

    const renderLoading = () => {
        if (onRetry && itemsLoadState === "loading") {
            const spinnerSize = variant === "small" ? 16 : 18;

            return (
                <ResultStateContainer data-testid="list-loading">
                    <Spinner $buttonStyle="secondary" size={spinnerSize} />
                    <ResultStateText $variant={variant}>
                        Loading...
                    </ResultStateText>
                </ResultStateContainer>
            );
        }
    };

    const renderTryAgain = () => {
        if (onRetry && itemsLoadState === "fail") {
            return (
                <ResultStateContainer data-testid="list-fail">
                    <LabelIcon
                        data-testid="load-error-icon"
                        $variant={variant}
                    />
                    <ResultStateText $variant={variant}>
                        Failed to load.
                    </ResultStateText>
                    &nbsp;
                    <DropdownCommonButton
                        onClick={handleTryAgain}
                        type="button"
                        $variant={variant}
                    >
                        Try again.
                    </DropdownCommonButton>
                </ResultStateContainer>
            );
        }
    };

    const renderList = () => {
        return (
            <List ref={listRef} data-testid="dropdown-list">
                {renderSearchInput()}
                {renderSelectAll()}
                {renderNoResults()}
                {renderLoading()}
                {renderTryAgain()}
                <Listbox role="listbox" id={listboxId}>
                    {renderItems()}
                </Listbox>
            </List>
        );
    };

    const renderBottomCta = () => {
        if (!renderCustomCallToAction) {
            return;
        }

        return (
            <div data-testid="custom-cta">
                {renderCustomCallToAction(onDismiss, displayListItems)}
            </div>
        );
    };

    return (
        <Container
            data-testid="dropdown-container"
            ref={nodeRef}
            $width={width}
        >
            {renderList()}
            {renderBottomCta()}
        </Container>
    );
};
