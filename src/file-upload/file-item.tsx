import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { BinIcon } from "@lifesg/react-icons/bin";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { PencilIcon } from "@lifesg/react-icons/pencil";
import { useContext, useEffect, useRef, useState } from "react";
import { ProgressBar } from "../shared/progress-bar";
import { StringHelper } from "../util";
import {
    Box,
    Content,
    DesktopErrorMessage,
    DragHandleIcon,
    ErrorIconButton,
    IconButton,
    Item,
    ItemActionContainer,
    ItemDescriptionText,
    ItemFileSizeText,
    ItemNameSection,
    ItemText,
    LoadingActionContainer,
    MobileErrorMessage,
} from "./file-item.styles";
import { FileUploadHelper } from "./helper";
import { FileItemProps } from "./types";
import { FileUploadContext } from "./file-upload-context";

interface Props {
    fileItem: FileItemProps;
    editable?: boolean | undefined;
    wrapperWidth: number;
    sortable: boolean;
    disabled?: boolean | undefined;
    onDelete: () => void;
    onEditClick?: (() => void) | undefined;
}

export const FileItem = ({
    fileItem,
    editable,
    wrapperWidth,
    sortable,
    disabled,
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

    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const nameSectionRef = useRef<HTMLDivElement>();

    // -------------------------------------------------
    // LOCAL VARS
    // -------------------------------------------------
    const isLoading = progress < 1;
    const fileSize = FileUploadHelper.formatFileSizeDisplay(size);
    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    };
    const isFocused = activeId === id;
    const isFocusedOthers = activeId && activeId !== id;

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
            nameSectionRef && nameSectionRef.current
                ? nameSectionRef.current.getBoundingClientRect().width
                : 0;

        return StringHelper.truncateOneLine(
            value,
            widthOfElement,
            widthOfElement / 2,
            widthOfElement / 2 / 8, // Arbitrary
            16 // Font size
        );
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderActionButton = () => {
        if (isLoading) {
            return (
                <LoadingActionContainer>
                    <ProgressBar progress={progress} />
                </LoadingActionContainer>
            );
        } else if (errorMessage) {
            return (
                <ItemActionContainer>
                    <ErrorIconButton
                        onClick={handleDelete}
                        data-testid={`${id}-error-delete-button`}
                        aria-label={`delete-${name}`}
                    >
                        <CrossIcon aria-hidden />
                    </ErrorIconButton>
                </ItemActionContainer>
            );
        } else {
            const shouldDisableActions =
                disabled || isFocused || isFocusedOthers;
            return (
                <ItemActionContainer $editable={editable}>
                    {editable && (
                        <IconButton
                            key="edit"
                            data-testid={`${id}-edit-button`}
                            type="button"
                            styleType="light"
                            aria-label={`edit ${name}`}
                            disabled={shouldDisableActions}
                            onClick={handleEdit}
                        >
                            <PencilIcon aria-hidden />
                        </IconButton>
                    )}
                    <IconButton
                        key="delete"
                        data-testid={`${id}-delete-button`}
                        type="button"
                        styleType="light"
                        aria-label={`delete ${name}`}
                        disabled={shouldDisableActions}
                        onClick={handleDelete}
                    >
                        <BinIcon aria-hidden />
                    </IconButton>
                </ItemActionContainer>
            );
        }
    };

    return (
        <Item
            id={id}
            ref={setNodeRef}
            $sortable={sortable}
            $disabled={disabled}
            $focus={isFocused}
            $focusOther={isFocusedOthers}
            style={style}
            {...attributes}
            {...listeners}
        >
            {sortable && (
                <DragHandleIcon $disabled={disabled || isFocusedOthers} />
            )}
            <Box
                $error={!!errorMessage}
                $loading={isLoading}
                $editable={editable}
                $focus={isFocused}
                $disabled={disabled || isFocusedOthers}
            >
                <Content>
                    <ItemNameSection ref={nameSectionRef}>
                        <ItemText
                            data-testid="name"
                            weight={description ? "semibold" : "regular"}
                        >
                            {formattedName}
                        </ItemText>
                        {description && (
                            <ItemDescriptionText data-testid="description">
                                {description}
                            </ItemDescriptionText>
                        )}
                        {errorMessage && (
                            <DesktopErrorMessage weight="semibold">
                                {errorMessage}
                            </DesktopErrorMessage>
                        )}
                    </ItemNameSection>
                    {!isLoading && (
                        <ItemFileSizeText>{fileSize}</ItemFileSizeText>
                    )}
                    {errorMessage && (
                        <MobileErrorMessage weight="semibold">
                            {errorMessage}
                        </MobileErrorMessage>
                    )}
                </Content>
                {renderActionButton()}
            </Box>
        </Item>
    );
};
