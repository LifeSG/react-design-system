import { DownloadIcon } from "@lifesg/react-icons";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import clsx from "clsx";
import { memo, useEffect, useRef, useState } from "react";

import { Button } from "../../button";
import { FileUploadHelper } from "../../file-upload/helper";
import { VisuallyHidden } from "../../shared/accessibility";
import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";
import { useMaxWidthMediaQuery } from "../../theme";
import { StringHelper } from "../../util";
import * as styles from "./file-list-card.styles";
import type { FileListItemProps } from "./types";

const Component = ({ fileItem, onDownload, onClick }: FileListItemProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const {
        id,
        name,
        mimeType,
        size,
        errorMessage,
        thumbnailImageDataUrl,
        truncateText = true,
        ready = true,
        ariaLabel,
    } = fileItem;

    // Local variables
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const fileSize = FileUploadHelper.formatFileSizeDisplay(size);
    const thumbnailDisplay = FileUploadHelper.resolveThumbnailDisplay(
        mimeType,
        thumbnailImageDataUrl
    );
    const hasThumbnail = thumbnailDisplay.type !== "none";
    const isMobile = useMaxWidthMediaQuery("sm");
    const [displayText, setDisplayText] = useState<string>();
    const containerRef = useRef<HTMLDivElement>(null);

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (!containerRef.current) return;
        if (isMobile) {
            setDisplayText(getTruncatedText(name));
        } else {
            setDisplayText(name);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, isMobile]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDownload = async () => {
        if (!ready || isLoading) {
            return;
        }

        setIsLoading(true);
        try {
            setIsError(false);
            await onDownload(fileItem);
        } catch {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCardClick = () => {
        if (!ready) {
            return;
        }

        if (onClick) {
            onClick(fileItem);
            return;
        }

        handleDownload();
    };

    const handleCardButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        /*
         * The button sits inside the container, which handles clicks too.
         * Without this both handlers fire and the action runs twice.
         */
        event.stopPropagation();
        handleCardClick();
    };

    const handleDownloadButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        // Same reason: the container's handler must not also run.
        event.stopPropagation();
        handleDownload();
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const getTruncatedText = (value: string) => {
        if (!truncateText) return value;

        const widthOfElement =
            containerRef && containerRef.current
                ? containerRef.current.getBoundingClientRect().width
                : 0;

        return StringHelper.truncateTwoLines(value, widthOfElement, 16, 1.5);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderNameDescription = () => (
        <>
            <div className={styles.itemNameText} ref={containerRef}>
                {displayText}
            </div>
            {isError && (
                <div className={styles.desktopErrorMessage}>
                    <ExclamationCircleFillIcon className={styles.errorIcon} />
                    {errorMessage ? errorMessage : "Something went wrong"}
                </div>
            )}
        </>
    );

    const renderThumbnail = () => {
        if (thumbnailDisplay.type === "none") {
            return null;
        }

        /*
         * Borderless styling belongs to the badge SVG, not to PDFs in general —
         * a PDF that supplied a real thumbnail keeps the border every other
         * image gets.
         */
        const isPdfBadge =
            thumbnailDisplay.type === "pdf-icon" && !thumbnailDisplay.src;

        return (
            <div
                className={styles.thumbnailContainer}
                data-testid={`${id}-thumbnail`}
            >
                <ImageWithFallback
                    className={clsx(
                        styles.thumbnail,
                        isPdfBadge && styles.thumbnailPdf
                    )}
                    data-testid={`${id}-thumbnail-image`}
                    src={thumbnailDisplay.src ?? FileUploadHelper.PDF_ICON_URL}
                />
            </div>
        );
    };

    const renderNameSizeError = () => (
        <>
            <div className={styles.nameSection}>{renderNameDescription()}</div>
            <div className={styles.fileSizeSection}>
                {fileSize ? fileSize : "-"}
            </div>
            {isError && (
                <div className={styles.mobileErrorMessage}>
                    <ExclamationCircleFillIcon className={styles.errorIcon} />
                    {errorMessage ? errorMessage : "Something went wrong"}
                </div>
            )}
        </>
    );

    const renderContents = () => (
        <div
            className={clsx(
                styles.contentSection,
                hasThumbnail && styles.contentSectionHasThumbnail
            )}
        >
            {renderThumbnail()}
            {hasThumbnail ? (
                <div className={styles.extendedNameSection}>
                    {renderNameSizeError()}
                </div>
            ) : (
                renderNameSizeError()
            )}
        </div>
    );

    const renderCardButton = () => {
        if (!onClick) {
            return null;
        }

        return (
            <VisuallyHidden>
                <button
                    type="button"
                    className={styles.cardButton}
                    data-testid={`${id}-card-button`}
                    aria-label={ariaLabel ?? name}
                    disabled={!ready}
                    onClick={handleCardButtonClick}
                />
            </VisuallyHidden>
        );
    };

    const renderActions = () => {
        return (
            <div className={styles.actionContainer}>
                <Button
                    className={styles.iconButton}
                    data-testid={`${id}-download-button`}
                    type="button"
                    styleType="light"
                    sizeType="small"
                    aria-label={`download ${name}`}
                    loading={isLoading || !ready}
                    icon={<DownloadIcon />}
                    onClick={onClick ? handleDownloadButtonClick : undefined}
                />
            </div>
        );
    };

    return (
        <li className={styles.item} data-testid={id}>
            <div
                className={clsx(styles.box, isError && styles.boxError)}
                onClick={handleCardClick}
            >
                {renderCardButton()}
                {renderContents()}
                {renderActions()}
            </div>
        </li>
    );
};

export const FileListCard = memo(Component);
