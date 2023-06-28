import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BinIcon } from "@lifesg/react-icons/bin";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { PencilIcon } from "@lifesg/react-icons/pencil";
import { useContext, useEffect, useRef, useState } from "react";
import { ProgressBar } from "../../shared/progress-bar";
import { StringHelper } from "../../util";
import { FileUploadContext } from "../context";
import { FileUploadHelper } from "../helper";
import { FileListItemThumbnail } from "./file-list-item-thumbnail";
import {
    ActionContainer,
    Box,
    ContentSection,
    DesktopErrorMessage,
    DragHandleIcon,
    ErrorIconButton,
    ExtendedNameSection,
    FileSizeSection,
    IconButton,
    Item,
    ItemDescriptionText,
    ItemFocusType,
    ItemText,
    MobileErrorMessage,
    NameSection,
} from "./file-list-item.styles";
import { FileListItemProps } from "./types";

export const FileListItem = ({
    fileItem,
    editable,
    sortable,
    wrapperWidth,
    disabled,
    onDelete,
    onEditClick,
}: FileListItemProps) => {
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
    const detailSectionRef = useRef<HTMLDivElement>();
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
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setFormattedName(getTruncatedText(name));
    }, [wrapperWidth]);

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

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const getTruncatedText = (value: string) => {
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
    };

    const shouldDisable = () => disabled || focusType === "others";

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
                        {errorMessage}
                    </DesktopErrorMessage>
                )}
            </NameSection>
            <FileSizeSection>
                <ItemText>{fileSize}</ItemText>
            </FileSizeSection>
            {errorMessage && (
                <MobileErrorMessage weight="semibold">
                    {errorMessage}
                </MobileErrorMessage>
            )}
        </>
    );

    const renderWithThumbnail = () => (
        <>
            <FileListItemThumbnail
                thumbnailImageDataUrl={thumbnailImageDataUrl}
            />
            <ExtendedNameSection>
                <NameSection ref={detailSectionRef}>
                    {renderNameDescription()}
                </NameSection>
                <FileSizeSection>
                    <ItemText>{fileSize}</ItemText>
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
                <ItemText>{fileSize}</ItemText>
            </FileSizeSection>
        </>
    );

    const renderContents = () => {
        let content: JSX.Element;

        if (errorMessage) {
            content = renderErrorState();
        } else if (thumbnailImageDataUrl) {
            content = renderWithThumbnail();
        } else {
            content = renderDefault();
        }

        return (
            <ContentSection $hasThumbnail={!!thumbnailImageDataUrl}>
                {content}
            </ContentSection>
        );
    };

    const renderActions = () => {
        let content: JSX.Element;

        if (errorMessage) {
            content = (
                <ErrorIconButton
                    onClick={handleDelete}
                    data-testid={`${id}-error-delete-button`}
                    aria-label={`delete-${name}`}
                >
                    <CrossIcon aria-hidden />
                </ErrorIconButton>
            );
        } else if (isLoading) {
            content = <ProgressBar progress={progress} />;
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
                            sizeType="small"
                            aria-label={`edit ${name}`}
                            disabled={shouldDisable()}
                            onClick={handleEdit}
                        >
                            <PencilIcon aria-hidden />
                        </IconButton>
                    )}
                    <IconButton
                        key="delete"
                        data-testid={`${id}-delete-button`}
                        data-no-dnd="true"
                        type="button"
                        styleType="light"
                        sizeType="small"
                        aria-label={`delete ${name}`}
                        disabled={shouldDisable()}
                        onClick={handleDelete}
                    >
                        <BinIcon aria-hidden />
                    </IconButton>
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
            $sortable={sortable}
            $disabled={disabled}
            $focusType={focusType}
            {...(sortable ? sortableProps : {})}
        >
            {sortable && <DragHandleIcon $disabled={shouldDisable()} />}
            <Box
                $focused={focusType === "self"}
                $error={!!errorMessage}
                $loading={isLoading}
                $disabled={shouldDisable()}
                $editable={editable}
            >
                {renderContents()}
                {renderActions()}
            </Box>
        </Item>
    );
};
