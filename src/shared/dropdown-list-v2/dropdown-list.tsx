import find from "lodash/find";
import isEqual from "lodash/isEqual";
import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import {
    useCompare,
    useEvent,
    useEventListener,
    useIsMounted,
} from "../../util";
import { DropdownLabel } from "./dropdown-label";
import { DropdownListStateContext } from "./dropdown-list-state";
import {
    CheckboxDisabledIndicator,
    CheckboxSelectedIndicator,
    CheckboxUnselectedIndicator,
    Container,
    LabelIcon,
    List,
    ListItem,
    Listbox,
    NoResultDescContainer,
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
    maxSelectable,
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
    noResultsDescription,
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
    const [displayListItems, setDisplayListItems] = useState(listItems ?? []);
    const itemsLoadStateChanged = useCompare(itemsLoadState);
    const mounted = useIsMounted();

    const nodeRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const listItemRefs = useRef<(HTMLElement | null)[]>([]);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const virtuosoRef = useRef<VirtuosoHandle>(null);

    const hasSelectedMax =
        !!maxSelectable &&
        !!selectedItems &&
        selectedItems?.length === maxSelectable;

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

    const getOptionLabel = (item: T): ListItemDisplayProps => {
        const value = listExtractor ? listExtractor(item) : item?.toString();

        if (typeof value === "object") {
            return { title: value.title, secondaryLabel: value.secondaryLabel };
        }

        return { title: value ?? "" };
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
        return searchFunction?.(searchValue);
    });

    const filterItemsByLabel = useEvent(() => {
        return listItems?.filter((item) => {
            const { title, secondaryLabel } = getOptionLabel(item);
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
        if (hasSelectedMax && !checkListItemSelected(item)) {
            return;
        }
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
        if (!topScrollItem) {
            virtuosoRef.current?.scrollTo({ top: 0 });
            return;
        }
        // Delay to ensure render is complete
        const timer = setTimeout(() => {
            if (!listItems) return;

            const index = listItems.indexOf(topScrollItem);
            if (virtuosoRef.current && index !== -1) {
                virtuosoRef.current.scrollToIndex({ index });
                setFocusedIndex(index);
            }
        }, 0);

        return () => clearTimeout(timer);
    }, [listItemRefs, listItems, setFocusedIndex, topScrollItem]);

    useEffect(() => {
        if (mounted) {
            // only run on mount
            return;
        }

        if (disableItemFocus || !listItems) return;

        const index = listItems.findIndex((item) =>
            checkListItemSelected(item)
        );

        // Focus search input if there is one
        if (searchInputRef.current) {
            setFocusedIndex(-1);
            setTimeout(() => searchInputRef.current?.focus(), 200); // Wait for animation
        } else if (focusedIndex > 0) {
            // Else focus on the specified element
            virtuosoRef.current?.scrollToIndex({
                index: focusedIndex,
                align: "center",
            });
            setTimeout(() => listItemRefs.current[focusedIndex]?.focus(), 200);
        } else if (index !== -1) {
            // Else focus on the selected element
            virtuosoRef.current?.scrollToIndex({ index, align: "center" });
            setFocusedIndex(index);
            setTimeout(() => listItemRefs.current[index]?.focus(), 200);
        } else {
            // Else focus on the first list item
            virtuosoRef.current?.scrollToIndex({ index: 0 });
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

        setDisplayListItems(filterItems() ?? []);
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
            if (hasSelectedMax && !selected) {
                return <CheckboxDisabledIndicator aria-hidden />;
            }

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
        const { title, secondaryLabel } = getOptionLabel(item);

        return (
            <DropdownLabel
                displayType={labelDisplayType}
                label={title}
                maxLines={itemMaxLines}
                selected={selected}
                disabled={!selected && hasSelectedMax}
                sublabel={secondaryLabel}
                truncationType={itemTruncationType}
                variant={variant}
            />
        );
    };

    const renderItem = (item: T, index: number) => {
        if (!onRetry || itemsLoadState === "success") {
            const selected = checkListItemSelected(item);
            const active = index === focusedIndex;
            return (
                <ListItem
                    aria-selected={selected}
                    aria-multiselectable={multiSelect}
                    aria-disabled={hasSelectedMax}
                    data-testid="list-item"
                    key={getItemKey(item, index)}
                    onClick={() => handleListItemClick(item, index)}
                    onMouseEnter={() => handleListItemHover(index)}
                    ref={(element) => {
                        listItemRefs.current[index] = element;
                    }}
                    role="option"
                    tabIndex={active ? 0 : -1}
                    $active={active}
                    $selected={selected}
                    $disabled={hasSelectedMax}
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
            selectedItems &&
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
                        {maxSelectable
                            ? "Clear"
                            : selectedItems.length === 0
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
                <>
                    <ResultStateContainer data-testid="list-no-results">
                        <LabelIcon data-testid="no-result-icon" />
                        No results found.
                    </ResultStateContainer>
                    {noResultsDescription && (
                        <NoResultDescContainer data-testid="no-result-desc">
                            {noResultsDescription}
                        </NoResultDescContainer>
                    )}
                </>
            );
        }
    };

    const renderLoading = () => {
        if (onRetry && itemsLoadState === "loading") {
            return (
                <ResultStateContainer data-testid="list-loading">
                    <Spinner />
                    Loading...
                </ResultStateContainer>
            );
        }
    };

    const renderTryAgain = () => {
        if (onRetry && itemsLoadState === "fail") {
            return (
                <ResultStateContainer data-testid="list-fail">
                    <LabelIcon data-testid="load-error-icon" />
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

    const renderVirtualisedList = () => {
        const isTestEnv = process.env.NODE_ENV === "test";

        return (
            <Listbox role="listbox" id={listboxId}>
                <Virtuoso
                    ref={virtuosoRef}
                    style={{ height: "100%" }}
                    data={displayListItems}
                    customScrollParent={nodeRef.current ?? undefined}
                    itemContent={(index, item) => renderItem(item, index)}
                    // disable virtualisation in tests
                    // https://github.com/petyosi/react-virtuoso/issues/26#issuecomment-1040316576
                    // explicitly set the `key` prop to avoid React warning
                    key={isTestEnv ? displayListItems.length : undefined}
                    // omit the `initialItemCount` prop to resolve NaN error
                    {...(isTestEnv
                        ? {
                              initialItemCount: displayListItems.length,
                          }
                        : {})}
                />
            </Listbox>
        );
    };

    const renderList = () => {
        return (
            <List ref={listRef} data-testid="dropdown-list">
                {renderSearchInput()}
                {renderSelectAll()}
                {renderNoResults()}
                {renderLoading()}
                {renderTryAgain()}
                {renderVirtualisedList()}
            </List>
        );
    };

    const renderBottomCta = () => {
        if (!renderCustomCallToAction) {
            return;
        }

        // FIXME: implement onDismiss handling
        return (
            <div data-testid="custom-cta">
                {renderCustomCallToAction(onDismiss as any, displayListItems)}
            </div>
        );
    };

    return (
        <Container
            data-testid="dropdown-container"
            ref={nodeRef}
            $width={width}
            $variant={variant}
        >
            {renderList()}
            {renderBottomCta()}
        </Container>
    );
};
