import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BinIcon } from "@lifesg/react-icons/bin";
import { PencilIcon } from "@lifesg/react-icons/pencil";
import {
    memo,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

import { ProgressBar } from "../../shared/progress-bar";
import { StringHelper } from "../../util";
import { FileUploadContext } from "../context";
import { FileUploadHelper } from "../helper";
import type { ItemFocusType } from "./file-list-item.styles";
import {
    ActionContainer,
    Box,
    ContentSection,
    DesktopErrorMessage,
    DragHandleIcon,
    ErrorIcon,
    ExtendedNameSection,
    FileSizeSection,
    FileSizeText,
    IconButton,
    Item,
    ItemDescriptionText,
    ItemText,
    MobileErrorMessage,
    NameSection,
} from "./file-list-item.styles";
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

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderNameDescription = () => (
        <>
            <ItemText weight={description ? "semibold" : "regular"}>
                {formattedName}
            </ItemText>
            {description && (
                <ItemDescriptionText>{description}</ItemDescriptionText>
            )}
        </>
    );

    const renderErrorState = () => (
        <>
            <NameSection ref={detailSectionRef}>
                {renderNameDescription()}
                {errorMessage && (
                    <DesktopErrorMessage weight="semibold">
                        <ErrorIcon aria-hidden />
                        {errorMessage}
                    </DesktopErrorMessage>
                )}
            </NameSection>
            <FileSizeSection>
                <FileSizeText>{fileSize}</FileSizeText>
            </FileSizeSection>
            {errorMessage && (
                <MobileErrorMessage weight="semibold">
                    <ErrorIcon aria-hidden />
                    {errorMessage}
                </MobileErrorMessage>
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
            <ExtendedNameSection>
                <NameSection ref={detailSectionRef}>
                    {renderNameDescription()}
                </NameSection>
                <FileSizeSection>
                    <FileSizeText>{fileSize}</FileSizeText>
                </FileSizeSection>
            </ExtendedNameSection>
        </>
    );

    const renderDefault = () => (
        <>
            <NameSection ref={detailSectionRef}>
                {renderNameDescription()}
            </NameSection>
            <FileSizeSection $hideInMobile={isLoading}>
                <FileSizeText>{fileSize}</FileSizeText>
            </FileSizeSection>
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
            <ContentSection $hasThumbnail={shouldShowThumbnail}>
                {content}
            </ContentSection>
        );
    };

    const renderActions = () => {
        let content: JSX.Element;

        if (errorMessage) {
            content = (
                <IconButton
                    data-testid={`${id}-error-delete-button`}
                    data-no-dnd="true"
                    type="button"
                    styleType="light"
                    sizeType="small"
                    aria-label={`delete ${name}, error: ${errorMessage}`}
                    onClick={handleDelete}
                >
                    <BinIcon aria-hidden />
                </IconButton>
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
                        <IconButton
                            key="edit"
                            data-testid={`${id}-edit-button`}
                            data-no-dnd="true"
                            type="button"
                            styleType="light"
                            size="small"
                            aria-label={`edit ${name}`}
                            disabled={shouldDisable()}
                            onClick={handleEdit}
                            onKeyDown={handleKeyDown}
                            icon={<PencilIcon aria-hidden />}
                        />
                    )}
                    <IconButton
                        key="delete"
                        data-testid={`${id}-delete-button`}
                        data-no-dnd="true"
                        type="button"
                        styleType="light"
                        size="small"
                        aria-label={`delete ${name}`}
                        disabled={shouldDisable()}
                        onClick={handleDelete}
                        onKeyDown={handleKeyDown}
                        icon={<BinIcon aria-hidden />}
                    />
                </>
            );
        }

        return (
            <ActionContainer
                $editable={editable}
                $error={!!errorMessage}
                $loading={isLoading}
            >
                {content}
            </ActionContainer>
        );
    };

    return (
        <Item
            id={id}
            ref={setNodeRef}
            $sortable={shouldEnableSort()}
            $disabled={shouldDisable()}
            $focusType={focusType}
            {...(shouldEnableSort() ? sortableProps : {})}
        >
            {shouldEnableSort() && (
                <DragHandleIcon
                    data-testid={`${id}-drag-handle`}
                    $disabled={shouldDisable()}
                    $active={focusType === "self"}
                />
            )}
            <Box
                $focused={focusType === "self"}
                $error={!!errorMessage}
                $loading={isLoading}
                $disabled={shouldDisable()}
                $editable={editable}
            >
                {renderContents()}
                {!readOnly && renderActions()}
            </Box>
        </Item>
    );
};

export const FileListItem = memo(Component);
