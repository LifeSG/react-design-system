import { produce } from "immer";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
import {
    NestedDropdownListItemProps,
    NestedDropdownListLocalItem,
} from "./types";

/**
 * builds a flattened representation of the tree
 * the items are listed in their visual order
 */
export const flattenList = <T>(
    nestedList: NestedDropdownListItemProps<T>[],
    selectedKeyPaths: string[][],
    multiSelect: boolean,
    searchTerm: string,
    initialExpanded: boolean
): NestedDropdownListLocalItem<T>[] => {
    const items: NestedDropdownListLocalItem<T>[] = [];

    const flatten = (
        list: NestedDropdownListItemProps<T>[],
        parentItem: NestedDropdownListLocalItem<T>
    ) => {
        const current: NestedDropdownListLocalItem<T>[] = [];
        const hasNestedSiblings = !!list.find(
            (option) => option.subItems?.length
        );

        for (let i = 0; i < list.length; i++) {
            const option = list[i];
            const level = parentItem ? parentItem.level + 1 : 0;
            const item: (typeof items)[number] = {
                item: option,
                index: items.length,
                indexInParent: i,
                parentSetSize: list.length,
                keyPath: parentItem
                    ? [...parentItem.keyPath, option.key]
                    : [option.key],
                parentIndex: parentItem ? parentItem.index : -1,
                parentKeyPath: parentItem ? parentItem.keyPath : [],
                level,
                visible: level === 0 || initialExpanded || parentItem.expanded,
                expanded: initialExpanded,
                checked: false,
                hasSubItems: !!option.subItems?.length,
                subItemIndexes: [],
                hasNestedSiblings,
                matched: searchTerm
                    ? option.label.toLowerCase().indexOf(searchTerm) !== -1
                    : false,
                hasMatchedSubItems: false,
            };
            item.checked = !!selectedKeyPaths.find((keyPath) =>
                isEqual(keyPath, item.keyPath)
            );
            current.push(item);
            items.push(item);

            if (option.subItems?.length) {
                const children = flatten(option.subItems, item);

                if (multiSelect && item.checked !== true) {
                    const allChildrenSelected = children.every(
                        (child) => child.checked === true
                    );
                    const mixed = children.some(
                        (child) => child.checked !== false
                    );

                    if (allChildrenSelected) {
                        item.checked = true;
                    } else if (mixed) {
                        item.checked = "mixed";
                    }
                }

                item.hasMatchedSubItems = children.some(
                    (child) => child.matched || child.hasMatchedSubItems
                );
                item.subItemIndexes = children.map((child) => child.index);
            }
        }
        return current;
    };

    flatten(nestedList, undefined);

    return items;
};

export const expandSelectedSubtrees = <T>(
    list: NestedDropdownListLocalItem<T>[]
) => {
    return produce(list, (draft) => {
        const selectedItems = draft.filter((item) => item.checked === true);
        for (const selectedItem of selectedItems) {
            let parentIndex = selectedItem.parentIndex;
            while (parentIndex >= 0) {
                const parent = draft[parentIndex];
                parent.visible = true;
                parent.expanded = true;

                for (const i of parent.subItemIndexes) {
                    draft[i].visible = true;
                }

                parentIndex = parent.parentIndex;
            }
        }
    });
};

export const expandMatchedSubtrees = <T>(
    list: NestedDropdownListLocalItem<T>[]
) => {
    return produce(list, (draft) => {
        for (const item of draft) {
            if (item.matched) {
                item.visible = true;
            }

            if (item.hasMatchedSubItems) {
                item.visible = true;
                item.expanded = true;

                for (const i of item.subItemIndexes) {
                    draft[i].visible = true;
                }
            }
        }
    });
};

export const expandFirstSubtree = <T>(
    list: NestedDropdownListLocalItem<T>[]
) => {
    return produce(list, (draft) => {
        const firstSubtreeIndex = draft.findIndex((item) => item.hasSubItems);
        if (firstSubtreeIndex < 0) {
            return;
        }
        let index = firstSubtreeIndex;
        let length = 0;
        // find the first subtree
        for (let i = index; i < draft.length; i++) {
            const nextItemLength = draft[i].keyPath.length;
            if (nextItemLength > length) {
                length = nextItemLength;
            } else if (nextItemLength < length) {
                break;
            }

            index = i;
            draft[i].visible = true;
            draft[i].expanded = true;
        }

        // expand siblings of ancestors
        for (let i = 0; i < draft.length; i++) {
            const item = draft[i];
            const parentKeyPath = item.keyPath.slice(0, -1);
            const ancestorKeyPath = draft[index].keyPath.slice(
                0,
                parentKeyPath.length
            );
            if (isEqual(parentKeyPath, ancestorKeyPath)) {
                item.visible = true;
            }
        }
        return draft;
    });
};

export const toggleSubtree = <T>(
    list: NestedDropdownListLocalItem<T>[],
    index: number,
    expanded: boolean
) => {
    return produce(list, (draft) => {
        draft[index].expanded = expanded;
        const keyPath = draft[index].keyPath;
        for (let i = index + 1; i < draft.length; i++) {
            const item = draft[i];
            const parent = draft[item.parentIndex];
            const ancestorKeyPath = item.keyPath.slice(0, keyPath.length);
            if (isEqual(keyPath, ancestorKeyPath)) {
                item.visible = expanded && parent.expanded && parent.visible;
            } else {
                // no more descendents
                break;
            }
        }
    });
};

export const updateSelectedState = <T>(
    list: NestedDropdownListLocalItem<T>[],
    selectedKeyPaths: string[][],
    multiSelect: boolean
) => {
    return produce(list, (draft) => {
        for (let i = draft.length - 1; i >= 0; i--) {
            const item = draft[i];
            item.checked = !!selectedKeyPaths.find((keyPath) =>
                isEqual(keyPath, item.keyPath)
            );

            if (item.hasSubItems) {
                if (multiSelect && item.checked !== true) {
                    const children = item.subItemIndexes.map(
                        (index) => draft[index]
                    );

                    const allChildrenSelected = children.every(
                        (child) => child.checked === true
                    );
                    const mixed = children.some(
                        (child) => child.checked !== false
                    );

                    if (allChildrenSelected) {
                        item.checked = true;
                    } else if (mixed) {
                        item.checked = "mixed";
                    }
                }
            }
        }
    });
};

export const findIndexFromStart = <T>(
    arr: T[],
    predicate: (e: T) => boolean,
    start: number
): number => {
    for (let i = start; i < arr.length; i++) {
        if (predicate(arr[i])) {
            return i;
        }
    }

    return -1;
};

export const findIndexFromEnd = <T>(
    arr: T[],
    predicate: (e: T) => boolean,
    end: number
): number => {
    for (let i = end; i >= 0; i--) {
        if (predicate(arr[i])) {
            return i;
        }
    }

    return -1;
};

export const findItemByKeyPath = <T>(
    nestedList: NestedDropdownListItemProps<T>[],
    keyPath: string[]
) => {
    const [currentKey, ...nextKeyPath] = keyPath;
    if (isEmpty(nestedList) || isEmpty(currentKey)) {
        return undefined;
    }

    const item = nestedList.find((item) => item.key === currentKey);

    if (!item || !nextKeyPath.length) {
        return item;
    }

    return findItemByKeyPath(item.subItems, nextKeyPath);
};
