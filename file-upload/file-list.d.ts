/// <reference types="react" />
import { FileItemProps } from "./types";
interface Props {
    fileItems: FileItemProps[];
    editableFileItems: boolean;
    fileDescriptionMaxLength?: number | undefined;
    sortable?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    onItemUpdate: (item: FileItemProps) => void;
    onItemDelete: (item: FileItemProps) => void;
    onSort?: ((reorderedFileItems: FileItemProps[]) => void) | undefined;
}
export declare const FileList: ({ fileItems, editableFileItems, fileDescriptionMaxLength, sortable, disabled, readOnly, onItemUpdate, onItemDelete, onSort, }: Props) => JSX.Element;
export {};
