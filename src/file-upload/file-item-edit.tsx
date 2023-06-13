import { useEffect, useRef, useState } from "react";
import { Form } from "../form";
import {
    ActionButton,
    ActionButtonsSection,
    ContentMain,
    ContentSection,
    EditableSection,
    FileNameText,
    FileSizeText,
    Item,
    NameSection,
} from "./file-item-edit.styles";
import { StringHelper } from "../util";

interface Props {
    id: string;
    name: string;
    description: string;
    fileSize: string;
    wrapperWidth: number;
    descriptionMaxLength?: number | undefined;
    truncateText?: boolean | undefined;
    onEdit: (description: string) => void;
    onCancel: () => void;
}

export const FileItemEdit = ({
    id,
    description,
    name,
    fileSize,
    descriptionMaxLength,
    wrapperWidth,
    truncateText = true,
    onEdit,
    onCancel,
}: Props) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
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
            onEdit(textareaRef.current.value);
        } else {
            onEdit(undefined);
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
    return (
        <Item>
            <ContentSection>
                {/* Thumbnail to be rendered here. */}
                <ContentMain>
                    <NameSection ref={nameSectionRef}>
                        <FileNameText weight="semibold">
                            {formattedName}
                        </FileNameText>
                        <FileSizeText>{fileSize}</FileSizeText>
                    </NameSection>
                    <EditableSection>
                        <Form.Textarea
                            ref={textareaRef}
                            id={`${id}-description-textarea`}
                            value={description}
                            maxLength={descriptionMaxLength}
                            rows={3}
                            label={{
                                children: "Photo description",
                                subtitle:
                                    "Describe this photo to users who may not be able to see the image.",
                            }}
                        />
                    </EditableSection>
                </ContentMain>
            </ContentSection>
            <ActionButtonsSection>
                <ActionButton type="button" onClick={handleSave}>
                    Save
                </ActionButton>
                <ActionButton
                    type="button"
                    styleType="secondary"
                    onClick={onCancel}
                >
                    Cancel
                </ActionButton>
            </ActionButtonsSection>
        </Item>
    );
};
