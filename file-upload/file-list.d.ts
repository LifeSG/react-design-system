import React from "react";
import { FileItemProps } from "./types";
interface Props {
    fileItems: FileItemProps[] | undefined;
    editableFileItems: boolean;
    fileDescriptionMaxLength?: number | undefined;
    sortable?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    onItemUpdate: (item: FileItemProps) => void;
    onItemDelete: (item: FileItemProps) => void;
    onSort?: ((reorderedFileItems: FileItemProps[]) => void) | undefined;
}
export interface FileListRef {
    focus: () => void;
}
export declare const FileList: (props: Props & React.RefAttributes<FileListRef>) => React.ReactElement | null;
export {};
