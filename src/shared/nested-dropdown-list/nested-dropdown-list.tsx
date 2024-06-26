import { enableMapSet, produce } from "immer";
import get from "lodash/get";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { Spinner } from "../../button/button.style";
import { useEventListener } from "../../util/use-event-listener";
import { ListItem } from "./list-item";
import { DropdownSearch } from "../dropdown-list/dropdown-search";
import {
    FormattedOptionMap,
    NestedDropdownListHelper,
} from "./nested-dropdown-list-helper";
import { CombinedFormattedOptionProps, NestedDropdownListProps } from "./types";
import {
    Container,
    DropdownCommonButton,
    LabelIcon,
    List,
    ResultStateContainer,
    ResultStateText,
    SelectAllContainer,
} from "./nested-dropdown-list.styles";

enableMapSet();

interface ListItemRef {
    ref?: HTMLButtonElement;
    subItems?: ListItemRef;
}

type Direction = "down" | "up";

/**
 * NOTE: This component is not directly exportables
 * but forms part of a component
 */
export const NestedDropdownList = <V1, V2, V3>({
    listItems: _listItems,
    listStyleWidth,
    hideNoResultsDisplay,
    enableSearch,
    searchPlaceholder = "Search",
    visible,
    mode = "default",
    multiSelect,
    selectedKeyPaths,
    selectableCategory,
    itemsLoadState = "success",
    itemTruncationType = "end",
    onBlur,
    onDismiss,
    onSelectAll,
    onRetry,
    onSearch,
    onSelectItem,
    ...otherProps
}: NestedDropdownListProps<V1, V2, V3>): JSX.Element => {
    // =============================================================================
    // CONST, REF, STATE
    // =============================================================================
    const initialItems = useMemo((): FormattedOptionMap<V1, V2, V3> => {
        if (!_listItems || !_listItems.length) return new Map([]);
        return NestedDropdownListHelper.getInitialItems(_listItems, [], mode);
    }, [_listItems]);

    const [searchValue, setSearchValue] = useState<string>("");
    const [contentHeight, setContentHeight] = useState<number>(0);
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [currentItems, setCurrentItems] =
        useState<FormattedOptionMap<V1, V2, V3>>(initialItems);
    const [filteredItems, setFilteredItems] =
        useState<FormattedOptionMap<V1, V2, V3>>(initialItems);
    const [focusedIndex, setFocusedIndex] = useState<number>(0);
    const [visibleKeyPaths, setVisibleKeyPaths] = useState<string[][]>([]);

    // React spring animation configuration
    const containerStyles = useSpring({
        height: contentHeight,
    });

    const nodeRef = useRef<HTMLDivElement>();
    const listRef = useRef<HTMLUListElement>();
    const listItemRefs = useRef<ListItemRef>({});
    const searchInputRef = useRef<HTMLInputElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (visible) {
            const list = getInitialDropdown();
            const keyPaths = NestedDropdownListHelper.getVisibleKeyPaths(list);

            if (searchInputRef.current) {
                searchInputRef.current.focus();
            } else if (listItemRefs.current) {
                const target = keyPaths[focusedIndex];
                listItemRefs.current[target[0]]?.ref.focus();
            }

            if (multiSelect) {
                const multiSelectList =
                    NestedDropdownListHelper.getUpdateCheckbox(
                        list,
                        selectedKeyPaths
                    );

                setCurrentItems(multiSelectList);
            } else {
                setCurrentItems(list);
            }

            setVisibleKeyPaths(keyPaths);
            // Give some time for the custom call-to-action to be rendered
            setTimeout(() => {
                setContentHeight(getContentHeight());
            });
        } else {
            listItemRefs.current = {};
            setFocusedIndex(0);
            setContentHeight(0);
            setSearchValue("");
            setCurrentItems(initialItems);
        }
    }, [visible]);

    useEffect(() => {
        if (visible) {
            // safeguard
            const contentHeight = getContentHeight();
            setContentHeight(contentHeight);
        }
    }, [currentItems, filteredItems]);

    useEffect(() => {
        filterAndUpdateList(searchValue);
    }, [searchValue]);

    useEffect(() => {
        if (visible && multiSelect) {
            const targetList = isSearch ? filteredItems : currentItems;

            const list = NestedDropdownListHelper.getUpdateCheckbox(
                targetList,
                selectedKeyPaths
            );

            isSearch ? setFilteredItems(list) : setCurrentItems(list);
        }
    }, [selectedKeyPaths, isSearch]);

    useEventListener("keydown", handleKeyboardPress, "document");

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleSelect = (item: CombinedFormattedOptionProps<V1, V2, V3>) => {
        const { label, keyPath, value } = item;
        onSelectItem({ label, keyPath, value });
    };

    const handleSelectCategory = (
        item: CombinedFormattedOptionProps<V1, V2, V3>
    ) => {
        const targetList = isSearch ? filteredItems : currentItems;
        const { label, keyPath, value } = item;

        const list = produce(
            targetList,
            (draft: FormattedOptionMap<V1, V2, V3>) => {
                const item = NestedDropdownListHelper.getItemAtKeyPath(
                    draft,
                    keyPath
                );

                item.expanded = true;

                if (item.subItems && item.subItems.size) {
                    for (const nextItem of item.subItems.values()) {
                        nextItem.expanded = true;
                    }
                }
            }
        );

        const visibleKeyPaths =
            NestedDropdownListHelper.getVisibleKeyPaths(list);
        setVisibleKeyPaths(visibleKeyPaths);
        isSearch ? setFilteredItems(list) : setCurrentItems(list);

        onSelectItem({ label, keyPath, value });
    };

    const handleSelectAll = () => {
        const isSelectedAll = !selectedKeyPaths.length;

        const { keyPaths, items, list } =
            NestedDropdownListHelper.updateSelectedAll(
                currentItems,
                isSelectedAll
            );

        if (onSelectAll) {
            setCurrentItems(list);
            isSelectedAll ? onSelectAll(keyPaths, items) : onSelectAll([], []);
        }
    };

    const handleExpand = (keyPath: string[]) => {
        const targetList = isSearch ? filteredItems : currentItems;

        const list = produce(
            targetList,
            (draft: FormattedOptionMap<V1, V2, V3>) => {
                const item = NestedDropdownListHelper.getItemAtKeyPath(
                    draft,
                    keyPath
                );
                item.expanded = !item.expanded;
            }
        );
        const keyPaths = NestedDropdownListHelper.getVisibleKeyPaths(list);

        setVisibleKeyPaths(keyPaths);
        isSearch ? setFilteredItems(list) : setCurrentItems(list);
    };

    const handleListItemRef = (
        ref: HTMLButtonElement,
        keyPath: string[],
        currentObj: ListItemRef = listItemRefs.current
    ) => {
        const [currentKey, ...remainingKeys] = keyPath;

        if (!currentObj[currentKey]) {
            currentObj[currentKey] = { ref: undefined, subItems: {} };
        }

        if (remainingKeys.length) {
            handleListItemRef(
                ref,
                remainingKeys,
                currentObj[currentKey].subItems
            );
        } else {
            currentObj[currentKey].ref = ref;
        }
    };

    const handleArrowUpDown = (direction: Direction) => {
        const upcomingIndex =
            direction === "down" ? focusedIndex + 1 : focusedIndex - 1;

        setFocusedIndex(upcomingIndex);

        const targetKey = visibleKeyPaths[upcomingIndex];

        const selectedItem = get(
            listItemRefs.current,
            targetKey.join(".subItems.")
        );

        selectedItem.ref.focus();
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

    function handleKeyboardPress(event: KeyboardEvent) {
        if (nodeRef.current && nodeRef.current.contains(event.target as Node)) {
            switch (event.code) {
                case "ArrowDown":
                    if (focusedIndex + 1 >= visibleKeyPaths.length) return;
                    handleArrowUpDown("down");
                    break;
                case "ArrowUp":
                    if (focusedIndex - 1 < 0) {
                        if (enableSearch) searchInputRef.current.focus();
                        return;
                    }
                    handleArrowUpDown("up");
                    break;
                case "Escape":
                    if (onDismiss) onDismiss(true);
                    break;
                default:
                    break;
            }
        }
    }

    const handleBlur = () => {
        if (onBlur) {
            handleBlur;
        }
    };

    const handleTryAgain = () => {
        if (onRetry) {
            onRetry();
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getContentHeight = () => {
        const listHeight =
            listRef && listRef.current
                ? listRef.current.getBoundingClientRect().height
                : 0;

        return listHeight;
    };

    const updateSearchState = (): FormattedOptionMap<V1, V2, V3> => {
        const search = (
            item: CombinedFormattedOptionProps<V1, V2, V3>,
            isParentMatch?: boolean
        ): CombinedFormattedOptionProps<V1, V2, V3> => {
            const searchTerm = searchValue.toLowerCase().trim();
            const matched = item.label.toLowerCase().indexOf(searchTerm) != -1;
            const isRootMatch =
                initialItems
                    .get(item.keyPath[0])
                    .label.toLowerCase()
                    .indexOf(searchTerm) != -1;

            if (!item.subItems) {
                if (matched) {
                    return {
                        ...item,
                        expanded: false,
                        isSearchTerm: true,
                    };
                } else if (isParentMatch || isRootMatch) {
                    return {
                        ...item,
                        expanded: false,
                        isSearchTerm: false,
                    };
                } else {
                    return undefined;
                }
            }

            const subItems: Map<
                string,
                CombinedFormattedOptionProps<V1, V2, V3>
            > = new Map();

            item.subItems.forEach((subItem) => {
                const result = search(subItem, matched);
                if (result) {
                    const key = result.keyPath[result.keyPath.length - 1];
                    subItems.set(key, result);
                }
            });

            let expanded = false;

            for (const item of subItems.values()) {
                if (item.isSearchTerm || item.expanded) {
                    expanded = true;
                }

                // remove category which didn't has any subItem
                if (item.subItems && item.subItems.size === 0) {
                    const removeKey = item.keyPath[item.keyPath.length - 1];
                    subItems.delete(removeKey);
                }
            }

            return {
                ...item,
                expanded,
                isSearchTerm: matched,
                subItems,
            } as CombinedFormattedOptionProps<V1, V2, V3>;
        };

        const list = new Map();

        for (const [key, item] of initialItems) {
            const result = search(item);

            if (result && result.subItems && result.subItems.size) {
                list.set(key, result);
            }
            // if a result is a matching searchTerm with no subItems
            else if (result && result.isSearchTerm) list.set(key, result);
        }

        return list;
    };

    const getInitialDropdown = () => {
        // use the existing expanded state if mode is specified
        if (["expand", "collapse"].includes(mode)) return initialItems;

        // otherwise expand the first selected item or first subitem tree
        const list = NestedDropdownListHelper.getInitialDropdown(
            initialItems,
            selectedKeyPaths
        );

        return list;
    };

    const resetVisbileKeyPaths = (list: FormattedOptionMap<V1, V2, V3>) => {
        const keyPaths = NestedDropdownListHelper.getVisibleKeyPaths(list);
        setVisibleKeyPaths(keyPaths);
        setFocusedIndex(0);
    };

    const filterAndUpdateList = (searchValue: string) => {
        if (searchValue === "") {
            resetVisbileKeyPaths(currentItems);
            setFilteredItems(initialItems);
            setIsSearch(false);
        } else if (searchValue.trim().length >= 3) {
            listItemRefs.current = {};
            const filtered = updateSearchState();
            setFilteredItems(filtered);
            resetVisbileKeyPaths(filtered);
            setIsSearch(true);

            if (multiSelect) {
                const multiSelectList =
                    NestedDropdownListHelper.getUpdateCheckbox(
                        filtered,
                        selectedKeyPaths
                    );

                setFilteredItems(multiSelectList);
            }
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = () => {
        if (!onRetry || (onRetry && itemsLoadState === "success")) {
            const list = isSearch ? filteredItems : currentItems;

            return Array.from(list).map(([key, item]) => (
                <ListItem
                    key={key}
                    item={item}
                    selectableCategory={selectableCategory}
                    searchValue={searchValue}
                    itemTruncationType={itemTruncationType}
                    multiSelect={multiSelect}
                    visible={visible}
                    onBlur={handleBlur}
                    onExpand={handleExpand}
                    onRef={handleListItemRef}
                    onSelect={handleSelect}
                    onSelectCategory={handleSelectCategory}
                />
            ));
        }
    };

    const renderSearchInput = () => {
        if (enableSearch && itemsLoadState === "success") {
            return (
                <DropdownSearch
                    ref={searchInputRef}
                    onChange={handleSearchInputChange}
                    value={searchValue}
                    placeholder={searchPlaceholder}
                    data-testid="search-input"
                    aria-label="Type to search"
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
            initialItems.size > 0 &&
            !isSearch &&
            itemsLoadState === "success"
        ) {
            return (
                <SelectAllContainer>
                    <DropdownCommonButton
                        onClick={handleSelectAll}
                        type="button"
                    >
                        {selectedKeyPaths.length === 0
                            ? "Select all"
                            : "Clear all"}
                    </DropdownCommonButton>
                </SelectAllContainer>
            );
        }
    };

    const renderNoResults = () => {
        if (isSearch) {
            if (!hideNoResultsDisplay && !filteredItems.size) {
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
                {renderLoading()}
                {renderNoResults()}
                {renderTryAgain()}
                {renderItems()}
            </List>
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
            </Container>
        </>
    );
};
