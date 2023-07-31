import { enableMapSet, produce } from "immer";
import get from "lodash/get";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { Spinner } from "../../button/button.style";
import { CombinedOptionProps } from "../../input-nested-select";
import { useEventListener } from "../../util/use-event-listener";
import { ListItem } from "./list-item";
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

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (visible) {
            const list = getInitialDropdown();
            const keyPaths = getVisibleKeyPaths(list);

            setCurrentItems(list);
            setVisibleKeyPaths(keyPaths);

            // TODO: if search exist focus it else focus listItemRefs.current[target]
            if (listItemRefs.current) {
                // focus the first item (focusedIndex has been reset to 0)
                const target = keyPaths[focusedIndex];
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
        const list = produce(
            currentItems,
            (draft: FormattedOptionMap<V1, V2, V3>) => {
                const item = getItemAtKeyPath(draft, keyPath);
                item.expanded = !item.expanded;
            }
        );
        const keyPaths = getVisibleKeyPaths(list);

        setCurrentItems(list);
        setVisibleKeyPaths(keyPaths);
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

    function handleKeyboardPress(event: KeyboardEvent) {
        if (nodeRef.current && nodeRef.current.contains(event.target as Node)) {
            switch (event.code) {
                case "ArrowDown":
                    if (focusedIndex + 1 >= visibleKeyPaths.length) return;
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
        list: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>
    ): string[][] => {
        const keyPaths = [];

        const getKey = (
            items: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>
        ) => {
            if (!items || !items.size) return;

            for (const item of items.values()) {
                keyPaths.push(item.keyPath);
                if (item.expanded) {
                    getKey(item.subItems);
                }
            }
        };

        getKey(list);

        return keyPaths;
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
