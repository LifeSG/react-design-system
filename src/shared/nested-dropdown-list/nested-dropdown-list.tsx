import { useEffect, useMemo, useRef, useState } from "react";
import { useSpring } from "react-spring";
import get from "lodash/get";
import { enableMapSet, produce } from "immer";
import { useEventListener } from "../../util/use-event-listener";
import { Spinner } from "../../button/button.style";
import { CombinedOptionProps } from "../../input-nested-select";
import { ListItem } from "./list-item";
import {
    CombinedFormattedOptionProps,
    FL2,
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
enableMapSet();
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
    const initialItems = useMemo((): Map<
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
                    expanded: mode === "expand",
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

    const [contentHeight, setContentHeight] = useState<number>(0);
    const [currentItems, setCurrentItems] =
        useState<Map<string, FormattedOption<V1, V2, V3>>>(initialItems);
    const [focusedIndex, setFocusedIndex] = useState<number>(0);
    const [keyboardOrders, setKeyboardOrders] = useState<string[][]>([]);

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

            setCurrentItems(lists);
            setKeyboardOrders(orders);

            // TODO: if search exist focus it else focus listItemRefs.current[target]
            if (listItemRefs.current) {
                // focusedIndex has been reset to 0 once dropdown opened
                const target: string[] = orders[focusedIndex];
                listItemRefs.current[target[0]].ref.focus();
            }

            // Give some time for the custom call-to-action to be rendered
            setTimeout(() => {
                setContentHeight(getContentHeight());
            });
        } else {
            setFocusedIndex(0);
            setContentHeight(0);
            listItemRefs.current = {};
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

    useEventListener("keydown", handleKeyboardPress, "document");

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleSelect = (item: CombinedFormattedOptionProps<V1, V2, V3>) => {
        onSelectItem(item);
    };

    const handleExpand = (keyPath: string[]) => {
        const level = keyPath.length;

        const lists = produce(currentItems, (draft) => {
            let item = null;

            switch (level) {
                case 1:
                    item = draft.get(keyPath[0]);
                    break;
                case 2:
                    item = draft.get(keyPath[0]).subItems.get(keyPath[1]);
                    break;
            }

            item.expanded = !item.expanded;
        });

        const orders = getKeyboardExpandOrder(lists);

        setCurrentItems(lists);
        setKeyboardOrders(orders);
        setTimeout(() => {
            setContentHeight(getContentHeight());
        });
    };

    const handleListItemRef = (
        ref: HTMLButtonElement,
        keyPath: string[],
        currentObj: ListItemRefType = listItemRefs.current
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

        const targetKey = keyboardOrders[upcomingIndex];

        const selectedItem = get(
            listItemRefs.current,
            targetKey.join(".subItems.")
        );

        selectedItem.ref.focus();
    };

    function handleKeyboardPress(event: KeyboardEvent) {
        if (nodeRef && (nodeRef.current as any).contains(event.target)) {
            switch (event.code) {
                case "ArrowDown":
                    if (focusedIndex + 1 >= keyboardOrders.length) return;
                    handleArrowUpDown("down");
                    break;
                case "ArrowUp":
                    if (focusedIndex - 1 < 0) return;
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
        if (["expand", "collapse"].includes(mode)) return initialItems;

        let keyPath = selectedKeyPath;

        if (!selectedKeyPath || !selectedKeyPath.length) {
            keyPath = getDefaultExpandKey(currentItems);
        }

        const lists = produce(currentItems, (draft) => {
            let item = null;

            for (let i = 0; i < keyPath.length; i++) {
                const level = i + 1;

                // update each level item
                switch (level) {
                    case 1:
                        item = draft.get(keyPath[0]);
                        break;
                    case 2:
                        item = draft.get(keyPath[0])?.subItems?.get(keyPath[1]);
                        break;
                }

                if (item) {
                    item.expanded = true;
                }
            }
        });

        return lists;
    };

    const getKeyboardExpandOrder = (
        lists: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>
    ): string[][] => {
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
            return Array.from(currentItems).map(([key, item]) => (
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
