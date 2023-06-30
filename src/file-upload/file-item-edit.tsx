import { useEffect, useRef, useState } from "react";
import { Form } from "../form";
import { StringHelper } from "../util";
import {
    ActionButton,
    ActionButtonsSection,
    ContentSection,
    DetailsSection,
    FileNameText,
    FileSizeText,
    Item,
    NameSection,
} from "./file-item-edit.styles";
import { FileUploadHelper } from "./helper";
import { FileItemProps } from "./types";
import { FileListItemThumbnail } from "./file-list-item/file-list-item-thumbnail";

interface Props {
    fileItem: FileItemProps;
    wrapperWidth: number;
    descriptionMaxLength?: number | undefined;
    onEdit: (description: string) => void;
    onCancel: () => void;
}

export const FileItemEdit = ({
    fileItem,
    descriptionMaxLength,
    wrapperWidth,
    onEdit,
    onCancel,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const {
        id,
        description,
        name,
        size,
        truncateText = true,
        thumbnailImageDataUrl,
    } = fileItem;

    const [formattedName, setFormattedName] = useState<string>();

    const textareaRef = useRef<HTMLTextAreaElement>();
    const nameSectionRef = useRef<HTMLDivElement>();

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setFormattedName(getTruncatedText(name));
    }, [wrapperWidth]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleSave = () => {
        if (textareaRef.current) {
            onEdit(textareaRef.current.value || "");
        } else {
            onEdit(undefined);
        }
    };

    const handleCancel = () => {
        onCancel();
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
    const renderFileNameAndSize = () => (
        <NameSection ref={nameSectionRef}>
            <FileNameText weight="semibold">{formattedName}</FileNameText>
            <FileSizeText>
                {FileUploadHelper.formatFileSizeDisplay(size)}
            </FileSizeText>
        </NameSection>
    );

    return (
        <Item data-testid={`${id}-edit-display`}>
            <ContentSection>
                {thumbnailImageDataUrl && (
                    <FileListItemThumbnail
                        thumbnailImageDataUrl={thumbnailImageDataUrl}
                    />
                )}
                <DetailsSection>
                    {renderFileNameAndSize()}
                    <Form.Textarea
                        ref={textareaRef}
                        id={`${id}-description-textarea`}
                        data-testid={`${id}-textarea`}
                        value={description}
                        maxLength={descriptionMaxLength}
                        rows={3}
                        label={{
                            children: "Photo description",
                            subtitle:
                                "Describe this photo to users who may not be able to see the image.",
                        }}
                    />
                </DetailsSection>
            </ContentSection>
            <ActionButtonsSection $thumbnail={!!thumbnailImageDataUrl}>
                <ActionButton
                    data-testid={`${id}-save-button`}
                    type="button"
                    onClick={handleSave}
                >
                    Save
                </ActionButton>
                <ActionButton
                    type="button"
                    styleType="secondary"
                    data-testid={`${id}-cancel-button`}
                    onClick={handleCancel}
                >
                    Cancel
                </ActionButton>
            </ActionButtonsSection>
        </Item>
    );
};
