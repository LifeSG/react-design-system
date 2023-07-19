import cloneDeep from "lodash/cloneDeep";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { useEventListener } from "../../util/use-event-listener";
import { Spinner } from "../../button/button.style";
import { CombinedOptionProps } from "../../input-nested-select";
import { ListItem } from "./list-item";
import {
    CombinedFormattedOptionProps,
    FormattedOption,
    NestedDropdownListProps,
} from "./types";
import {
    Container,
    DropdownCommonButton,
    LabelIcon,
    List,
    ResultStateContainer,
    ResultStateText,
} from "./nested-dropdown-list.styles";

interface ListItemRefType {
    ref?: HTMLButtonElement;
    subItems?: ListItemRefType;
}

type Direction = "down" | "up";

/**
 * NOTE: This component is not directly exportables
 * but forms part of a component
 */
export const NestedDropdownList = <V1, V2, V3>({
    listItems: _listItems,
    listStyleWidth,
    visible,
    mode = "default",
    selectedKeyPath,
    itemsLoadState = "success",
    itemTruncationType = "end",
    onBlur,
    onDismiss,
    onRetry,
    onSelectItem,
    ...otherProps
}: NestedDropdownListProps<V1, V2, V3>): JSX.Element => {
    // =============================================================================
    // CONST, REF, STATE
    // =============================================================================
    const formattedListItem = useMemo((): Map<
        string,
        FormattedOption<V1, V2, V3>
    > => {
        if (!_listItems || !_listItems.length) return new Map([]);

        const formatted = (
            options: CombinedOptionProps<V1, V2, V3>[],
            parentKeys: string[]
        ): Map<string, FormattedOption<V1, V2, V3>> => {
            return options.reduce((result, option) => {
                const { key, label, value, subItems } = option;
                const stringKey = key.toString();

                const keyPath = [...parentKeys, stringKey];

                const item = {
                    label,
                    value,
                    keyPath,
                    expanded: mode === "expand" || false,
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

    const [focusedListIndex, setFocusedIndex] = useState<number>(0);
    const [contentHeight, setContentHeight] = useState<number>(0);
    const [listItems, setListItems] =
        useState<Map<string, FormattedOption<V1, V2, V3>>>(formattedListItem);

    // React spring animation configuration
    const containerStyles = useSpring({
        height: contentHeight,
    });

    const nodeRef = useRef<HTMLDivElement>();
    const listRef = useRef<HTMLUListElement>();
    const listItemRefs = useRef<ListItemRefType>({});

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (visible) {
            const lists = getDefaultExpandList();
            const orders = getKeyboardExpandOrder(lists);

            setListItems(lists);
            setKeyboardOrders(orders);

            // TODO: if search exist focus it else focus listItemRefs.current[target]
            if (listItemRefs.current) {
                const target = orders[focusedListIndex];
                listItemRefs.current[target].ref.focus();
            }

            // Give some time for the custom call-to-action to be rendered
            setTimeout(() => {
                setContentHeight(getContentHeight());
            });
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
    }, [_listItems]);

    useEventListener("keydown", handleKeyboardPress, "document");

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleSelect = (item: CombinedFormattedOptionProps<V1, V2, V3>) => {
        onSelectItem(item);
    };

    const handleExpand = (parentKeys: string[]) => {
        const lists = cloneDeep(listItems);

        // length number means tier level
        switch (parentKeys.length) {
            case 1:
                lists.set(parentKeys[0], {
                    ...lists.get(parentKeys[0]),
                    expanded: !lists.get(parentKeys[0]).expanded,
                });
                break;
            case 2:
                lists.get(parentKeys[0]).subItems.forEach((value, key) => {
                    const targetKey = parentKeys[parentKeys.length - 1];

                    if (targetKey === key) {
                        value.expanded = !value.expanded;
                    }
                });
                break;
        }

        setListItems(lists);

        setTimeout(() => {
            setContentHeight(getContentHeight());
        });
    };

    const handleListItemRef = (
        ref: HTMLButtonElement,
        keyPaths: string[],
        currentObj: ListItemRefType = listItemRefs.current
    ) => {
        const [currentKey, ...remainingKeys] = keyPaths;

        if (!currentObj[currentKey]) {
            currentObj[currentKey] = { ref, subItems: {} };
        }

        if (remainingKeys.length) {
            handleListItemRef(
                ref,
                remainingKeys,
                currentObj[currentKey].subItems
            );
        }
    };

    const handleArrowUpDown = (direction: Direction) => {
        let upcomingIndex = focusedListIndex;
        let targetKey = null;
        let selectedItem = null;

        setFocusedIndex((prev) => {
            upcomingIndex = direction === "down" ? prev + 1 : prev - 1;
            return upcomingIndex;
        });

        targetKey = keyboardOrders[upcomingIndex];

        const level = targetKey.length;
        for (const key of targetKey) {
            switch (level) {
                case 1:
                    selectedItem = listItemRefs.current[key];
                    break;
                case 2:
                    selectedItem =
                        listItemRefs.current[targetKey[0]].subItems[key];
                    break;
                case 3:
                    selectedItem =
                        listItemRefs.current[targetKey[0]].subItems[
                            targetKey[1]
                        ].subItems[key];
                    break;
            }
        }

        selectedItem.ref.focus();
    };

    function handleKeyboardPress(event: KeyboardEvent) {
        if (nodeRef && (nodeRef.current as any).contains(event.target)) {
            switch (event.code) {
                case "ArrowDown":
                    setFocusedIndex((prev) => {
                        const next = prev + 1;

                        // listItemRefs.current[next][1].focus();
                        return next;
                    });
                    break;
                case "ArrowUp":
                    setFocusedIndex((_prev) => {
                        const prev = _prev - 1;

                        // listItemRefs.current[prev][1].focus();
                        return prev;
                    });
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

    const getDefaultExpandKey = (
        items:
            | Map<string, CombinedFormattedOptionProps<V1, V2, V3>>
            | undefined,
        keyPath?: string[]
    ): string[] => {
        // Get the first one which has the subItems in the list
        let keys = [];

        if (!items) return keys;

        if (keyPath && keyPath.length) {
            keys = keyPath;
        }

        for (const [key, item] of items) {
            if (item.subItems && item.subItems.size) {
                keys.push(key);
                getDefaultExpandKey(item.subItems, keys);

                break;
            }
        }

        return keys;
    };

    const getDefaultExpandList = () => {
        if (["expand", "collapse"].includes(mode)) return formattedListItem;
        const lists = structuredClone(listItems);
        let keys = selectedKeyPath;
        let item: CombinedFormattedOptionProps<V1, V2, V3> = null;

        if (!selectedKeyPath || !selectedKeyPath.length) {
            keys = getDefaultExpandKey(listItems);
        }

        const [keyOne, keyTwo] = keys;

        for (let i = 0; i < keys.length; i++) {
            const level = i + 1;

            // update each level item
            switch (level) {
                case 1:
                    item = lists.get(keyOne);
                    break;
                case 2:
                    item = lists.get(keyOne)?.subItems?.get(keyTwo);
                    break;
            }

            if (item) {
                item.expanded = true;
                // update last tier's expanded value same as tier 2
                if (level === 2 && item.subItems instanceof Map) {
                    for (const innermostItem of item.subItems.values()) {
                        innermostItem.expanded = item.expanded;
                    }
                }
            }
        }

        return lists;
    };

    const getKeyboardExpandOrder = (
        _lists: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>
    ) => {
        const lists = structuredClone(_lists);
        const elementKeys = [];

        const getOrders = (
            items: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>
        ) => {
            if (!items || !items.size) {
                return;
            }

            for (const item of items.values()) {
                if (item.expanded) {
                    elementKeys.push(item.keyPath);

                    getOrders(item.subItems);
                } else {
                    elementKeys.push(item.keyPath);
                }
            }
        };

        getOrders(lists);

        return elementKeys;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderItems = () => {
        if (!onRetry || (onRetry && itemsLoadState === "success")) {
            return Array.from(listItems).map(([key, item]) => (
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
                {renderLoading()}
                {renderTryAgain()}
                {renderItems()}
            </List>
        );
    };

    /**
        TODO:
        2. renderSearchInput
        3. renderSelectAll
        4. renderNoResults
        9. handleKeyboardPress
        10. handleSearchInputChange
        11. handleOnClear
        12. handleTryAgain
        15. focus search input
        16. renderBottomCta
        17. focus search input if exist else first option item
        18. keyboard arrow actions
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
