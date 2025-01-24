/// <reference types="react" />
import { CombinedFormattedOptionProps, TruncateType } from "./types";
interface ListItemProps<V1, V2, V3> {
    item: CombinedFormattedOptionProps<V1, V2, V3>;
    selectableCategory?: boolean | undefined;
    searchValue: string | undefined;
    itemTruncationType?: TruncateType | undefined;
    multiSelect: boolean;
    visible: boolean;
    onBlur: () => void;
    onExpand: (parentKeys: string[]) => void;
    onRef: (ref: HTMLButtonElement, keyPaths: string[]) => void;
    onSelect: (item: CombinedFormattedOptionProps<V1, V2, V3>) => void;
    onSelectCategory: (item: CombinedFormattedOptionProps<V1, V2, V3>) => void;
}
export declare const ListItem: <V1, V2, V3>({ item, selectableCategory, searchValue, itemTruncationType, multiSelect, visible, onBlur, onExpand, onRef, onSelect, onSelectCategory, }: ListItemProps<V1, V2, V3>) => JSX.Element;
export {};
