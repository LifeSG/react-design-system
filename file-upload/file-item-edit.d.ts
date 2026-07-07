import type { FormLabelProps } from "../form/types";
import type { FileItemProps } from "./types";
interface Props {
    fileItem: FileItemProps;
    wrapperWidth: number;
    fileDescriptionMaxLength?: number | undefined;
    descriptionRequired?: boolean | undefined;
    descriptionLabel?: FormLabelProps | undefined;
    onSave: (description: string) => void;
    onCancel: () => void;
    onBlur: (value: string) => void;
}
export declare const FileItemEdit: ({ fileItem, fileDescriptionMaxLength, descriptionRequired, descriptionLabel, wrapperWidth, onSave, onCancel, onBlur, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
