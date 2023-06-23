import { FileItemProps } from "../types";

export interface FileListItemProps {
    fileItem: FileItemProps;
    wrapperWidth: number;

    /** If specified, the edit buttons will be rendered */
    editable?: boolean | undefined;
    /** If specified, drag handles will be rendered */
    sortable?: boolean | undefined;
    disabled?: boolean | undefined;

    onDelete: () => void;
    onEditClick?: (() => void) | undefined;
}
