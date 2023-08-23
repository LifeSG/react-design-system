import { produce } from "immer";
import {
    CombinedFormattedOptionProps,
    FormattedOption,
    Mode,
    SelectedItem,
} from "./types";
import { CombinedOptionProps } from "../../input-nested-select";

export type FormattedOptionMap<V1, V2, V3> = Map<
    string,
    FormattedOption<V1, V2, V3>
>;

interface UpdateSelectedAllType<V1, V2, V3>
    extends GetAllKeyPathsAndItemsType<V1, V2, V3> {
    list: FormattedOptionMap<V1, V2, V3>;
}

interface GetAllKeyPathsAndItemsType<V1, V2, V3> {
    keyPaths: string[][];
    items: SelectedItem<V1, V2, V3>[];
}

export namespace NestedDropdownListHelper {
    export const getInitialItems = <V1, V2, V3>(
        list: CombinedOptionProps<V1, V2, V3>[],
        parentKeys: string[],
        mode: Mode
    ): FormattedOptionMap<V1, V2, V3> => {
        const formatted = <V1, V2, V3>(
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
                    isSearchTerm: false,
                    selected: false,
                    checked: false,
                    indeterminate: undefined,
                    keyPath,
                    subItems: subItems
                        ? formatted(subItems, keyPath)
                        : undefined,
                };

                result.set(stringKey, item);

                return result;
            }, new Map());
        };

        return formatted(list, parentKeys);
    };

    export const getInitialDropdown = <V1, V2, V3>(
        currentItems: FormattedOptionMap<V1, V2, V3>,
        selectedKeyPaths: string[][]
    ) => {
        let keyPaths = selectedKeyPaths;

        if (!keyPaths || !keyPaths.length) {
            keyPaths = [getInitialSubItem(currentItems)];
        }

        const list = produce(
            currentItems,
            (draft: FormattedOptionMap<V1, V2, V3>) => {
                let targetKey: string[] = [];

                keyPaths.forEach((keyPath) => {
                    targetKey = [];
                    keyPath.forEach((key) => {
                        targetKey.push(key);
                        const item = getItemAtKeyPath(draft, targetKey);

                        const selected =
                            JSON.stringify(item.keyPath) ===
                            JSON.stringify(
                                selectedKeyPaths[0]?.slice(
                                    0,
                                    item.keyPath.length
                                )
                            );
                        if (item.subItems) item.expanded = true;
                        if (selected) item.selected = true;
                    });
                });
            }
        );

        return list;
    };

    export const updateSelectedAll = <V1, V2, V3>(
        currentItems: FormattedOptionMap<V1, V2, V3>,
        isSelectedAll: boolean
    ): UpdateSelectedAllType<V1, V2, V3> => {
        let list = currentItems;
        let keyPaths: string[][] = [];
        let items: SelectedItem<V1, V2, V3>[] = [];

        if (isSelectedAll) {
            const { keyPaths: _keyPaths, items: _items } =
                getAllKeyPathsAndItems(list);

            keyPaths = _keyPaths;
            items = _items;

            list = produce(
                currentItems,
                (draft: FormattedOptionMap<V1, V2, V3>) => {
                    for (const item of draft.values()) {
                        const update = (
                            item: CombinedFormattedOptionProps<V1, V2, V3>
                        ) => {
                            if (!item.subItems) return;

                            item.expanded = true;

                            return item.subItems.forEach((subItem) =>
                                update(subItem)
                            );
                        };

                        update(item);
                    }
                }
            );
        }

        return {
            keyPaths,
            items,
            list,
        };
    };

    export const getVisibleKeyPaths = <V1, V2, V3>(
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

    export const getItemAtKeyPath = <V1, V2, V3>(
        draft: FormattedOptionMap<V1, V2, V3>,
        keyPath: string[]
    ) => {
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

    export const getCategoryChecked = <V1, V2, V3>(
        targetList: FormattedOptionMap<V1, V2, V3>,
        selectedKeyPaths: string[][]
    ) => {
        const update = (item: CombinedFormattedOptionProps<V1, V2, V3>) => {
            const matched = selectedKeyPaths.some(
                (key) => JSON.stringify(key) === JSON.stringify(item.keyPath)
            );

            if (!item.subItems) {
                if (matched) {
                    return {
                        ...item,
                        checked: true,
                    };
                } else {
                    return {
                        ...item,
                        checked: false,
                    };
                }
            }

            const subItems: Map<
                string,
                CombinedFormattedOptionProps<V1, V2, V3>
            > = new Map();

            item.subItems.forEach((subItem) => {
                const result = update(subItem) as CombinedFormattedOptionProps<
                    V1,
                    V2,
                    V3
                >;
                if (result) {
                    const key = result.keyPath[result.keyPath.length - 1];

                    subItems.set(key, result);
                }
            });

            const checkedStatus = Array.from(subItems).map(
                (item) => item[1].checked
            );
            const isAllChecked = checkedStatus.every(Boolean);

            const someChecked =
                checkedStatus.filter((status) => status === false).length !==
                checkedStatus.length;

            const result = {
                ...item,
                checked: isAllChecked,
                indeterminate: isAllChecked
                    ? undefined
                    : someChecked
                    ? true
                    : undefined,
                subItems,
            };

            return result;
        };

        const list = new Map();

        for (const [key, item] of targetList) {
            const result = update(item);

            if (result && result.subItems && result.subItems.size) {
                const indeterminateStatus = Array.from(result.subItems).map(
                    (item) => item[1].indeterminate
                );
                const checkedStatus = Array.from(result.subItems).map(
                    (item) => item[1].checked
                );

                const isAllIndeterminate = indeterminateStatus.every(Boolean);
                const isAllChecked = checkedStatus.every(Boolean);
                const someInderminate =
                    indeterminateStatus.filter(Boolean).length;
                const someChecked = checkedStatus.filter(Boolean).length;

                const indeterminate =
                    isAllChecked || isAllIndeterminate
                        ? undefined
                        : someChecked || someInderminate
                        ? true
                        : undefined;

                list.set(key, {
                    ...result,
                    indeterminate,
                    checked: isAllChecked,
                });
            }
        }

        return list;
    };
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getInitialSubItem = <V1, V2, V3>(
    list: Map<string, CombinedFormattedOptionProps<V1, V2, V3>> | undefined
): string[] => {
    for (const item of list.values()) {
        if (item.subItems && item.subItems.size) {
            return getInitialSubItem(item.subItems);
        }
    }

    const value = list.values().next().value;
    return value.keyPath;
};

const getAllKeyPathsAndItems = <V1, V2, V3>(
    list: FormattedOptionMap<V1, V2, V3>
) => {
    const keyPaths: string[][] = [];
    const items: SelectedItem<V1, V2, V3>[] = [];

    const getKeyPath = (
        _items: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>
    ): GetAllKeyPathsAndItemsType<V1, V2, V3> => {
        if (!_items || !_items.size) return;

        for (const item of _items.values()) {
            const { keyPath, label, value } = item;
            if (item.subItems && item.subItems.size) {
                getKeyPath(item.subItems);
            } else {
                keyPaths.push(item.keyPath);
                items.push({
                    label,
                    value,
                    keyPath,
                });
            }
        }
    };

    getKeyPath(list);
    return {
        keyPaths,
        items,
    };
};
