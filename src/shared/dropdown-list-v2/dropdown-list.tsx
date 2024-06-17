import find from "lodash/find";
import isEqual from "lodash/isEqual";
import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { Spinner } from "../../button/button.style";
import { useCompare, useEventListener, useIsMount, useMount } from "../../util";
import { DropdownSearch } from "../dropdown-list/dropdown-search";
import { DropdownLabel } from "./dropdown-label";
import { DropdownListStateContext } from "./dropdown-list-state";
import {
    Container,
    DropdownCommonButton,
    LabelIcon,
    List,
    ListCheckbox,
    ListItem,
    ResultStateContainer,
    ResultStateText,
    SelectAllContainer,
} from "./dropdown-list.styles";
import {
    DropdownListProps,
    ListItemDisplayProps,
} from "../dropdown-list/types";

/**
 * NOTE: This component is not directly exportables
 * but forms part of a component
 */
export const DropdownList = <T, V>({
    listItems,
    listExtractor,
    valueExtractor,
    onSelectItem,
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
    itemMaxLines = 2,
    labelDisplayType = "inline",
    renderListItem,
    hideNoResultsDisplay,
    renderCustomCallToAction,
    variant = "default",
}: DropdownListProps<T, V>): JSX.Element => {
    // =========================================================================
    // CONST, REF, STATE
    // =========================================================================
    const { focusedIndex, setFocusedIndex } = useContext(
        DropdownListStateContext
    );
    const [searchValue, setSearchValue] = useState<string>("");
    const listItemsChanged = useCompare(listItems);
    const mounted = useIsMount();

    const nodeRef = useRef<HTMLDivElement>();
    const listRef = useRef<HTMLDivElement>();
    const listItemRefs = useRef<HTMLElement[]>([]);
    const searchInputRef = useRef<HTMLInputElement>();

    const getOptionLabel = useCallback(
        (item: T): string | ListItemDisplayProps => {
            return listExtractor ? listExtractor(item) : item.toString();
        },
        [listExtractor]
    );

    const filteredItems = useMemo(() => {
        if (searchValue === "") {
            return listItems;
        } else if (searchFunction) {
            return searchFunction(searchValue);
        } else {
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
                    (secondaryLabel &&
                        secondaryLabel.includes(updatedSearchValue))
                );
            });
        }
    }, [searchValue, searchFunction, getOptionLabel, listItems]);

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

    const checkListItemSelected = (item: T): boolean => {
        return !!find(selectedItems, (arrItem) => {
            return isEqual(arrItem, item);
        });
    };

    const hasNextLineLabel = () => {
        return (
            labelDisplayType === "next-line" &&
            filteredItems.length > 0 &&
            listExtractor &&
            typeof listExtractor(filteredItems[0]) !== "string"
        );
    };

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleKeyboardPress = (event: KeyboardEvent) => {
        switch (event.code) {
            case "ArrowDown":
                event.preventDefault();
                // Cannot go further than last element
                if (focusedIndex < filteredItems.length - 1) {
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
            case "Escape":
                event.preventDefault();
                if (onDismiss) onDismiss(true);
                break;
            case "Space":
                event.preventDefault();
                handleListItemClick(filteredItems[focusedIndex]);
                break;
            default:
                break;
        }
    };

    const handleListItemClick = (item: T) => {
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

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEventListener("keydown", handleKeyboardPress);

    useMount(() => {
        setSearchValue("");

        // Focus search input if there is a search input
        if (searchInputRef && searchInputRef.current) {
            setFocusedIndex(-1);
            setTimeout(() => searchInputRef.current.focus(), 200); // wait for animation
        } else {
            // Else focus on the specified element
            const target =
                listItemRefs.current[focusedIndex] || listItemRefs.current[0];
            if (target) {
                setTimeout(() => target.focus(), 200); // wait for animation
            }
        }
    });

    useEffect(() => {
        if (!mounted || !listItemsChanged) {
            return;
        }

        // Clear search input if list items changed
        setSearchValue("");
        setFocusedIndex(-1);

        if (listItemRefs.current[0]) {
            listItemRefs.current[0].focus();
        }
    }, [mounted, listItemsChanged, listItems, setFocusedIndex]);

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderDropdownLabels = (item: T) => {
        const label = getOptionLabel(item);
        const title = typeof label === "string" ? label : label.title;
        const secondaryLabel =
            typeof label == "string" ? undefined : label.secondaryLabel;

        return (
            <DropdownLabel
                containerRef={listRef}
                label={title}
                sublabel={secondaryLabel}
                displayType={labelDisplayType}
                maxLines={itemMaxLines}
                truncationType={itemTruncationType}
                variant={variant}
            />
        );
    };

    const renderItems = () => {
        if (!onRetry || (onRetry && itemsLoadState === "success")) {
            return filteredItems.map((item, index) => {
                const selected = checkListItemSelected(item);
                return (
                    <ListItem
                        aria-selected={selected}
                        aria-multiselectable={multiSelect}
                        data-testid="list-item"
                        key={getItemKey(item, index)}
                        onClick={() => handleListItemClick(item)}
                        ref={(element) =>
                            (listItemRefs.current[index] = element)
                        }
                        role="option"
                        tabIndex={-1}
                        $checked={selected && !multiSelect}
                        $hasNextLineLabel={hasNextLineLabel()}
                        $multiSelect={multiSelect}
                        $variant={variant}
                    >
                        {multiSelect && (
                            <ListCheckbox
                                checked={selected}
                                displaySize={"small"}
                            />
                        )}
                        {renderListItem
                            ? renderListItem(item, {
                                  selected,
                              })
                            : renderDropdownLabels(item)}
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

        return null;
    };

    const renderSelectAll = () => {
        if (
            multiSelect &&
            filteredItems.length > 0 &&
            !searchValue &&
            itemsLoadState === "success"
        ) {
            return (
                <SelectAllContainer>
                    <DropdownCommonButton
                        onClick={onSelectAll}
                        type="button"
                        $variant={variant}
                    >
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
            filteredItems.length === 0 &&
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
            const spinnerSize = variant === "small" ? 16 : 24;

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
                <ul role="listbox">{renderItems()}</ul>
            </List>
        );
    };

    const renderBottomCta = () => {
        if (!renderCustomCallToAction) {
            return;
        }

        return (
            <div data-testid="custom-cta">
                {renderCustomCallToAction(onDismiss, filteredItems)}
            </div>
        );
    };

    return (
        <Container data-testid="dropdown-container" ref={nodeRef}>
            {renderList()}
            {renderBottomCta()}
        </Container>
    );
};
