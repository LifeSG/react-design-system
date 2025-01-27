import isEmpty from "lodash/isEmpty";
import { NestedDropdownListItemProps } from "../shared/dropdown-list-v2";

const findSelectedItem = <V1, V2, V3>(
    options: NestedDropdownListItemProps<V1 | V2 | V3>[],
    keyPath: string[]
): NestedDropdownListItemProps<V1 | V2 | V3> | undefined => {
    const [currentKey, ...nextKeyPath] = keyPath;

    if (isEmpty(options) || !currentKey) {
        return undefined;
    }

    const item = options.find((item) => item.key === currentKey);

    if (!item) {
        return undefined;
    }

    if (!nextKeyPath.length) {
        return item;
    }

    return findSelectedItem(item.subItems, nextKeyPath);
};

export const getSelectedItems = <V1, V2, V3>(
    options: NestedDropdownListItemProps<V1 | V2 | V3>[],
    keyPaths: string[][]
): SelectedItem<V1 | V2 | V3>[] => {
    const selectedItems: SelectedItem<V1 | V2 | V3>[] = [];

    for (let i = 0; i < keyPaths.length; i++) {
        const keyPath = keyPaths[i];
        const item = findSelectedItem(options, keyPath);

        if (item) {
            selectedItems.push({
                value: item.value,
                label: item.label,
                keyPath: keyPath,
            });
        }
    }

    return selectedItems;
};

export interface SelectedItem<T> {
    label: string;
    keyPath: string[];
    value: T;
}

const findSubItems = <V1, V2, V3>(
    options: NestedDropdownListItemProps<V1 | V2 | V3>[],
    parentKeyPath: string[]
): SelectedItem<V1 | V2 | V3>[] => {
    const selectedItems: SelectedItem<V1 | V2 | V3>[] = [];

    for (const option of options) {
        if (option.subItems) {
            selectedItems.push(
                ...findSubItems(option.subItems, [...parentKeyPath, option.key])
            );
        } else {
            selectedItems.push({
                value: option.value,
                label: option.label,
                keyPath: [...parentKeyPath, option.key],
            });
        }
    }

    return selectedItems;
};

export const getSelectedSubItems = <V1, V2, V3>(
    options: NestedDropdownListItemProps<V1 | V2 | V3>[],
    keyPath: string[]
): SelectedItem<V1 | V2 | V3>[] => {
    const item = findSelectedItem(options, keyPath);

    if (item && item.subItems) {
        return findSubItems(item.subItems, keyPath);
    }

    return [];
};
