import { CaretRightIcon } from "@lifesg/react-icons/caret-right";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { MinusSquareFillIcon } from "@lifesg/react-icons/minus-square-fill";
import { SquareIcon } from "@lifesg/react-icons/square";
import { SquareTickFillIcon } from "@lifesg/react-icons/square-tick-fill";
import { TickIcon } from "@lifesg/react-icons/tick";
import clsx from "clsx";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Virtuoso } from "react-virtuoso";

import { Markup } from "../../markup";
import {
    mergeRefs,
    useEvent,
    useEventListener,
    useIsMounted,
} from "../../util";
import { ComponentLoadingSpinner } from "../component-loading-spinner";
import { useDropdownRender } from "../dropdown-wrapper";
import { BasicButton } from "../input-wrapper";
import { DropdownLabel } from "./dropdown-label";
import * as styles from "./dropdown-list.styles";
import { DropdownSearch } from "./dropdown-search";
import * as nestedStyles from "./nested-dropdown-list.styles";
import {
    expandFirstSubtree,
    expandMatchedSubtrees,
    expandSelectedSubtrees,
    findItemFromEnd,
    findItemFromStart,
    flattenList,
    toggleSubtree,
    updateSelectedState,
} from "./nested-dropdown-list-helpers";
import type {
    NestedDropdownListItemProps,
    NestedDropdownListLocalItem,
    NestedDropdownListProps,
} from "./types";

