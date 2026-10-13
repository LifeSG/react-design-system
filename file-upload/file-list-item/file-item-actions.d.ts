interface BaseProps {
    id: string;
    name: string;
}
interface ErrorActionProps extends BaseProps {
    mode: "error";
    errorMessage?: string | React.ReactNode | undefined;
    onDelete: () => void;
}
interface DisplayActionProps extends BaseProps {
    mode: "display";
    inline?: boolean | undefined;
    editable?: boolean | undefined;
    isLoading: boolean;
    progress: number;
    disabled: boolean;
    onDelete: () => void;
    onEdit?: (() => void) | undefined;
    onKeyDown?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
}
interface EditActionProps extends BaseProps {
    mode: "edit";
    hasThumbnail: boolean;
    disableSave: boolean;
    onSave: () => void;
    onCancel: () => void;
}
type FileItemActionsProps = ErrorActionProps | DisplayActionProps | EditActionProps;
export declare const FileItemActions: (props: FileItemActionsProps) => import("react/jsx-runtime").JSX.Element;
export {};
