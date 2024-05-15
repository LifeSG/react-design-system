/// <reference types="react" />
import { FileListItemProps } from "./types";
interface Props extends FileListItemProps {
    readOnly?: boolean | undefined;
}
export declare const FileListItem: import("react").MemoExoticComponent<({ fileItem, editable, sortable, wrapperWidth, disabled, readOnly, onDelete, onEditClick, }: Props) => JSX.Element>;
export {};
