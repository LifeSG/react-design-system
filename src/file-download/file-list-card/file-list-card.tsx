import { DownloadIcon } from "@lifesg/react-icons";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import clsx from "clsx";
import { memo, useEffect, useRef, useState } from "react";

import { Button } from "../../button";
import { FileUploadHelper } from "../../file-upload/helper";
import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";
import { useMaxWidthMediaQuery } from "../../theme";
import { StringHelper } from "../../util";
import * as styles from "./file-list-card.styles";
import type { FileListItemProps } from "./types";

const Component = ({ fileItem, onDownload }: FileListItemProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const {
        id,
        name,
        size,
        errorMessage,
        thumbnailImageDataUrl,
        truncateText = true,
        ready = true,
    } = fileItem;

    // Local variables
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const fileSize = FileUploadHelper.formatFileSizeDisplay(size);
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

    const renderWithThumbnail = (thumbnailSrc: string) => (
        <>
            <div
                className={styles.thumbnailContainer}
                data-testid={`${id}-thumbnail`}
            >
                <ImageWithFallback
                    className={styles.thumbnail}
                    data-testid={`${id}-thumbnail-image`}
                    src={thumbnailSrc}
                />
            </div>
            <div className={styles.extendedNameSection}>
                <div className={styles.nameSection}>
                    {renderNameDescription()}
                </div>
                <div className={styles.fileSizeSection}>
                    {fileSize ? fileSize : "-"}
                </div>
                {isError && (
                    <div className={styles.mobileErrorMessage}>
                        <ExclamationCircleFillIcon
                            className={styles.errorIcon}
                        />
                        {errorMessage ? errorMessage : "Something went wrong"}
                    </div>
                )}
            </div>
        </>
    );

    const renderDefault = () => (
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

    const renderContents = () => {
        let content: JSX.Element;

        if (thumbnailImageDataUrl) {
            content = renderWithThumbnail(thumbnailImageDataUrl);
        } else {
            content = renderDefault();
        }

        return (
            <div
                className={clsx(
                    styles.contentSection,
                    !!thumbnailImageDataUrl && styles.contentSectionHasThumbnail
                )}
            >
                {content}
            </div>
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
                />
            </div>
        );
    };

    return (
        <li className={styles.item} data-testid={id}>
            <div
                className={clsx(styles.box, isError && styles.boxError)}
                onClick={handleDownload}
            >
                {renderContents()}
                {renderActions()}
            </div>
        </li>
    );
};

export const FileListCard = memo(Component);
