/// <reference types="react" />
import { FileItemProps } from "./types";
interface Props {
    fileItem: FileItemProps;
    wrapperWidth: number;
    fileDescriptionMaxLength?: number | undefined;
    onSave: (description: string) => void;
    onCancel: () => void;
    onBlur: (value: string) => void;
}
export declare const FileItemEdit: ({ fileItem, fileDescriptionMaxLength, wrapperWidth, onSave, onCancel, onBlur, }: Props) => JSX.Element;
export {};
