import { enableMapSet, produce } from "immer";
import get from "lodash/get";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { Spinner } from "../../button/button.style";
import { CombinedOptionProps } from "../../input-nested-select";
import { useEventListener } from "../../util/use-event-listener";
import { ListItem } from "./list-item";
import { DropdownSearch } from "./dropdown-search";
import {
    Container,
    DropdownCommonButton,
    LabelIcon,
    List,
    ResultStateContainer,
    ResultStateText,
} from "./nested-dropdown-list.styles";
import {
    CombinedFormattedOptionProps,
    FormattedOption,
    NestedDropdownListProps,
} from "./types";

enableMapSet();

interface ListItemRef {
    ref?: HTMLButtonElement;
    subItems?: ListItemRef;
}

type Direction = "down" | "up";

type FormattedOptionMap<V1, V2, V3> = Map<string, FormattedOption<V1, V2, V3>>;

/**
 * NOTE: This component is not directly exportables
 * but forms part of a component
 */
export const NestedDropdownList = <V1, V2, V3>({
    listItems: _listItems,
    listStyleWidth,
    hideNoResultsDisplay,
    enableSearch,
    searchFunction,
    searchPlaceholder = "Search",
    visible,
    mode = "default",
    selectedKeyPath,
    itemsLoadState = "success",
    itemTruncationType = "end",
    onBlur,
    onDismiss,
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

        const formatted = (
            options: CombinedOptionProps<V1, V2, V3>[],
            parentKeys: string[]
        ): FormattedOptionMap<V1, V2, V3> => {
            return options.reduce((result, option) => {
                const { key, label, value, subItems } = option;
                const stringKey = key.toString();

                const keyPath = [...parentKeys, stringKey];

                const item = {
                    label,
                    value,
                    expanded: mode === "expand",
                    selected: false,
                    isSearchTerm: false,
                    show: true,
                    keyPath,
                    subItems: subItems
                        ? formatted(subItems, keyPath)
                        : undefined,
                };

                result.set(stringKey, item);

                return result;
            }, new Map());
        };

        return formatted(_listItems, []);
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
            const keyPaths = getVisibleKeyPaths(list);

            setCurrentItems(list);
            setVisibleKeyPaths(keyPaths);

            if (searchInputRef.current) {
                searchInputRef.current.focus();
            } else if (listItemRefs.current) {
                const target = keyPaths[focusedIndex];
                listItemRefs.current[target[0]].ref.focus();
            }

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
    }, [_listItems]);

    useEffect(() => {
        filterAndUpdateList(searchValue);
    }, [searchValue]);

    useEventListener("keydown", handleKeyboardPress, "document");

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleSelect = (item: CombinedFormattedOptionProps<V1, V2, V3>) => {
        onSelectItem(item);
    };

    const handleExpand = (keyPath: string[]) => {
        const targetList = isSearch ? filteredItems : currentItems;

        const list = produce(
            targetList,
            (draft: FormattedOptionMap<V1, V2, V3>) => {
                const item = getItemAtKeyPath(draft, keyPath);
                item.expanded = !item.expanded;
            }
        );
        const keyPaths = getVisibleKeyPaths(list);

        setVisibleKeyPaths(keyPaths);
        if (isSearch) {
            setFilteredItems(list);
        } else {
            setCurrentItems(list);
        }
        setTimeout(() => {
            setContentHeight(getContentHeight());
        });
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
        resetVisbileKeyPaths(currentItems);
        setSearchValue("");
        searchInputRef.current.focus();
        setFilteredItems(initialItems);
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

    const getInitialSubItem = (
        list: Map<string, CombinedFormattedOptionProps<V1, V2, V3>> | undefined
    ): string[] => {
        for (const item of list.values()) {
            if (item.subItems && item.subItems.size) {
                const [firstItemKey] = item.subItems.keys();
                return item.subItems.get(firstItemKey).keyPath;
            }
            getInitialSubItem(item.subItems);
        }
    };

    const updateSearchState = (): FormattedOptionMap<V1, V2, V3> => {
        const search = (
            item: CombinedFormattedOptionProps<V1, V2, V3>,
            isParentMatch?: boolean
        ): CombinedFormattedOptionProps<V1, V2, V3> => {
            const searchTerm = searchValue.toLowerCase().trim();
            const matched = item.label.toLowerCase().indexOf(searchTerm) != -1;

            if (!item.subItems) {
                if (matched) {
                    return {
                        ...item,
                        expanded: false,
                        isSearchTerm: true,
                        show: true,
                    };
                } else if (isParentMatch) {
                    return {
                        ...item,
                        expanded: false,
                        isSearchTerm: false,
                    };
                } else {
                    return {
                        ...item,
                        expanded: false,
                        isSearchTerm: false,
                        show: false,
                    };
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

            let expanded = false,
                show = false;

            for (const item of subItems.values()) {
                if (item.isSearchTerm || item.show) {
                    expanded = true;
                }
                if (item.show) {
                    show = true;
                }
            }

            return {
                ...item,
                expanded,
                show,
                isSearchTerm: matched,
                subItems,
            } as CombinedFormattedOptionProps<V1, V2, V3>;
        };

        const list = new Map();

        for (const [key, item] of filteredItems) {
            if (item.label.toLowerCase().indexOf(searchValue) != -1) {
                // display all items under the root list if matched the root title
                list.set(key, { ...item, isSearchTerm: true, expanded: true });
                continue;
            }

            const result = search(item);
            if (result) {
                list.set(key, result);
            }
        }

        return list;
    };

    const getInitialDropdown = () => {
        // use the existing expanded state if mode is specified
        if (["expand", "collapse"].includes(mode)) return initialItems;

        // otherwise expand the first selected item or first subitem tree
        let keyPath = selectedKeyPath;

        if (!keyPath || !keyPath.length) {
            keyPath = getInitialSubItem(currentItems);
        }

        const list = produce(
            currentItems,
            (draft: Map<string, FormattedOption<V1, V2, V3>>) => {
                const targetKey = [];
                keyPath.forEach((key) => {
                    targetKey.push(key);
                    const item = getItemAtKeyPath(draft, targetKey);
                    item.expanded = true;
                });
            }
        );

        return list;
    };

    const getItemAtKeyPath = (
        draft: FormattedOptionMap<V1, V2, V3>,
        keyPath: string[]
    ): CombinedFormattedOptionProps<V1, V2, V3> => {
        const item = keyPath.reduce(
            (
                item: CombinedFormattedOptionProps<V1, V2, V3>,
                currentKey: string
            ) => {
                return item
                    ? item.subItems.get(currentKey)
                    : draft.get(currentKey);
            },
            null
        );

        return item;
    };

    const getVisibleKeyPaths = (
        list: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>,
        isSearch?: boolean
    ): string[][] => {
        const keyPaths = [];

        const getKey = (
            items: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>
        ) => {
            if (!items || !items.size) return;

            for (const item of items.values()) {
                if (!isSearch) keyPaths.push(item.keyPath);

                if (isSearch && item.show) {
                    keyPaths.push(item.keyPath);
                    getKey(item.subItems);
                } else if (!isSearch && item.expanded) {
                    getKey(item.subItems);
                }
            }
        };

        getKey(list);

        return keyPaths;
    };

    const resetVisbileKeyPaths = (
        list: FormattedOptionMap<V1, V2, V3>,
        isSearch?: boolean
    ) => {
        if (isSearch) {
            setFilteredItems(list);
        } else setFilteredItems(initialItems);

        const keyPaths = getVisibleKeyPaths(list, isSearch);
        setVisibleKeyPaths(keyPaths);
        setFocusedIndex(0);
    };

    const filterAndUpdateList = (searchValue: string) => {
        if (searchValue === "") {
            resetVisbileKeyPaths(currentItems);
            setIsSearch(false);
        } else if (searchFunction) {
            // TODO: go take a look in regular dropdown. what is this
        } else if (searchValue.trim().length >= 3) {
            const isSearch = true;
            listItemRefs.current = {};
            const filtered = updateSearchState();
            resetVisbileKeyPaths(filtered, isSearch);
            setIsSearch(isSearch);
        }

        setTimeout(() => {
            const contentHeight = getContentHeight();
            setContentHeight(contentHeight);
        });
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
                    selectedKeyPath={selectedKeyPath}
                    itemTruncationType={itemTruncationType}
                    visible={visible}
                    onBlur={handleBlur}
                    onExpand={handleExpand}
                    onRef={handleListItemRef}
                    onSelect={handleSelect}
                />
            ));
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

    const renderNoResults = () => {
        if (isSearch) {
            let hasItem = false;
            for (const item of filteredItems.values()) {
                if (item.show) {
                    hasItem = true;
                    break;
                }
            }
            if (!hideNoResultsDisplay && !hasItem) {
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
                {renderLoading()}
                {renderNoResults()}
                {renderTryAgain()}
                {renderItems()}
            </List>
        );
    };

    /**
        TODO:
        3. renderSelectAll
        16. renderBottomCta
        18. bold matched character
     */

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
