import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { SquareIcon } from "@lifesg/react-icons/square";
import { SquareFillIcon } from "@lifesg/react-icons/square-fill";
import { SquareTickFillIcon } from "@lifesg/react-icons/square-tick-fill";
import { TickIcon } from "@lifesg/react-icons/tick";
import clsx from "clsx";
import find from "lodash/find";
import isEqual from "lodash/isEqual";
import type React from "react";
import {
    forwardRef,
    useCallback,
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import type { VirtuosoHandle } from "react-virtuoso";
import { Virtuoso } from "react-virtuoso";

import { Markup } from "../../markup";
import { useApplyStyle } from "../../theme";
import {
    mergeRefs,
    useCompare,
    useEvent,
    useEventListener,
    useIsMounted,
} from "../../util";
import { VisuallyHidden } from "../accessibility";
import { ComponentLoadingSpinner } from "../component-loading-spinner";
import { useDropdownRender } from "../dropdown-wrapper";
import { BasicButton } from "../input-wrapper";
import { DropdownLabel } from "./dropdown-label";
import * as styles from "./dropdown-list.styles";
import { DropdownListStateContext } from "./dropdown-list-state";
import { DropdownSearch } from "./dropdown-search";
import type {
    DropdownListApi,
    DropdownListProps,
    ListItemDisplayProps,
} from "./types";

/**
 * NOTE: This component is not directly exportable but forms part of a component
 */
const DropdownListInner = <T, V>(
    {
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
        ariaLabel,
        matchElementWidth = false,
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
        noResultsDescription: _noResultsDescription,
        customLabels,
        searchPlaceholder: _searchPlaceholder,
        searchFunction,
        onSearch,
    }: DropdownListProps<T, V>,
    ref: React.ForwardedRef<DropdownListApi>
): JSX.Element => {
    // =========================================================================
    // CONST, REF, STATE
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
    const { focusedIndex, setFocusedIndex } = useContext(
        DropdownListStateContext
    );
    const {
        elementWidth,
        setFloatingRef,
        getFloatingProps,
        styles: floatingStyles,
    } = useDropdownRender();
    const [searchValue, setSearchValue] = useState<string>("");
    const [displayListItems, setDisplayListItems] = useState(listItems ?? []);
    const itemsLoadStateChanged = useCompare(itemsLoadState);
    const mounted = useIsMounted();

    const nodeRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const listItemRefs = useRef<(HTMLElement | null)[]>([]);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const virtuosoRef = useRef<VirtuosoHandle>(null);

    const hasSelectedMax =
        !!maxSelectable &&
        !!selectedItems &&
        selectedItems?.length === maxSelectable;

    const containerWidthStyle: React.CSSProperties = width
        ? { width }
        : matchElementWidth && elementWidth
        ? { width: elementWidth }
        : {};

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const getValue = (item: T): V => {
        return valueExtractor ? valueExtractor(item) : (item as unknown as V);
    };

    const getItemKey = (item: T, index: number) => {
        const formattedValue = valueExtractor ? valueExtractor(item) : item;
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
                title.toLowerCase().includes(updatedSearchValue) ||
                (secondaryLabel &&
                    secondaryLabel.toLowerCase().includes(updatedSearchValue))
            );
        });
    });

    const refocus = useCallback(
        (opts?: { index?: number; preferSelected?: boolean }) => {
            if (disableItemFocus) return;

            if (searchInputRef.current) {
                setFocusedIndex(-1);
                setTimeout(() => searchInputRef.current?.focus(), 0);
                return;
            }

            const items = displayListItems ?? [];
            if (items.length === 0) return;

            if (opts?.index !== undefined) {
                const forced = Math.max(
                    0,
                    Math.min(opts.index, items.length - 1)
                );
                virtuosoRef.current?.scrollToIndex({
                    index: forced,
                    align: "center",
                });
                setFocusedIndex(forced);
                setTimeout(() => listItemRefs.current[forced]?.focus(), 0);

                return;
            }

            const selectedIndex = opts?.preferSelected
                ? items.findIndex((item) => checkListItemSelected(item))
                : -1;

            const nextIndex =
                selectedIndex !== -1
                    ? selectedIndex
                    : focusedIndex >= 0 && focusedIndex < items.length
                    ? focusedIndex
                    : 0;

            virtuosoRef.current?.scrollToIndex({
                index: nextIndex,
                align: "center",
            });
            setFocusedIndex(nextIndex);
            setTimeout(() => listItemRefs.current[nextIndex]?.focus(), 0);
        },
        [
            checkListItemSelected,
            disableItemFocus,
            displayListItems,
            focusedIndex,
            setFocusedIndex,
        ]
    );

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleKeyboardPress = (event: KeyboardEvent) => {
        switch (event.code) {
            case "ArrowDown":
                event.preventDefault();
                if (focusedIndex < displayListItems.length - 1) {
                    const upcomingIndex = focusedIndex + 1;
                    listItemRefs.current[upcomingIndex]?.focus();
                    setFocusedIndex(upcomingIndex);
                }
                break;
            case "ArrowUp":
                event.preventDefault();
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
        if (hasSelectedMax && !checkListItemSelected(item)) return;
        setFocusedIndex(upcomingIndex);
        onSelectItem?.(item, getValue(item));
    };

    const handleListItemHover = (index: number) => setFocusedIndex(index);

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

    const handleTryAgain = () => onRetry?.();

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEventListener("keydown", handleKeyboardPress);
    useImperativeHandle(ref, () => ({ refocus }), [refocus]);

    useEffect(() => {
        if (!topScrollItem) {
            virtuosoRef.current?.scrollTo({ top: 0 });
            return;
        }
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
        if (disableItemFocus) return;
        if (!mounted || !itemsLoadStateChanged) return;

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

    useEffect(() => {
        if (mounted) {
            return;
        }

        if (disableItemFocus || !listItems) return;

        const index = listItems.findIndex((item) =>
            checkListItemSelected(item)
        );

        if (searchInputRef.current) {
            setFocusedIndex(-1);
            setTimeout(() => searchInputRef.current?.focus(), 200);
        } else if (focusedIndex > 0) {
            virtuosoRef.current?.scrollToIndex({
                index: focusedIndex,
                align: "center",
            });
            setTimeout(() => listItemRefs.current[focusedIndex]?.focus(), 200);
        } else if (index !== -1) {
            virtuosoRef.current?.scrollToIndex({ index, align: "center" });
            setFocusedIndex(index);
            setTimeout(() => listItemRefs.current[index]?.focus(), 200);
        } else {
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

    // =========================================================================
    // APPLY STYLES
    // =========================================================================

    useApplyStyle(nodeRef, {
        ...floatingStyles,
        ...containerWidthStyle,
    });

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderListItemIcon = (selected: boolean) => {
        if (multiSelect) {
            if (hasSelectedMax && !selected) {
                return (
                    <SquareFillIcon
                        aria-hidden
                        className={styles.checkboxDisabledIndicator}
                    />
                );
            }

            return selected ? (
                <SquareTickFillIcon
                    aria-hidden
                    className={styles.checkboxSelectedIndicator}
                />
            ) : (
                <SquareIcon
                    aria-hidden
                    className={styles.checkboxUnselectedIndicator}
                />
            );
        }

        return selected ? (
            <TickIcon aria-hidden className={styles.selectedIndicator} />
        ) : (
            <div className={styles.unselectedIndicator} />
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
            const disabled = !selected && hasSelectedMax;
            return (
                <li
                    aria-selected={selected}
                    aria-multiselectable={multiSelect}
                    aria-disabled={disabled}
                    aria-posinset={index + 1}
                    aria-setsize={displayListItems?.length}
                    data-testid="list-item"
                    key={getItemKey(item, index)}
                    onClick={() => handleListItemClick(item, index)}
                    onMouseEnter={() => handleListItemHover(index)}
                    ref={(element) => {
                        listItemRefs.current[index] = element;
                    }}
                    role="option"
                    tabIndex={active ? 0 : -1}
                    className={clsx(
                        styles.listItem,
                        disabled && styles.listItemDisabled,
                        active && selected && styles.listItemActiveSelected,
                        active && !selected && styles.listItemActive
                    )}
                >
                    {renderListItem ? (
                        renderListItem(item, { selected })
                    ) : (
                        <>
                            {renderListItemIcon(selected)}
                            {renderDropdownLabel(item, selected)}
                        </>
                    )}
                </li>
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
                <div className={styles.selectAllContainer}>
                    <BasicButton
                        onClick={onSelectAll}
                        type="button"
                        className={styles.selectAllButton}
                    >
                        {maxSelectable || selectedItems.length !== 0
                            ? clearAllButtonLabel
                            : selectAllButtonLabel}
                    </BasicButton>
                </div>
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

    const renderVirtualisedList = () => {
        const isTestEnv = process.env.NODE_ENV === "test";

        return (
            <ul role="listbox" id={listboxId} className={styles.listbox}>
                <Virtuoso
                    ref={virtuosoRef}
                    style={{ height: "100%" }}
                    data={displayListItems}
                    customScrollParent={nodeRef.current ?? undefined}
                    itemContent={(index, item) => renderItem(item, index)}
                    key={isTestEnv ? displayListItems.length : undefined}
                    {...(isTestEnv
                        ? {
                              initialItemCount: displayListItems.length,
                          }
                        : {})}
                />
            </ul>
        );
    };

    const renderList = () => {
        return (
            <div
                ref={listRef}
                data-testid="dropdown-list"
                role="group"
                aria-label={ariaLabel}
                className={styles.list}
            >
                {renderSearchInput()}
                {renderSelectAll()}
                {renderNoResults()}
                {renderLoading()}
                {renderTryAgain()}
                {renderVirtualisedList()}
            </div>
        );
    };

    const renderBottomCta = () => {
        if (!renderCustomCallToAction) {
            return;
        }

        return (
            <div data-testid="custom-cta">
                {renderCustomCallToAction(onDismiss as any, displayListItems)}
            </div>
        );
    };

    return (
        <div
            data-testid="dropdown-container"
            ref={mergeRefs(nodeRef, setFloatingRef)}
            {...getFloatingProps()}
            className={clsx(
                styles.container,
                variant === "small"
                    ? styles.containerVariantSmall
                    : styles.containerVariantDefault
            )}
        >
            <VisuallyHidden role="status">{ariaLabel}</VisuallyHidden>
            {renderList()}
            {renderBottomCta()}
        </div>
    );
};

export const DropdownList = forwardRef(DropdownListInner);
