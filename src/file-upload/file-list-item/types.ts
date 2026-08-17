import type { FormLabelProps } from "../../form/form-label/types";
import type { FileItemProps } from "../types";

export type FileItemMode = "display" | "edit" | "error";

interface BaseProps {
    fileItem: FileItemProps;
    wrapperWidth: number;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    descriptionLabel?: FormLabelProps | undefined;
}

interface DisplayModeProps extends BaseProps {
    mode: "display";
    /** If specified, the edit buttons will be rendered */
    editable?: boolean | undefined;
    /** If specified, drag handles will be rendered */
    sortable?: boolean | undefined;
    onDelete: () => void;
    onEditClick?: (() => void) | undefined;
}

interface EditModeProps extends BaseProps {
    mode: "edit";
    fileDescriptionMaxLength?: number | undefined;
    descriptionRequired?: boolean | undefined;
    onSave: (description: string) => void;
    onCancel: () => void;
    onBlur: (value: string) => void;
}

interface ErrorModeProps extends BaseProps {
    mode: "error";
    onDelete: () => void;
}

export type FileListItemProps =
    | DisplayModeProps
    | EditModeProps
    | ErrorModeProps;
