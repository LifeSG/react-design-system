import type { FormLabelProps } from "../../form/form-label/types";
import type { FileItemProps } from "../types";

export type FileItemMode = "display" | "edit" | "error";

export interface FileListItemProps {
    fileItem: FileItemProps;
    wrapperWidth: number;
    editable?: boolean | undefined;
    sortable?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    descriptionLabel?: FormLabelProps | undefined;
    fileDescriptionMaxLength?: number | undefined;
    descriptionRequired?: boolean | undefined;
    onDelete: () => void;
    onSave?: ((description: string) => void) | undefined;
    onCancel?: (() => void) | undefined;
    onBlur?: ((value: string) => void) | undefined;
}
