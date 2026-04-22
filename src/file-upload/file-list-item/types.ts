import { FileItemProps } from "../types";

/** Props for an individual file item row in the upload list. */
export interface FileListItemProps {
    /** The file item data to display. */
    fileItem: FileItemProps;
    /** The current pixel width of the list wrapper element. */
    wrapperWidth: number;

    /** If specified, the edit buttons will be rendered */
    editable?: boolean | undefined;
    /** If specified, drag handles will be rendered */
    sortable?: boolean | undefined;
    /** Disables all interactions on the file item when `true`. */
    disabled?: boolean | undefined;

    /** Called when the user clicks the delete button for this file item. */
    onDelete: () => void;
    /** Called when the user clicks the edit button for this file item. */
    onEditClick?: (() => void) | undefined;
}
