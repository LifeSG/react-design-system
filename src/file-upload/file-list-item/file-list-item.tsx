import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BinIcon } from "@lifesg/react-icons/bin";
import { DragHandleIcon as DSDragHandleIcon } from "@lifesg/react-icons/drag-handle";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { PencilIcon } from "@lifesg/react-icons/pencil";
import {
    memo,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

import { Button } from "../../button";
import { ProgressBar } from "../../shared/progress-bar";
import { Typography } from "../../typography";
import { StringHelper } from "../../util";
import { FileUploadContext } from "../context";
import { FileUploadHelper } from "../helper";
import type { ItemFocusType } from "./file-list-item.styles";
import * as styles from "./file-list-item.styles";
import { FileListItemThumbnail } from "./file-list-item-thumbnail";
import type { FileListItemProps } from "./types";

interface Props extends FileListItemProps {
    readOnly?: boolean | undefined;
}

const Component = ({
    fileItem,
    editable,
    sortable,
    wrapperWidth,
    disabled,
    readOnly,
    onDelete,
    onEditClick,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
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
    const [formattedName, setFormattedName] = useState<string>();
    const { activeId } = useContext(FileUploadContext);

    // Sortable mechanism
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });
    const detailSectionRef = useRef<HTMLDivElement>(null);
    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    };

    const sortableProps = {
        style,
        ...attributes,
        ...listeners,
    };

    // Local variables
    const isLoading = progress < 1;
    const fileSize = FileUploadHelper.formatFileSizeDisplay(size);
    const focusType: ItemFocusType = activeId
        ? activeId === id
            ? "self"
            : "others"
        : "none";

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const getTruncatedText = useCallback(
        (value: string) => {
            if (!truncateText) return value;

            const widthOfElement =
                detailSectionRef && detailSectionRef.current
                    ? detailSectionRef.current.getBoundingClientRect().width
                    : 0;

            return StringHelper.truncateOneLine(
                value,
                widthOfElement,
                widthOfElement / 2,
                widthOfElement / 2 / 8, // Arbitrary
                16 // Font size
            );
        },
        [truncateText]
    );

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setFormattedName(getTruncatedText(name));
    }, [wrapperWidth, getTruncatedText, name]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDelete = () => {
        onDelete();
    };

    const handleEdit = () => {
        if (onEditClick) {
            onEditClick();
        }
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

    const shouldDisable = () => disabled || !!activeId;

    const shouldEnableSort = () => !!sortable && !readOnly;

    const getItemState = () => {
        if (shouldDisable() && focusType === "none") {
            return "disabled";
        }

        if (shouldEnableSort() && focusType === "self") {
            return "sortable-active";
        }

        if (shouldEnableSort()) {
            return "sortable";
        }

        return "default";
    };

    const getDragHandleState = () => {
        if (focusType === "self") {
            return "active";
        }

        if (shouldDisable()) {
            return "disabled";
        }

        return "default";
    };

    const getBoxState = () => {
        if (focusType === "self") {
            return "focused";
        }

        if (shouldDisable()) {
            return "disabled";
        }

        if (errorMessage) {
            return "error";
        }

        return "default";
    };

    const getActionContainerLayout = () => {
        if (!errorMessage && isLoading) {
            return "loading";
        }

        if (!errorMessage && editable) {
            return "editable";
        }

        return "default";
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderNameDescription = () => (
        <>
            <Typography.BodyMD
                className={styles.itemText}
                weight={description ? "semibold" : "regular"}
            >
                {formattedName}
            </Typography.BodyMD>
            {description && (
                <Typography.BodyMD className={styles.itemDescriptionText}>
                    {description}
                </Typography.BodyMD>
            )}
        </>
    );

    const renderErrorState = () => (
        <>
            <div ref={detailSectionRef} className={styles.nameSection}>
                {renderNameDescription()}
                {errorMessage && (
                    <Typography.BodySM
                        className={styles.desktopErrorMessage}
                        weight="semibold"
                    >
                        <ExclamationCircleFillIcon
                            className={styles.errorIcon}
                            aria-hidden
                        />
                        {errorMessage}
                    </Typography.BodySM>
                )}
            </div>
            <div
                className={styles.fileSizeSection}
                data-mobile-visibility={isLoading ? "hidden" : "expand"}
            >
                <Typography.BodyMD className={styles.fileSizeText}>
                    {fileSize}
                </Typography.BodyMD>
            </div>
            {errorMessage && (
                <Typography.BodySM
                    className={styles.mobileErrorMessage}
                    weight="semibold"
                >
                    <ExclamationCircleFillIcon
                        className={styles.errorIcon}
                        aria-hidden
                    />
                    {errorMessage}
                </Typography.BodySM>
            )}
        </>
    );

    const renderWithThumbnail = (thumbnailImageDataUrl: string) => (
        <>
            <FileListItemThumbnail
                thumbnailImageDataUrl={thumbnailImageDataUrl}
                fileType={fileItem.type}
                data-testid={`${id}-thumbnail`}
            />
            <div className={styles.extendedNameSection}>
                <div ref={detailSectionRef} className={styles.nameSection}>
                    {renderNameDescription()}
                </div>
                <div
                    className={styles.fileSizeSection}
                    data-mobile-visibility={isLoading ? "hidden" : "expand"}
                >
                    <Typography.BodyMD className={styles.fileSizeText}>
                        {fileSize}
                    </Typography.BodyMD>
                </div>
            </div>
        </>
    );

    const renderDefault = () => (
        <>
            <div ref={detailSectionRef} className={styles.nameSection}>
                {renderNameDescription()}
            </div>
            <div
                className={styles.fileSizeSection}
                data-mobile-visibility={isLoading ? "hidden" : "expand"}
            >
                <Typography.BodyMD className={styles.fileSizeText}>
                    {fileSize}
                </Typography.BodyMD>
            </div>
        </>
    );

    const renderContents = () => {
        let content: JSX.Element;
        const shouldShowThumbnail =
            !!thumbnailImageDataUrl ||
            fileItem.type === FileUploadHelper.PDF_MIME_TYPE;

        if (errorMessage) {
            content = renderErrorState();
        } else if (shouldShowThumbnail) {
            content = renderWithThumbnail(thumbnailImageDataUrl || "");
        } else {
            content = renderDefault();
        }

        return (
            <div
                className={styles.contentSection}
                data-has-thumbnail={shouldShowThumbnail}
            >
                {content}
            </div>
        );
    };

    const renderActions = () => {
        let content: JSX.Element;

        if (errorMessage) {
            content = (
                <Button
                    data-testid={`${id}-error-delete-button`}
                    data-no-dnd="true"
                    type="button"
                    styleType="light"
                    sizeType="small"
                    aria-label={`delete ${name}, error: ${errorMessage}`}
                    onClick={handleDelete}
                    className={styles.iconButton}
                    icon={<BinIcon aria-hidden />}
                />
            );
        } else if (isLoading) {
            content = (
                <ProgressBar
                    progress={progress}
                    data-testid={`${id}-progress-bar`}
                />
            );
        } else {
            content = (
                <>
                    {editable && (
                        <Button
                            key="edit"
                            data-testid={`${id}-edit-button`}
                            data-no-dnd="true"
                            type="button"
                            styleType="light"
                            sizeType="small"
                            aria-label={`edit ${name}`}
                            disabled={shouldDisable()}
                            onClick={handleEdit}
                            onKeyDown={handleKeyDown}
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
                        disabled={shouldDisable()}
                        onClick={handleDelete}
                        onKeyDown={handleKeyDown}
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

    return (
        <li
            id={id}
            ref={setNodeRef}
            className={styles.item}
            data-item-state={getItemState()}
            data-testid={`${id}-item`}
            {...(shouldEnableSort() ? sortableProps : {})}
        >
            {shouldEnableSort() && (
                <DSDragHandleIcon
                    data-testid={`${id}-drag-handle`}
                    className={styles.dragHandleIcon}
                    data-drag-handle-state={getDragHandleState()}
                />
            )}
            <div
                className={styles.box}
                data-box-state={getBoxState()}
                data-stack-mobile={!errorMessage && (isLoading || editable)}
            >
                {renderContents()}
                {!readOnly && renderActions()}
            </div>
        </li>
    );
};

export const FileListItem = memo(Component);
