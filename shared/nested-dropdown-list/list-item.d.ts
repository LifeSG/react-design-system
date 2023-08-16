/// <reference types="react" />
import { CombinedFormattedOptionProps, TruncateType } from "./types";
interface ListItemProps<V1, V2, V3> {
    item: CombinedFormattedOptionProps<V1, V2, V3>;
    selectedKeyPath?: string[] | undefined;
    selectableCategory?: boolean | undefined;
    searchValue: string | undefined;
    itemTruncationType?: TruncateType | undefined;
    visible: boolean;
    onBlur: () => void;
    onExpand: (parentKeys: string[]) => void;
    onRef: (ref: HTMLButtonElement, keyPaths: string[]) => void;
    onSelect: (item: CombinedFormattedOptionProps<V1, V2, V3>) => void;
}
export declare const ListItem: <V1, V2, V3>({ item, selectedKeyPath, selectableCategory, searchValue, itemTruncationType, visible, onBlur, onExpand, onRef, onSelect, }: ListItemProps<V1, V2, V3>) => JSX.Element;
export {};
