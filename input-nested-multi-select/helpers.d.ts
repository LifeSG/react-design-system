import { NestedDropdownListItemProps } from "../shared/dropdown-list-v2";
export declare const getSelectedItems: <V1, V2, V3>(options: NestedDropdownListItemProps<V1 | V2 | V3>[], keyPaths: string[][]) => SelectedItem<V1 | V2 | V3>[];
export interface SelectedItem<T> {
    label: string;
    keyPath: string[];
    value: T;
}
export declare const getSelectedSubItems: <V1, V2, V3>(options: NestedDropdownListItemProps<V1 | V2 | V3>[], keyPath: string[]) => SelectedItem<V1 | V2 | V3>[];
