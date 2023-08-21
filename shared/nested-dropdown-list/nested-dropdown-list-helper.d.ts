import { CombinedFormattedOptionProps, FormattedOption } from "./types";
export type FormattedOptionMap<V1, V2, V3> = Map<string, FormattedOption<V1, V2, V3>>;
export declare namespace NestedDropdownListHelper {
    const getInitialDropdown: <V1, V2, V3>(currentItems: FormattedOptionMap<V1, V2, V3>, selectedKeyPath?: string[] | undefined) => FormattedOptionMap<V1, V2, V3>;
    const getVisibleKeyPaths: <V1, V2, V3>(list: Map<string, CombinedFormattedOptionProps<V1, V2, V3>>) => string[][];
    const getItemAtKeyPath: <V1, V2, V3>(draft: FormattedOptionMap<V1, V2, V3>, keyPath: string[]) => FormattedOption<V1, V2, V3> | import("./types").FL2<V2, V3> | import("./types").FL3<V3>;
}
