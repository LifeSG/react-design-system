import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "../button";
import { Form } from "../form";
import { Typography } from "../typography";
import { StringHelper } from "../util";
import * as styles from "./file-item-edit.styles";
import { FileListItemThumbnail } from "./file-list-item/file-list-item-thumbnail";
import { FileUploadHelper } from "./helper";
import type { FileItemProps } from "./types";

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
        type,
        truncateText = true,
        thumbnailImageDataUrl,
    } = fileItem;

    const [formattedName, setFormattedName] = useState<string>();
    const [currentDescription, setCurrentDescription] = useState<string>("");

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const nameSectionRef = useRef<HTMLDivElement>(null);

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const getTruncatedText = useCallback(
        (value: string) => {
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
        },
        [truncateText]
    );

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        setFormattedName(getTruncatedText(name));
    }, [wrapperWidth, getTruncatedText, name]);

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

    const shouldDisableSave = () => {
        const trimmedDescription = currentDescription.trim();
        return trimmedDescription.length === 0;
    };

    const shouldShowThumbnail =
        !!thumbnailImageDataUrl || type === FileUploadHelper.PDF_MIME_TYPE;

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderFileNameAndSize = () => (
        <div ref={nameSectionRef} className={styles.nameSection}>
            <Typography.BodyMD
                className={styles.fileNameText}
                weight="semibold"
            >
                {formattedName}
            </Typography.BodyMD>
            <Typography.BodyMD>
                {FileUploadHelper.formatFileSizeDisplay(size)}
            </Typography.BodyMD>
        </div>
    );

    return (
        <li data-testid={`${id}-edit-display`} className={styles.item}>
            <div className={styles.contentSection}>
                {shouldShowThumbnail && (
                    <FileListItemThumbnail
                        thumbnailImageDataUrl={thumbnailImageDataUrl}
                        fileType={type}
                    />
                )}
                <div className={styles.detailsSection}>
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
                        aria-label={`Photo description for ${name}`}
                        label={{
                            children: "Photo description",
                            subtitle:
                                "Describe this photo to users who may not be able to see the image.",
                        }}
                    />
                </div>
            </div>
            <div
                className={clsx(
                    styles.actionButtonsSection,
                    shouldShowThumbnail &&
                        styles.actionButtonsSectionWithThumbnail
                )}
            >
                <Button
                    data-testid={`${id}-save-button`}
                    type="button"
                    sizeType="small"
                    disabled={shouldDisableSave()}
                    onClick={handleSave}
                    className={styles.actionButton}
                >
                    Save
                </Button>
                <Button
                    type="button"
                    sizeType="small"
                    styleType="secondary"
                    data-testid={`${id}-cancel-button`}
                    onClick={onCancel}
                    className={styles.actionButton}
                >
                    Cancel
                </Button>
            </div>
        </li>
    );
};
