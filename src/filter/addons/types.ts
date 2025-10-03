import { FilterItemCheckboxOptionProps } from "../types";

export interface FlattenedFilterOption<T = FilterItemCheckboxOptionProps> {
    originalItem: T;
    value: any;
    label: string;
    keyPath: string[];
    level: number;
    hasChildren: boolean;
    parentKeyPath?: string[] | undefined;
    indexInParent: number;
    parentSetSize: number;
}
