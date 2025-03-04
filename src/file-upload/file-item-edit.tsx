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
import { FileListItemThumbnail } from "./file-list-item/file-list-item-thumbnail";
import { FileUploadHelper } from "./helper";
import { FileItemProps } from "./types";

interface Props {
    fileItem: FileItemProps;
    wrapperWidth: number;
    fileDescriptionMaxLength?: number | undefined;
    onSave: (description: string) => void;
    onCancel: () => void;
    onBlur: (value: string) => void;
}

export const FileItemEdit = ({
    fileItem,
    fileDescriptionMaxLength,
    wrapperWidth,
    onSave,
    onCancel,
    onBlur,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const {
        id,
        name,
        size,
        truncateText = true,
        thumbnailImageDataUrl,
    } = fileItem;

    const [formattedName, setFormattedName] = useState<string>();
    const [currentDescription, setCurrentDescription] = useState<string>("");

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const nameSectionRef = useRef<HTMLDivElement>(null);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setFormattedName(getTruncatedText(name));
    }, [wrapperWidth]);

    useEffect(() => {
        setCurrentDescription(fileItem.description || "");
    }, [fileItem]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleSave = () => {
        if (textareaRef.current) {
            onSave(textareaRef.current.value.trim());
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentDescription(event.target.value);
    };

    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        onBlur(event.target.value);
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

    const shouldDisableSave = () => {
        const trimmedDescription = currentDescription.trim();
        return trimmedDescription.length === 0;
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
                        value={currentDescription}
                        maxLength={fileDescriptionMaxLength}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                    disabled={shouldDisableSave()}
                    onClick={handleSave}
                >
                    Save
                </ActionButton>
                <ActionButton
                    type="button"
                    styleType="secondary"
                    data-testid={`${id}-cancel-button`}
                    onClick={onCancel}
                >
                    Cancel
                </ActionButton>
            </ActionButtonsSection>
        </Item>
    );
};
