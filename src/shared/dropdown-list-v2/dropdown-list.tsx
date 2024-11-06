import find from "lodash/find";
import isEqual from "lodash/isEqual";
import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
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
    LabelIcon,
    List,
    ListItem,
    Listbox,
    ResultStateContainer,
    SelectAllButton,
    SelectAllContainer,
    SelectedIndicator,
    Spinner,
    TryAgainButton,
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
    topScrollItem,
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

    const checkListItemSelected = useCallback(
        (item: T): boolean => {
            return !!find(selectedItems, (arrItem) => {
                return isEqual(arrItem, item);
            });
        },
        [selectedItems]
    );

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
                    listItemRefs.current[upcomingIndex]?.focus();

                    setFocusedIndex(upcomingIndex);
                }
                break;
            case "ArrowUp":
                event.preventDefault();
                // Cannot go further than first element
                if (focusedIndex > 0) {
                    const upcomingIndex = focusedIndex - 1;
                    listItemRefs.current[upcomingIndex]?.focus();

                    setFocusedIndex(upcomingIndex);
                } else if (focusedIndex === 0 && searchInputRef.current) {
                    searchInputRef.current.focus();
                    setFocusedIndex(-1);
                }
                break;
            case "Space":
            case "Enter":
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
        searchInputRef.current?.focus();

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
        if (topScrollItem === undefined) return;

        // Delay to ensure render is complete
        const timer = setTimeout(() => {
            const index = listItems.indexOf(topScrollItem);
            const focusedItem = listItemRefs.current[index];

            // Align the item to top of scrollable container
            if (nodeRef.current) {
                const scrollOffset = focusedItem?.offsetTop ?? 0;
                nodeRef.current.scrollTop = scrollOffset - 8;
            }

            setFocusedIndex(index);
        }, 0);

        return () => clearTimeout(timer);
    }, [listItemRefs, listItems, setFocusedIndex, topScrollItem]);

    useEffect(() => {
        if (mounted) {
            // only run on mount
            return;
        }

        if (disableItemFocus) return;

        const selectedIndex = listItems.findIndex((item) =>
            checkListItemSelected(item)
        );

        // Focus search input if there is one
        if (searchInputRef.current) {
            setFocusedIndex(-1);
            setTimeout(() => searchInputRef.current?.focus(), 200); // wait for animation
        } else if (listItemRefs.current[focusedIndex]) {
            // Else focus on the specified element
            setTimeout(() => listItemRefs.current[focusedIndex]?.focus(), 200);
        } else if (listItemRefs.current[selectedIndex]) {
            // Else focus on the selected element
            setFocusedIndex(selectedIndex);
            setTimeout(() => listItemRefs.current[selectedIndex]?.focus(), 200);
        } else {
            // Else focus on the first list item
            setFocusedIndex(0);
            setTimeout(() => listItemRefs.current[0]?.focus(), 200);
        }
    }, [
        checkListItemSelected,
        disableItemFocus,
        focusedIndex,
        listItems,
        mounted,
        setFocusedIndex,
    ]);

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
                        {renderListItem ? (
                            renderListItem(item, { selected })
                        ) : (
                            <>
                                {renderListItemIcon(selected)}
                                {renderDropdownLabel(item, selected)}
                            </>
                        )}
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
                <ResultStateContainer
                    data-testid="list-no-results"
                    $variant={variant}
                >
                    <LabelIcon
                        data-testid="no-result-icon"
                        $variant={variant}
                    />
                    No results found.
                </ResultStateContainer>
            );
        }
    };

    const renderLoading = () => {
        if (onRetry && itemsLoadState === "loading") {
            return (
                <ResultStateContainer
                    data-testid="list-loading"
                    $variant={variant}
                >
                    <Spinner />
                    Loading...
                </ResultStateContainer>
            );
        }
    };

    const renderTryAgain = () => {
        if (onRetry && itemsLoadState === "fail") {
            return (
                <ResultStateContainer
                    data-testid="list-fail"
                    $variant={variant}
                >
                    <LabelIcon
                        data-testid="load-error-icon"
                        $variant={variant}
                    />
                    Failed to load.&nbsp;
                    <TryAgainButton
                        onClick={handleTryAgain}
                        type="button"
                        $variant={variant}
                    >
                        Try again.
                    </TryAgainButton>
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