export const NestedDropdownList = <T,>({
    listItems,
    multiSelect = false,
    selectedKeyPaths,
    itemsLoadState = "success",
    itemTruncationType = "end",
    itemMaxLines = 2,
    variant = "default",
    listboxId,
    matchElementWidth = false,
    width,
    mode = "default",
    selectableCategory: _selectableCategory,
    onSelectItem,
    onSelectAll,
    onRetry,
    /* DropdownSearchProps */
    enableSearch,
    hideNoResultsDisplay,
    noResultsDescription: _noResultsDescription,
    customLabels,
    searchPlaceholder: _searchPlaceholder,
    onSearch,
}: NestedDropdownListProps<T>) => {
    // =========================================================================
    // CONST, STATE, REF
    // =========================================================================
    const {
        noResultsLabel = "No results found.",
        selectAllButtonLabel = "Select all",
        clearAllButtonLabel = "Clear all",
    } = customLabels || {};
    const searchPlaceholder =
        customLabels?.searchPlaceholder || _searchPlaceholder || "Search";
    const noResultsDescription =
        customLabels?.noResultsDescription || _noResultsDescription;
    const selectableCategory = multiSelect || _selectableCategory;

    const {
        elementWidth,
        setFloatingRef,
        getFloatingProps,
        styles: floatingStyles,
    } = useDropdownRender();
    const [searchValue, setSearchValue] = useState<string>("");
    const searchTerm = searchValue.toLowerCase().trim();
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const nodeRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const listItemRefs = useRef<(HTMLElement | null)[]>([]);
    const searchInputRef = useRef<HTMLInputElement>(null);
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
                    setVirtuosoIndex((vIndex) => vIndex + 1);
                    setFocusedIndex(upcomingItem.index);
                    listItemRefs.current[upcomingItem.index]?.focus();
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
                    listItemRefs.current[upcomingItem.index]?.focus();
                } else if (virtuosoIndex === 0 && searchInputRef.current) {
                    searchInputRef.current.focus();
                    setVirtuosoIndex(-1);
                    setFocusedIndex(-1);
                }
                break;
            }
            case "ArrowRight": {
                event.preventDefault();
                toggleCategory(focusedIndex, true, virtuosoIndex);
                break;
            }
            case "ArrowLeft": {
                event.preventDefault();
                toggleCategory(focusedIndex, false, virtuosoIndex);
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
        searchInputRef.current?.focus();

        onSearch?.();
    };

    const handleTryAgain = () => {
        onRetry?.();
    };

    const handleListItemClick = (itemIndex: number, vIndex: number) => {
        setVirtuosoIndex(vIndex);
        setFocusedIndex(itemIndex);
        onSelectItem?.(activeList[itemIndex]);
    };

    const handleListItemHover = (
        virtuosoIndex: number,
        listItem: NestedDropdownListLocalItem<T>
    ) => {
        setFocusedIndex(listItem.index);
        setVirtuosoIndex(virtuosoIndex);
    };

    const handleOnSelectAll = () => {
        if (selectedKeyPaths.size === 0) {
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
            if (selectedKeyPaths.size) {
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

    const toggleCategory = (
        index: number,
        nextExpanded: boolean,
        virtuosoIndex: number
    ) => {
        const list = toggleSubtree(activeList, index, nextExpanded);
        setFocusedIndex(index);
        setVirtuosoIndex(virtuosoIndex);
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

    useEffect(() => {
        let list: NestedDropdownListLocalItem<T>[] = [];
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
        setVisibleItems(activeList.filter((item) => item.visible));
    }, [searchActive, activeList]);

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
    }, [focusedIndex, virtuosoIndex, mounted]);

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
                <div className={styles.selectAllContainer}>
                    <BasicButton
                        onClick={handleOnSelectAll}
                        type="button"
                        className={styles.selectAllButton}
                    >
                        {selectedKeyPaths.size === 0
                            ? selectAllButtonLabel
                            : clearAllButtonLabel}
                    </BasicButton>
                </div>
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
                <>
                    <div
                        data-testid="list-no-results"
                        className={styles.resultStateContainer}
                    >
                        <ExclamationCircleFillIcon
                            data-testid="no-result-icon"
                            className={styles.labelIcon}
                        />
                        {noResultsLabel}
                    </div>
                    {noResultsDescription && (
                        <Markup
                            data-testid="no-result-desc"
                            className={styles.noResultDescContainer}
                        >
                            {noResultsDescription}
                        </Markup>
                    )}
                </>
            );
        }
    };

    const renderLoading = () => {
        if (onRetry && itemsLoadState === "loading") {
            return (
                <div
                    data-testid="list-loading"
                    className={styles.resultStateContainer}
                >
                    <ComponentLoadingSpinner className={styles.spinner} />
                    Loading...
                </div>
            );
        }
    };

    const renderTryAgain = () => {
        if (onRetry && itemsLoadState === "fail") {
            return (
                <div
                    data-testid="list-fail"
                    className={styles.resultStateContainer}
                >
                    <ExclamationCircleFillIcon
                        data-testid="load-error-icon"
                        className={styles.labelIcon}
                    />
                    Failed to load.&nbsp;
                    <BasicButton
                        onClick={handleTryAgain}
                        type="button"
                        className={styles.tryAgainButton}
                    >
                        Try again.
                    </BasicButton>
                </div>
            );
        }
    };
    const renderSelectionIcon = (listItem: NestedDropdownListLocalItem<T>) => {
        if (multiSelect) {
            switch (listItem.checked) {
                case "mixed":
                    return (
                        <MinusSquareFillIcon
                            aria-hidden
                            className={nestedStyles.checkboxMixedIndicator}
                        />
                    );
                case true:
                    return (
                        <SquareTickFillIcon
                            aria-hidden
                            className={styles.checkboxSelectedIndicator}
                        />
                    );
                default:
                    return (
                        <SquareIcon
                            aria-hidden
                            className={styles.checkboxUnselectedIndicator}
                        />
                    );
            }
        }

        if (listItem.hasSubItems) {
            // no icon needed
            return;
        }

        return (
            <div
                className={clsx(
                    nestedStyles.selectionIndicator,
                    (listItem.hasNestedSiblings || listItem.level === 0) &&
                        nestedStyles.selectionIndicatorNested
                )}
            >
                {listItem.checked && (
                    <TickIcon
                        aria-hidden
                        className={styles.selectedIndicator}
                    />
                )}
            </div>
        );
    };

    const renderItem = (
        listItem: NestedDropdownListLocalItem<T>,
        vIndex: number
    ) => {
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
            <li
                key={`[${keyPath.join("---")}]`}
                className={clsx(
                    nestedStyles.listItemContainer,
                    !visible && nestedStyles.listItemContainerHidden
                )}
            >
                {maxLevel > 0 && (
                    <div
                        className={nestedStyles.indent}
                        ref={(node) => {
                            if (node) {
                                node.style.setProperty(
                                    nestedStyles.tokens.level,
                                    String(level)
                                );
                            }
                        }}
                    />
                )}
                {maxLevel > 0 && !hasSubItems && multiSelect && (
                    <div className={nestedStyles.unexpandableIndicator} />
                )}
                <div
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
                            toggleCategory(itemIndex, !expanded, vIndex);
                        } else {
                            handleListItemClick(itemIndex, vIndex);
                        }
                    }}
                    onMouseEnter={() => handleListItemHover(vIndex, listItem)}
                    ref={(node) =>
                        (listItemRefs.current[listItem.index] = node)
                    }
                    role="treeitem"
                    tabIndex={active ? 0 : -1}
                    className={clsx(
                        nestedStyles.listItem,
                        active && nestedStyles.listItemActive,
                        toggleable && nestedStyles.listItemToggleable
                    )}
                >
                    {hasSubItems && (
                        // not an actual button, only required for visual display
                        <div
                            data-testid="toggle-category-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleCategory(itemIndex, !expanded, vIndex);
                            }}
                            className={clsx(
                                nestedStyles.expandButton,
                                expanded && nestedStyles.expandButtonExpanded
                            )}
                        >
                            <CaretRightIcon />
                        </div>
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
                </div>
            </li>
        );
    };

    const renderVirtualisedList = () => {
        const isTestEnv = process.env.NODE_ENV === "test";

        return (
            <div
                aria-multiselectable={multiSelect}
                id={listboxId}
                ref={listRef}
                role="tree"
            >
                <Virtuoso
                    style={{ height: "100%" }}
                    customScrollParent={nodeRef.current ?? undefined}
                    data={visibleItems}
                    itemContent={(vIndex, item) => renderItem(item, vIndex)}
                    // disable virtualisation in tests
                    // https://github.com/petyosi/react-virtuoso/issues/26#issuecomment-1040316576
                    // explicitly set the `key` prop to avoid React warning
                    key={isTestEnv ? visibleItems.length : undefined}
                    // omit the `initialItemCount` prop to resolve NaN error
                    {...(isTestEnv
                        ? {
                              initialItemCount: visibleItems.length,
                          }
                        : {})}
                />
            </div>
        );
    };

    const renderList = () => {
        return (
            <div data-testid="nested-dropdown-list" className={styles.list}>
                {renderSearchInput()}
                {renderSelectAll()}
                {renderNoResults()}
                {renderLoading()}
                {renderTryAgain()}
                {renderVirtualisedList()}
            </div>
        );
    };

    const containerWidthStyle: React.CSSProperties = width
        ? { width }
        : matchElementWidth && elementWidth
        ? { width: elementWidth }
        : {};

    return (
        <div
            data-testid="dropdown-container"
            ref={mergeRefs(nodeRef, setFloatingRef)}
            style={{ ...floatingStyles, ...containerWidthStyle }}
            {...getFloatingProps()}
            className={clsx(
                styles.container,
                variant === "small"
                    ? styles.containerVariantSmall
                    : styles.containerVariantDefault
            )}
        >
            {renderList()}
        </div>
    );
};
