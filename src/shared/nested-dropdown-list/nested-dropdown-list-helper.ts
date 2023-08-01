import { produce } from "immer";
import { CombinedFormattedOptionProps, FormattedOption } from "./types";

export type FormattedOptionMap<V1, V2, V3> = Map<
    string,
    FormattedOption<V1, V2, V3>
>;

export namespace NestedDropdownListHelper {
    export const getInitialDropdown = <V1, V2, V3>(
        currentItems: FormattedOptionMap<V1, V2, V3>,
        selectedKeyPath?: string[] | undefined
    ) => {
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

    export const getVisibleKeyPaths = <V1, V2, V3>(
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

                if (isSearch && item.expanded) {
                    // get it's subItems which parent is expanded
                    for (const subItem of item.subItems.values()) {
                        keyPaths.push(subItem.keyPath);
                    }
                    getKey(item.subItems);
                } else if (!isSearch && item.expanded) {
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
            const [firstItemKey] = item.subItems.keys();
            return item.subItems.get(firstItemKey).keyPath;
        }
        getInitialSubItem(item.subItems);
    }
};
