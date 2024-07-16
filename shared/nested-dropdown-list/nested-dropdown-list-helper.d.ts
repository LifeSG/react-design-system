import { CombinedFormattedOptionProps, FormattedOption, Mode, SelectedItem } from "./types";
import { CombinedOptionProps } from "../../input-nested-select";
export type FormattedOptionMap<V1, V2, V3> = Map<string, FormattedOption<V1, V2, V3>>;
interface UpdateSelectedAllType<V1, V2, V3> extends GetAllKeyPathsAndItemsType<V1, V2, V3> {
    list: FormattedOptionMap<V1, V2, V3>;
}
interface GetAllKeyPathsAndItemsType<V1, V2, V3> {
    keyPaths: string[][];
    items: SelectedItem<V1, V2, V3>[];
}
export declare namespace NestedDropdownListHelper {
    const getInitialItems: <V1, V2, V3>(list: CombinedOptionProps<V1, V2, V3>[], parentKeys: string[], mode: Mode) => FormattedOptionMap<V1, V2, V3>;
    const getInitialDropdown: <V1, V2, V3>(currentItems: FormattedOptionMap<V1, V2, V3>, selectedKeyPaths: string[][]) => FormattedOptionMap<V1, V2, V3>;
    const updateSelectedAll: <V1, V2, V3>(currentItems: FormattedOptionMap<V1, V2, V3>, isSelectedAll: boolean) => UpdateSelectedAllType<V1, V2, V3>;
    const getVisibleKeyPaths: <V1, V2, V3>(list: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>) => string[][];
    const getUpdateCheckbox: <V1, V2, V3>(list: FormattedOptionMap<V1, V2, V3>, selectedKeyPaths: string[][]) => FormattedOptionMap<V1, V2, V3>;
    const getItemAtKeyPath: <V1, V2, V3>(draft: FormattedOptionMap<V1, V2, V3>, keyPath: string[]) => FormattedOption<V1, V2, V3> | import("./types").FL2<V2, V3> | import("./types").FL3<V3>;
}
export {};
