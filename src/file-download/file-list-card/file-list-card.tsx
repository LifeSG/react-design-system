import { DownloadIcon } from "@lifesg/react-icons";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { FileUploadHelper } from "../../file-upload/helper";
import { VisuallyHidden } from "../../shared/accessibility";
import { Breakpoint } from "../../theme";
import { StringHelper } from "../../util";
import {
    ActionContainer,
    Box,
    CardButton,
    ContentSection,
    DesktopErrorMessage,
    ErrorIcon,
    ExtendedNameSection,
    FileSizeSection,
    IconButton,
    Item,
    ItemNameText,
    MobileErrorMessage,
    NameSection,
    PdfThumbnail,
    Spinner,
    Thumbnail,
    ThumbnailContainer,
} from "./file-list-card.styles";
import { FileListItemProps } from "./types";

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
        clickLabel,
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
    const theme = useContext(ThemeContext);
    const mobileBreakpoint = Breakpoint["sm-max"]({ theme });
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });
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
        // The button sits inside Box, which also handles clicks. Without this,
        // both handlers fire and the action runs twice.
        event.stopPropagation();
        handleCardClick();
    };

    const handleDownloadButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        // Same reason as above: stop the click from also reaching Box.
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
            <ItemNameText ref={containerRef}>{displayText}</ItemNameText>
            {isError && (
                <DesktopErrorMessage>
                    <ErrorIcon aria-hidden />
                    {errorMessage ? errorMessage : "Something went wrong"}
                </DesktopErrorMessage>
            )}
        </>
    );

    const renderThumbnail = () => {
        if (thumbnailDisplay.type === "none") {
            return null;
        }

        return (
            <ThumbnailContainer data-testid={`${id}-thumbnail`}>
                {thumbnailDisplay.type === "pdf-icon" ? (
                    <PdfThumbnail
                        data-testid={`${id}-thumbnail-image`}
                        src={FileUploadHelper.PDF_ICON_URL}
                    />
                ) : (
                    <Thumbnail
                        data-testid={`${id}-thumbnail-image`}
                        src={thumbnailDisplay.src}
                    />
                )}
            </ThumbnailContainer>
        );
    };

    const renderNameSizeError = () => (
        <>
            <NameSection>{renderNameDescription()}</NameSection>
            <FileSizeSection>{fileSize ? fileSize : "-"}</FileSizeSection>
            {isError && (
                <MobileErrorMessage>
                    <ErrorIcon aria-hidden />
                    {errorMessage ? errorMessage : "Something went wrong"}
                </MobileErrorMessage>
            )}
        </>
    );

    const renderContents = () => (
        <ContentSection $hasThumbnail={hasThumbnail}>
            {renderThumbnail()}
            {hasThumbnail ? (
                <ExtendedNameSection>
                    {renderNameSizeError()}
                </ExtendedNameSection>
            ) : (
                renderNameSizeError()
            )}
        </ContentSection>
    );

    const renderCardButton = () => {
        if (!onClick) {
            return null;
        }

        return (
            <VisuallyHidden>
                <CardButton
                    type="button"
                    data-testid={`${id}-card-button`}
                    aria-label={clickLabel ?? name}
                    disabled={!ready}
                    onClick={handleCardButtonClick}
                />
            </VisuallyHidden>
        );
    };

    const renderActions = () => {
        return (
            <ActionContainer>
                <IconButton
                    data-testid={`${id}-download-button`}
                    type="button"
                    styleType="light"
                    sizeType="small"
                    aria-label={`download ${name}`}
                    onClick={handleDownloadButtonClick}
                >
                    {isLoading || !ready ? (
                        <Spinner size={16} aria-hidden />
                    ) : (
                        <DownloadIcon aria-hidden />
                    )}
                </IconButton>
            </ActionContainer>
        );
    };

    return (
        <Item data-testid={id}>
            <Box onClick={handleCardClick} $error={isError}>
                {renderContents()}
                {renderCardButton()}
                {renderActions()}
            </Box>
        </Item>
    );
};

export const FileListCard = memo(Component);
