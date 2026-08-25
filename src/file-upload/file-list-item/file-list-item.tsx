import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DragHandleIcon as DSDragHandleIcon } from "@lifesg/react-icons/drag-handle";
import { memo, useContext, useEffect, useMemo, useRef, useState } from "react";

import { Form } from "../../form";
import { Typography } from "../../typography";
import { FileUploadContext } from "../context";
import { FileUploadHelper } from "../helper";
import { FileItemActions } from "./file-item-actions";
import { FileItemDetails } from "./file-item-details";
import * as styles from "./file-list-item.styles";
import { FileListItemThumbnail } from "./file-list-item-thumbnail";
import type { FileItemMode, FileListItemProps } from "./types";
import { useTruncatedName } from "./use-truncated-name";

const Component = ({
    fileItem,
    wrapperWidth,
    editable,
    sortable,
    disabled,
    readOnly,
    descriptionLabel,
    fileDescriptionMaxLength,
    descriptionRequired = true,
    onDelete,
    onSave,
    onCancel,
    onBlur,
}: FileListItemProps) => {
    const {
        id,
        name,
        size,
        description,
        progress = 1,
        errorMessage,
        thumbnailImageDataUrl,
        truncateText = true,
    } = fileItem;

    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const { activeId } = useContext(FileUploadContext);
    const detailSectionRef = useRef<HTMLDivElement>(null);
    const formattedName = useTruncatedName(
        name,
        wrapperWidth,
        truncateText,
        detailSectionRef
    );

    const computeMode = (): FileItemMode => {
        if (errorMessage) return "error";
        if (editable && !readOnly && !description && progress >= 1)
            return "edit";
        return "display";
    };

    const [currentMode, setCurrentMode] = useState<FileItemMode>(computeMode);

    // Sortable mechanism
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id, disabled: currentMode === "edit" });

    // Edit mode state
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [currentDescription, setCurrentDescription] = useState(
        fileItem.description || ""
    );

    // =========================================================================
    // DERIVED STATE
    // =========================================================================
    const isLoading = progress < 1;
    const fileSize = FileUploadHelper.formatFileSizeDisplay(size);
    const shouldShowThumbnail =
        !!thumbnailImageDataUrl ||
        fileItem.type === FileUploadHelper.PDF_MIME_TYPE;

    const hasInlineActions =
        currentMode === "display" && !!description && !!editable;
    const shouldEnableSort = !!sortable && !readOnly;
    const isDisabled = disabled || !!activeId;

    const visualStates = useMemo(() => {
        const focusType = activeId
            ? activeId === id
                ? "self"
                : "others"
            : "none";

        const itemState = (() => {
            if (isDisabled && focusType === "none") return "disabled";
            if (shouldEnableSort && focusType === "self")
                return "sortable-active";
            if (shouldEnableSort) return "sortable";
            return undefined;
        })();

        const dragHandleState = (() => {
            if (focusType === "self") return "active";
            if (isDisabled) return "disabled";
            return undefined;
        })();

        const boxState = (() => {
            if (focusType === "self") return "focused";
            if (isDisabled) return "disabled";
            if (errorMessage) return "error";
            return undefined;
        })();

        return { itemState, dragHandleState, boxState };
    }, [activeId, id, isDisabled, shouldEnableSort, errorMessage]);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (errorMessage && currentMode !== "error") {
            setCurrentMode("error");
        } else if (!errorMessage && currentMode === "error") {
            const nextMode = computeMode();
            setCurrentMode(nextMode);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorMessage]);

    useEffect(() => {
        if (currentMode === "edit") {
            setCurrentDescription(fileItem.description || "");
        }
    }, [currentMode, fileItem.description]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDelete = () => {
        onDelete();
    };

    const handleEdit = () => {
        setCurrentMode("edit");
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        /**
         * Circumvent issue of keydown action activating the sort mechanism
         * rather than the actual action
         */
        if (sortable) {
            event.stopPropagation();
        }
    };

    const handleSave = () => {
        if (textareaRef.current) {
            setCurrentMode("display");
            onSave?.(textareaRef.current.value.trim());
        }
    };

    const handleCancel = () => {
        setCurrentMode("display");
        onCancel?.();
    };

    const handleTextareaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setCurrentDescription(event.target.value);
    };

    const handleTextareaBlur = (
        event: React.FocusEvent<HTMLTextAreaElement>
    ) => {
        onBlur?.(event.target.value);
    };

    const shouldDisableSave = () => {
        if (!descriptionRequired) return false;
        return currentDescription.trim().length === 0;
    };

    // =========================================================================
    // RENDER: EDIT MODE
    // =========================================================================
    if (currentMode === "edit") {
        return (
            <li data-testid={`${id}-edit-display`} className={styles.editItem}>
                <div className={styles.editContentSection}>
                    {shouldShowThumbnail && (
                        <FileListItemThumbnail
                            thumbnailImageDataUrl={thumbnailImageDataUrl}
                            fileType={fileItem.type}
                        />
                    )}
                    <div className={styles.editDetailsSection}>
                        <div
                            ref={detailSectionRef}
                            className={styles.editNameSection}
                        >
                            <Typography.BodyMD
                                className={styles.editFileNameText}
                                weight="semibold"
                            >
                                {formattedName}
                            </Typography.BodyMD>
                            <Typography.BodyMD
                                className={styles.editFileSizeText}
                            >
                                {fileSize}
                            </Typography.BodyMD>
                        </div>
                        <Form.Textarea
                            ref={textareaRef}
                            id={`${id}-description-textarea`}
                            data-testid={`${id}-textarea`}
                            value={currentDescription}
                            maxLength={fileDescriptionMaxLength}
                            onChange={handleTextareaChange}
                            onBlur={handleTextareaBlur}
                            rows={3}
                            label={
                                descriptionLabel ?? {
                                    children: "Photo description",
                                    subtitle:
                                        "Describe this photo to users who may not be able to see the image.",
                                }
                            }
                        />
                    </div>
                </div>
                <FileItemActions
                    mode="edit"
                    id={id}
                    name={name}
                    hasThumbnail={shouldShowThumbnail}
                    disableSave={shouldDisableSave()}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            </li>
        );
    }

    // =========================================================================
    // RENDER: DISPLAY / ERROR MODE
    // =========================================================================
    const sortableStyle = {
        transform: CSS.Translate.toString(transform),
        transition,
    };

    const sortableProps = {
        style: sortableStyle,
        ...attributes,
        ...listeners,
    };

    const thumbnail = shouldShowThumbnail ? (
        <FileListItemThumbnail
            thumbnailImageDataUrl={thumbnailImageDataUrl || ""}
            fileType={fileItem.type}
            data-testid={`${id}-thumbnail`}
        />
    ) : null;

    return (
        <li
            id={id}
            ref={setNodeRef}
            className={styles.item}
            data-item-state={visualStates.itemState}
            data-testid={`${id}-item`}
            {...(shouldEnableSort ? sortableProps : {})}
        >
            {shouldEnableSort && (
                <DSDragHandleIcon
                    data-testid={`${id}-drag-handle`}
                    className={styles.dragHandleIcon}
                    data-drag-handle-state={visualStates.dragHandleState}
                />
            )}
            <div
                className={styles.box}
                data-box-state={visualStates.boxState}
                data-stack-mobile={!errorMessage && (isLoading || editable)}
            >
                <div
                    className={styles.contentSection}
                    data-has-thumbnail={shouldShowThumbnail}
                >
                    {currentMode === "display" && thumbnail}
                    <FileItemDetails
                        mode={currentMode}
                        formattedName={formattedName}
                        description={description}
                        fileSize={fileSize}
                        errorMessage={errorMessage}
                        isLoading={isLoading}
                        descriptionLabel={descriptionLabel}
                        detailSectionRef={detailSectionRef}
                    >
                        {!readOnly && hasInlineActions && (
                            <FileItemActions
                                mode="display"
                                inline
                                id={id}
                                name={name}
                                editable={!!editable}
                                isLoading={isLoading}
                                progress={progress}
                                disabled={isDisabled}
                                onDelete={handleDelete}
                                onEdit={handleEdit}
                                onKeyDown={handleKeyDown}
                            />
                        )}
                    </FileItemDetails>
                </div>
                {!readOnly && !hasInlineActions && currentMode === "error" && (
                    <FileItemActions
                        mode="error"
                        id={id}
                        name={name}
                        errorMessage={errorMessage}
                        onDelete={handleDelete}
                    />
                )}
                {!readOnly &&
                    !hasInlineActions &&
                    currentMode === "display" && (
                        <FileItemActions
                            mode="display"
                            id={id}
                            name={name}
                            editable={!!editable}
                            isLoading={isLoading}
                            progress={progress}
                            disabled={isDisabled}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                            onKeyDown={handleKeyDown}
                        />
                    )}
            </div>
        </li>
    );
};

export const FileListItem = memo(Component);
