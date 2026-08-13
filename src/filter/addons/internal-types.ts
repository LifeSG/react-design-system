import type { FilterItemCheckboxOptionProps } from "./types";

export interface FlattenedFilterOption<T = FilterItemCheckboxOptionProps> {
    originalItem: T;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
    label: string;
    keyPath: string[];
    level: number;
    hasChildren: boolean;
    parentKeyPath?: string[] | undefined;
    indexInParent: number;
    parentSetSize: number;
}
