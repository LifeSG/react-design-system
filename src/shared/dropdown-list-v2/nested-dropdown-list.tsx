import { CaretRightIcon } from "@lifesg/react-icons/caret-right";
import { useEffect, useMemo, useRef, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { Spinner } from "../../button/button.style";
import { useEvent, useEventListener, useIsMounted } from "../../util";
import { DropdownLabel } from "./dropdown-label";
import {
    CheckboxSelectedIndicator,
    CheckboxUnselectedIndicator,
    Container,
    LabelIcon,
    List,
    ResultStateContainer,
    ResultStateText,
    SelectAllButton,
    SelectAllContainer,
    TryAgainButton,
} from "./dropdown-list.styles";
import { DropdownSearch } from "./dropdown-search";
import {
    expandFirstSubtree,
    expandMatchedSubtrees,
    expandSelectedSubtrees,
    findItemFromEnd,
    findItemFromStart,
    flattenList,
    toggleSubtree,
    updateSelectedState
} from "./nested-dropdown-list-helpers";
import {
    CheckboxMixedIndicator,
    ExpandButton,
    Indent,
    ListItem,
    ListItemContainer,
    SelectedIndicator,
    SelectionIndicator,
    UnexpandableIndicator,
} from "./nested-dropdown-list.styles";
import {
    NestedDropdownListItemProps,
    NestedDropdownListLocalItem,
    NestedDropdownListProps,
} from "./types";

export const NestedDropdownList = <T,>({
    listItems,
    multiSelect,
    selectedKeyPaths,
    itemsLoadState = "success",
    itemTruncationType = "end",
    itemMaxLines = 2,
    variant = "default",
    listboxId,
    width,
    mode = "default",
    selectableCategory: _selectableCategory,
    onSelectItem,
    onSelectAll,
    onRetry,
    /* DropdownSearchProps */
    enableSearch,
    hideNoResultsDisplay,
    searchPlaceholder = "Search",
    onSearch,
}: NestedDropdownListProps<T>) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const selectableCategory = multiSelect || _selectableCategory;
    const [searchValue, setSearchValue] = useState<string>("");
    const searchTerm = searchValue.toLowerCase().trim();
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const nodeRef = useRef<HTMLDivElement>();
    const listRef = useRef<HTMLDivElement>();
    const listItemRefs = useRef<HTMLElement[]>([]);
    const searchInputRef = useRef<HTMLInputElement>();
    const mounted = useIsMounted();

    // maintaining a separate list for search and non-search as we need to
    // preserve the original expanded state
    const [unfilteredListItems, setUnfilteredListItems] = useState<
        NestedDropdownListLocalItem<T>[]
    >([]);
    const [filteredListItems, setFilteredListItems] = useState<
        NestedDropdownListLocalItem<T>[]
    >([]);

    const activeList = searchActive ? filteredListItems : unfilteredListItems;

    const maxLevel = useMemo(() => {
        let currentMaxLevel = 0;
        for (const item of unfilteredListItems) {
            if (item.level > currentMaxLevel) {
                currentMaxLevel = item.level;
            }
        }
        return currentMaxLevel;
    }, [unfilteredListItems]);

    // TODO: persist in context?
    const [focusedIndex, setFocusedIndex] = useState(0);

    /**
     * NOTE: Keeping track of the visible items to pass to Virtuoso for virtualisation to work.
     * This is required due to the nature of show/hide sub-items, to omit them from the DOM entirely.
    */
    const [visibleItems, setVisibleItems] = useState<
        NestedDropdownListLocalItem<T>[]
    >([]);

    // NOTE: Maintaining a separate index for UI to keep track on which item (in terms of Virtuoso's indexing) is currently focused on keyboard press events.
    const [virtuosoIndex, setVirtuosoIndex] = useState(0);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleKeyboardPress = (event: KeyboardEvent) => {
        /**
         *  NOTE: When navigating up/down the list using keyboard, need to use virtuoso index, when expanding/collapsing, need actual index as we need to toggle the visible state of the sub-items
        */
        switch (event.code) {
            case "ArrowDown": {
                event.preventDefault();
                const upcomingItem = findItemFromStart(
                    activeList,
                    (item) => item.visible,
                    focusedIndex + 1
                );
                if (upcomingItem) {
                    setVirtuosoIndex((vIndex => vIndex + 1));
                    setFocusedIndex(upcomingItem.index);
                    listItemRefs.current[upcomingItem.index].focus();
                }
                break;
            }
            case "ArrowUp": {
                event.preventDefault();
                const upcomingItem = findItemFromEnd(
                    activeList,
                    (item) => item.visible,
                    focusedIndex - 1
                );
                if (upcomingItem) {
                    setVirtuosoIndex((vIndex) => vIndex - 1);
                    setFocusedIndex(upcomingItem.index);
                    listItemRefs.current[upcomingItem.index].focus();
                } else if (virtuosoIndex === 0 && searchInputRef.current) {
                    searchInputRef.current.focus();
                    setVirtuosoIndex(-1);
                    setFocusedIndex(-1);
                }
                break;
            }
            case "ArrowRight": {
                event.preventDefault();
                toggleCategory(focusedIndex, true);
                break;
            }
            case "ArrowLeft": {
                event.preventDefault();
                toggleCategory(focusedIndex, false);
                break;
            }
            case "Space": {
                if (
                    document.activeElement ===
                    listItemRefs.current[focusedIndex]
                ) {
                    event.preventDefault();
                    const target = activeList[focusedIndex];
                    if (target.hasSubItems && !selectableCategory) {
                        return;
                    }
                    onSelectItem?.(target);
                }
                break;
            }
        }
    };

    const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        setSearchValue(value);

        if (value === "") {
            setSearchActive(false);
        } else if (value.trim().length >= 3) {
            setSearchActive(true);
        }

        onSearch?.();
    };

    const handleOnClear = () => {
        setSearchValue("");
        setSearchActive(false);
        searchInputRef.current.focus();

        onSearch?.();
    };

    const handleTryAgain = () => {
        onRetry?.();
    };

    const handleListItemClick = (itemIndex: number, vIndex: number) => {
        setVirtuosoIndex(vIndex);
        onSelectItem?.(activeList[itemIndex]);
    };

    const handleListItemHover = (virtuosoIndex: number, listItem: NestedDropdownListLocalItem<T>
    ) => {
        setFocusedIndex(listItem.index);
        setVirtuosoIndex(virtuosoIndex);
    };

    const handleOnSelectAll = () => {
        if (selectedKeyPaths.length === 0) {
            const keyPaths: string[][] = [];
            const items: NestedDropdownListLocalItem<T>[] = [];
            unfilteredListItems.forEach((item) => {
                if (item.hasSubItems) {
                    return;
                }
                keyPaths.push(item.keyPath);
                items.push(item);
            });

            onSelectAll?.(keyPaths, items);
        } else {
            onSelectAll?.([], []);
        }
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const flatten = useEvent(
        (
            nestedList: NestedDropdownListItemProps<T>[],
            initialExpanded: boolean
        ): NestedDropdownListLocalItem<T>[] => {
            return flattenList(
                nestedList,
                selectedKeyPaths,
                multiSelect,
                searchTerm,
                initialExpanded
            );
        }
    );

    const flattenDefaultMode = useEvent(
        (nestedList: NestedDropdownListItemProps<T>[]) => {
            if (selectedKeyPaths.length) {
                return expandSelectedSubtrees(flatten(nestedList, false));
            } else {
                return expandFirstSubtree(flatten(nestedList, false));
            }
        }
    );

    const filter = useEvent((nestedList: NestedDropdownListItemProps<T>[]) => {
        const filterMatchedItems = (list: NestedDropdownListItemProps<T>[]) => {
            const matchedItems: NestedDropdownListItemProps<T>[] = [];
            for (const item of list) {
                const match =
                    item.label.toLowerCase().indexOf(searchTerm) !== -1;

                if (match) {
                    matchedItems.push(item);
                    continue;
                }

                if (item.subItems) {
                    const matchedSubItems = filterMatchedItems(item.subItems);
                    if (matchedSubItems.length > 0) {
                        matchedItems.push({
                            ...item,
                            subItems: matchedSubItems,
                        });
                        continue;
                    }
                }
            }
            return matchedItems;
        };
        return filterMatchedItems(nestedList);
    });

    const updateSelectedItemsInList = useEvent(() => {
        setUnfilteredListItems((unfilteredListItems) =>
            updateSelectedState(
                unfilteredListItems,
                selectedKeyPaths,
                multiSelect
            )
        );

        if (searchActive) {
            setFilteredListItems((filteredListItems) =>
                updateSelectedState(
                    filteredListItems,
                    selectedKeyPaths,
                    multiSelect
                )
            );
        }
    });

    const toggleCategory = (index: number, nextExpanded: boolean) => {
        const list = toggleSubtree(activeList, index, nextExpanded);
        setFocusedIndex(index);

        if (searchActive) {
            setFilteredListItems(list);
        } else {
            setUnfilteredListItems(list);
        }
    };

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEventListener("keydown", handleKeyboardPress);

    // FIXME - This is being called on every dropdown open click, will take time to load for big lists
    useEffect(() => {
        let list: NestedDropdownListLocalItem<T>[];
        if (mode === "default") {
            list = flattenDefaultMode(listItems);
        } else if (mode === "expand") {
            list = flatten(listItems, true);
        } else if (mode === "collapse") {
            list = flatten(listItems, false);
        }
        setUnfilteredListItems(list);

    }, [flatten, flattenDefaultMode, listItems, mode]);

    useEffect(() => {
        // Filter out non-visible items before passing to Virtuoso
        setVisibleItems(activeList.filter(item => item.visible));
    }, [filteredListItems, unfilteredListItems, searchActive, activeList]);

    useEffect(() => {
        updateSelectedItemsInList();
    }, [multiSelect, selectedKeyPaths, updateSelectedItemsInList]);

    useEffect(() => {
        if (searchActive && searchValue.trim().length >= 3) {
            const filteredListItems = filter(listItems);
            const list = expandMatchedSubtrees(
                flatten(filteredListItems, false)
            );

            setFilteredListItems(list);
        }
    }, [filter, flatten, listItems, searchActive, searchValue]);

    useEffect(() => {
        if (mounted) {
            // only run on mount
            return;
        }

        // Focus search input if there is one
        if (searchInputRef.current) {
            setFocusedIndex(-1);
            setVirtuosoIndex(-1);
            setTimeout(() => searchInputRef.current?.focus(), 200); // wait for animation
        } else if (listItemRefs.current[focusedIndex]) {
            // Else focus on the specified element
            setTimeout(() => listItemRefs.current[focusedIndex]?.focus(), 200);
        } else {
            // Else focus on the first list item
            setFocusedIndex(0);
            setVirtuosoIndex(0);
            setTimeout(() => listItemRefs.current[0]?.focus(), 200);
        }
    }, [focusedIndex, virtuosoIndex, mounted, setFocusedIndex, setVirtuosoIndex]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderSearchInput = () => {
        if (enableSearch && itemsLoadState === "success") {
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
            !searchActive &&
            unfilteredListItems.length > 0 &&
            itemsLoadState === "success"
        ) {
            return (
                <SelectAllContainer>
                    <SelectAllButton
                        onClick={handleOnSelectAll}
                        type="button"
                        $variant={variant}
                    >
                        {selectedKeyPaths.length === 0
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
            searchActive &&
            filteredListItems.length === 0 &&
            itemsLoadState === "success"
        ) {
            return (
                <ResultStateContainer data-testid="list-no-results">
                    <LabelIcon $variant={variant} />
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
    const renderSelectionIcon = (listItem: NestedDropdownListLocalItem<T>) => {
        if (multiSelect) {
            switch (listItem.checked) {
                case "mixed":
                    return <CheckboxMixedIndicator aria-hidden />;
                case true:
                    return <CheckboxSelectedIndicator aria-hidden />;
                default:
                    return <CheckboxUnselectedIndicator aria-hidden />;
            }
        }

        if (listItem.hasSubItems) {
            // no icon needed
            return;
        }

        return (
            <SelectionIndicator
                $hasNestedSiblings={
                    listItem.hasNestedSiblings || listItem.level === 0
                }
            >
                {listItem.checked && <SelectedIndicator aria-hidden />}
            </SelectionIndicator>
        );
    };


    const renderItems = (listItem: NestedDropdownListLocalItem<T>, vIndex: number) => {
        const {
            level,
            visible,
            expanded,
            keyPath,
            checked,
            hasSubItems,
            indexInParent,
            parentSetSize,
        } = listItem;
        const itemIndex = listItem.index;
        const active = virtuosoIndex === vIndex;
        const toggleable = hasSubItems && !selectableCategory;

        return (
            <ListItemContainer
                key={`[${keyPath.join("---")}]`}
                $visible={visible}
            >
                {maxLevel > 0 && <Indent $level={level} />}
                {maxLevel > 0 && !hasSubItems && multiSelect && (
                    <UnexpandableIndicator />
                )}
                <ListItem
                    aria-checked={checked} // not working with safari voiceover
                    aria-selected={!!checked} // required for safari voiceover
                    aria-expanded={hasSubItems ? expanded : undefined}
                    aria-level={level + 1}
                    aria-posinset={indexInParent + 1}
                    aria-setsize={parentSetSize}
                    data-testid="list-item"
                    onClick={(e) => {
                        e.stopPropagation();
                        if (toggleable) {
                            toggleCategory(itemIndex, !expanded);
                        } else {
                            handleListItemClick(itemIndex, vIndex);
                        }
                    }}
                    onMouseEnter={() => handleListItemHover(vIndex, listItem)}
                    ref={(node) => (listItemRefs.current[listItem.index] = node)}
                    role="treeitem"
                    tabIndex={active ? 0 : -1}
                    $active={active}
                    $toggleable={toggleable}
                >
                    {hasSubItems && (
                        // not an actual button, only required for visual display
                        <ExpandButton
                            data-testid="toggle-category-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleCategory(itemIndex, !expanded);
                            }}
                            $expanded={expanded}
                        >
                            <CaretRightIcon />
                        </ExpandButton>
                    )}
                    {renderSelectionIcon(listItem)}
                    <DropdownLabel
                        bold={hasSubItems}
                        searchTerm={searchActive ? searchTerm : undefined}
                        label={listItem.item.label}
                        selected={!!checked}
                        truncationType={itemTruncationType}
                        maxLines={itemMaxLines}
                    />
                </ListItem>
            </ListItemContainer>
        );
    };

    const renderVirtualisedList = () => {
        return (
            <div
                aria-multiselectable={multiSelect}
                id={listboxId}
                ref={listRef}
                role="tree"
            >
                <Virtuoso
                    style={{ height: '100%' }}
                    customScrollParent={nodeRef.current}
                    data={visibleItems}
                    itemContent={(vIndex, item) => renderItems(item, vIndex)}
                />
            </div>
        );
    };

    const renderList = () => {
        return (
            <List data-testid="nested-dropdown-list">
                {renderSearchInput()}
                {renderSelectAll()}
                {renderNoResults()}
                {renderLoading()}
                {renderTryAgain()}
                {renderVirtualisedList()}
            </List>
        );
    };

    return (
        <Container
            data-testid="dropdown-container"
            ref={nodeRef}
            $width={width}
        >
            {renderList()}
        </Container>
    );
};
