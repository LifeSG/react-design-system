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
                    indeterminate: false,
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

                        const selected = selectedKeyPaths.some(
                            (keyPath) =>
                                JSON.stringify(keyPath) ===
                                JSON.stringify(item.keyPath)
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

    export const getUpdateCheckbox = <V1, V2, V3>(
        list: FormattedOptionMap<V1, V2, V3>,
        selectedKeyPaths: string[][]
    ) => {
        const result = produce(
            list,
            (draft: FormattedOptionMap<V1, V2, V3>) => {
                const update = (
                    items: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>
                ) => {
                    for (const item of items.values()) {
                        if (!item.subItems) {
                            const checked = selectedKeyPaths.some(
                                (keyPath) =>
                                    JSON.stringify(keyPath) ===
                                    JSON.stringify(item.keyPath)
                            );
                            item.checked = checked;
                        } else {
                            update(item.subItems);

                            const subItems: Map<
                                string,
                                CombinedFormattedOptionProps<V1, V2, V3>
                            > = item.subItems;

                            const { checked, indeterminate } = Array.from(
                                subItems
                            ).reduce(
                                (result, subItemMap) => {
                                    const item = subItemMap[1];
                                    result.checked.push(item.checked);
                                    result.indeterminate.push(
                                        item.indeterminate
                                    );

                                    return result;
                                },
                                {
                                    checked: [],
                                    indeterminate: [],
                                }
                            );

                            const isAllChecked = checked.every(Boolean);
                            const isPartialChecked = checked.some(Boolean);
                            const isPartialIndeterminate =
                                indeterminate.some(Boolean);

                            if (isAllChecked) {
                                item.checked = true;
                                item.indeterminate = false;
                            } else if (
                                isPartialChecked ||
                                isPartialIndeterminate
                            ) {
                                item.checked = false;
                                item.indeterminate = true;
                            } else {
                                item.checked = false;
                                item.indeterminate = false;
                            }
                        }
                    }
                };

                update(draft);
            }
        );

        return result;
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
