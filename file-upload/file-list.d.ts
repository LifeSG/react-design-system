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
export declare const FileList: ({ fileItems, editableFileItems, fileDescriptionMaxLength, sortable, disabled, readOnly, onItemUpdate, onItemDelete, onSort, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
