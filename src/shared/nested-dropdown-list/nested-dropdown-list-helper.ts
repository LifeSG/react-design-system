import { produce } from "immer";
import {
    CombinedFormattedOptionProps,
    FormattedOption,
    Variant,
} from "./types";

export type FormattedOptionMap<V1, V2, V3> = Map<
    string,
    FormattedOption<V1, V2, V3>
>;

export namespace NestedDropdownListHelper {
    export const getInitialDropdown = <V1, V2, V3>(
        variant: Variant,
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

                keyPaths.forEach((keyPathArray) => {
                    targetKey = [];
                    keyPathArray.forEach((key) => {
                        targetKey.push(key);
                        const item = getItemAtKeyPath(draft, targetKey);
                        item.expanded = true;
                    });
                });
            }
        );

        return list;
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
