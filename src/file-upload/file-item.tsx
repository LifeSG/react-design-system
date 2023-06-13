import { BinIcon } from "@lifesg/react-icons/bin";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "../shared/progress-bar";
import { StringHelper } from "../util";
import {
    Content,
    DesktopErrorMessage,
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
import { PencilIcon } from "@lifesg/react-icons/pencil";
import { FileItemEdit } from "./file-item-edit";

interface Props extends FileItemProps {
    wrapperWidth: number;
    /** Indicates the max length for the file item description */
    descriptionMaxLength?: number | undefined;
    /** Indicates if the file item is editable (only for image files) */
    editable?: boolean | undefined;
    onDelete: () => void;
    onDescriptionUpdate: (description: string) => void;
}

export const FileItem = ({
    id,
    name,
    size,
    type,
    description,
    progress = 1,
    editable,
    errorMessage,
    wrapperWidth,
    thumbnailImageDataUrl,
    truncateText = true,
    descriptionMaxLength,
    onDelete,
    onDescriptionUpdate,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [formattedName, setFormattedName] = useState<string>();
    const [renderEditMode, setRenderEditMode] = useState<boolean>(false);
    const isLoading = progress < 1;
    const fileSize = FileUploadHelper.formatFileSizeDisplay(size);

    const nameSectionRef = useRef<HTMLDivElement>();

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setFormattedName(getTruncatedText(name));
    }, [wrapperWidth, renderEditMode]);

    useEffect(() => {
        if (
            editable &&
            FileUploadHelper.isSupportedImageType(type) &&
            !description
        ) {
            setRenderEditMode(true);
        }
    }, [description, type, editable]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDelete = () => {
        onDelete();
    };

    const handleEdit = () => {
        setRenderEditMode(true);
    };

    const handleDescriptionEdit = (description: string) => {
        onDescriptionUpdate(description);
        setRenderEditMode(false);
    };

    const handleDescriptionEditCancel = () => {
        setRenderEditMode(false);
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
            const isEditable =
                editable && FileUploadHelper.isSupportedImageType(type);

            return (
                <ItemActionContainer $hasEditButton={isEditable}>
                    {isEditable && (
                        <IconButton
                            key="edit"
                            data-testid={`${id}-edit-button`}
                            type="button"
                            styleType="light"
                            onClick={handleEdit}
                        >
                            <PencilIcon />
                        </IconButton>
                    )}
                    <IconButton
                        key="delete"
                        data-testid={`${id}-delete-button`}
                        type="button"
                        styleType="light"
                        aria-label={`delete ${name}`}
                        onClick={handleDelete}
                    >
                        <BinIcon aria-hidden />
                    </IconButton>
                </ItemActionContainer>
            );
        }
    };

    // -------------------------------------------------------------------------
    // ACTUAL RENDER
    // -------------------------------------------------------------------------
    if (renderEditMode) {
        return (
            <FileItemEdit
                id={id}
                name={name}
                description={description}
                descriptionMaxLength={descriptionMaxLength}
                fileSize={fileSize}
                wrapperWidth={wrapperWidth}
                onEdit={handleDescriptionEdit}
                onCancel={handleDescriptionEditCancel}
            />
        );
    }

    return (
        <Item
            id={id}
            $error={!!errorMessage}
            $loading={isLoading}
            $editable={FileUploadHelper.isSupportedImageType(type)}
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
                {!isLoading && <ItemFileSizeText>{fileSize}</ItemFileSizeText>}
                {errorMessage && (
                    <MobileErrorMessage weight="semibold">
                        {errorMessage}
                    </MobileErrorMessage>
                )}
            </Content>
            {renderActionButton()}
        </Item>
    );
};
