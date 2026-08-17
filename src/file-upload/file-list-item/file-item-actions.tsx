import { BinIcon } from "@lifesg/react-icons/bin";
import { PencilIcon } from "@lifesg/react-icons/pencil";
import clsx from "clsx";

import { Button } from "../../button";
import { ProgressBar } from "../../shared/progress-bar";
import * as editStyles from "../file-item-edit.styles";
import * as styles from "./file-list-item.styles";

// =============================================================================
// TYPES
// =============================================================================
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
    onKeyDown?:
        | ((event: React.KeyboardEvent<HTMLButtonElement>) => void)
        | undefined;
}

interface EditActionProps extends BaseProps {
    mode: "edit";
    hasThumbnail: boolean;
    disableSave: boolean;
    onSave: () => void;
    onCancel: () => void;
}

type FileItemActionsProps =
    | ErrorActionProps
    | DisplayActionProps
    | EditActionProps;

// =============================================================================
// COMPONENT
// =============================================================================
export const FileItemActions = (props: FileItemActionsProps) => {
    const { mode, id, name } = props;

    if (mode === "error") {
        return (
            <div className={styles.actionContainer}>
                <Button
                    data-testid={`${id}-error-delete-button`}
                    data-no-dnd="true"
                    type="button"
                    styleType="light"
                    sizeType="small"
                    aria-label={`delete ${name}, error: ${props.errorMessage}`}
                    onClick={props.onDelete}
                    className={styles.iconButton}
                    icon={<BinIcon aria-hidden />}
                />
            </div>
        );
    }

    if (mode === "edit") {
        return (
            <div
                className={clsx(
                    editStyles.actionButtonsSection,
                    props.hasThumbnail &&
                        editStyles.actionButtonsSectionWithThumbnail
                )}
            >
                <Button
                    data-testid={`${id}-save-button`}
                    type="button"
                    sizeType="small"
                    disabled={props.disableSave}
                    onClick={props.onSave}
                    className={editStyles.actionButton}
                >
                    Save
                </Button>
                <Button
                    type="button"
                    sizeType="small"
                    styleType="secondary"
                    data-testid={`${id}-cancel-button`}
                    onClick={props.onCancel}
                    className={editStyles.actionButton}
                >
                    Cancel
                </Button>
            </div>
        );
    }

    // Display mode
    if (props.inline) {
        return (
            <div className={styles.inlineActionContainer}>
                <Button
                    key="edit"
                    data-testid={`${id}-edit-button`}
                    data-no-dnd="true"
                    type="button"
                    styleType="light"
                    sizeType="small"
                    aria-label={`edit ${name}`}
                    disabled={props.disabled}
                    onClick={props.onEdit}
                    onKeyDown={props.onKeyDown}
                    icon={<PencilIcon aria-hidden />}
                    className={styles.iconButton}
                />
                <Button
                    key="delete"
                    data-testid={`${id}-delete-button`}
                    data-no-dnd="true"
                    type="button"
                    styleType="light"
                    sizeType="small"
                    aria-label={`delete ${name}`}
                    disabled={props.disabled}
                    onClick={props.onDelete}
                    onKeyDown={props.onKeyDown}
                    icon={<BinIcon aria-hidden />}
                    className={styles.iconButton}
                />
            </div>
        );
    }

    const getActionContainerLayout = () => {
        if (props.isLoading) return "loading";
        if (props.editable) return "editable";
        return undefined;
    };

    let content: JSX.Element;

    if (props.isLoading) {
        content = (
            <ProgressBar
                progress={props.progress}
                data-testid={`${id}-progress-bar`}
            />
        );
    } else {
        content = (
            <>
                {props.editable && (
                    <Button
                        key="edit"
                        data-testid={`${id}-edit-button`}
                        data-no-dnd="true"
                        type="button"
                        styleType="light"
                        sizeType="small"
                        aria-label={`edit ${name}`}
                        disabled={props.disabled}
                        onClick={props.onEdit}
                        onKeyDown={props.onKeyDown}
                        icon={<PencilIcon aria-hidden />}
                        className={styles.iconButton}
                    />
                )}
                <Button
                    key="delete"
                    data-testid={`${id}-delete-button`}
                    data-no-dnd="true"
                    type="button"
                    styleType="light"
                    sizeType="small"
                    aria-label={`delete ${name}`}
                    disabled={props.disabled}
                    onClick={props.onDelete}
                    onKeyDown={props.onKeyDown}
                    icon={<BinIcon aria-hidden />}
                    className={styles.iconButton}
                />
            </>
        );
    }

    return (
        <div
            className={styles.actionContainer}
            data-mobile-layout={getActionContainerLayout()}
        >
            {content}
        </div>
    );
};
