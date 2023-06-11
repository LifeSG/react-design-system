import { BinIcon } from "@lifesg/react-icons/bin";
import { CrossIcon } from "@lifesg/react-icons/cross";
import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { ProgressBar } from "../shared/progress-bar";
import { StringHelper } from "../util";
import {
    Content,
    DesktopErrorMessage,
    ErrorIconButton,
    IconButton,
    Item,
    ItemActionContainer,
    ItemFileSizeText,
    ItemNameSection,
    ItemText,
    LoadingActionContainer,
    MobileErrorMessage,
} from "./file-item.styles";
import { FileUploadHelper } from "./helper";
import { FileItemProps } from "./types";

interface Props extends FileItemProps {
    onDelete: () => void;
    onEdit?: (() => void) | undefined;
}

export const FileItem = ({
    id,
    name,
    size,
    type,
    description,
    progress = 1,
    errorMessage,
    thumbnailImageDataUrl,
    editableMode,
    truncateText = true,
    onDelete,
    onEdit,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [fileName, setFileName] = useState<string>();
    const isLoading = progress < 1;

    const nameSectionRef = useRef<HTMLDivElement>();
    const { width: wrapperWidth, ref: wrapperRef } = useResizeDetector();

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setFileName(getTruncatedText(name));
    }, [wrapperWidth]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDelete = () => {
        onDelete();
    };

    const handleEdit = () => {
        if (onEdit) onEdit();
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
            const isEditable = FileUploadHelper.isSupportedImageType(type);

            return (
                <ItemActionContainer $hasEditButton={isEditable}>
                    {/* TODO: Add in part 2 */}
                    {/* {isEditable && (
                        <IconButton
                            key="edit"
                            data-testid={`${id}-edit-button`}
                            type="button"
                            styleType="light"
                            onClick={handleEdit}
                        >
                            <PencilIcon />
                        </IconButton>
                    )} */}
                    <IconButton
                        key="delete"
                        data-testid={`${id}-delete-button`}
                        type="button"
                        styleType="light"
                        aria-label={`delete-${name}`}
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
            ref={wrapperRef}
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
                        {fileName}
                    </ItemText>
                    {description && (
                        <ItemText data-testid="description">
                            {description}
                        </ItemText>
                    )}
                    {errorMessage && (
                        <DesktopErrorMessage weight="semibold">
                            {errorMessage}
                        </DesktopErrorMessage>
                    )}
                </ItemNameSection>
                <ItemFileSizeText>
                    {!isLoading && FileUploadHelper.formatFileSizeDisplay(size)}
                </ItemFileSizeText>
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
