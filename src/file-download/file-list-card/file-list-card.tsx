import { DownloadIcon } from "@lifesg/react-icons";
import { memo, useEffect, useRef, useState } from "react";

import { FileUploadHelper } from "../../file-upload/helper";
import { Breakpoint, useMediaQuery } from "../../theme";
import { StringHelper } from "../../util";
import * as styles from "./file-list-card.styles";
import type { FileListItemProps } from "./types";

const {
    ActionContainer,
    Box,
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
    Thumbnail,
    ThumbnailContainer,
} = styles;

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
    const isMobile = useMediaQuery({ maxWidth: Breakpoint["sm-max"] });
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
            <ItemNameText ref={containerRef}>{displayText}</ItemNameText>
            {isError && (
                <DesktopErrorMessage>
                    <ErrorIcon />
                    {errorMessage ? errorMessage : "Something went wrong"}
                </DesktopErrorMessage>
            )}
        </>
    );

    const renderWithThumbnail = (thumbnailSrc: string) => (
        <>
            <ThumbnailContainer data-testid={`${id}-thumbnail`}>
                <Thumbnail
                    data-testid={`${id}-thumbnail-image`}
                    src={thumbnailSrc}
                />
            </ThumbnailContainer>
            <ExtendedNameSection>
                <NameSection>{renderNameDescription()}</NameSection>
                <FileSizeSection>{fileSize ? fileSize : "-"}</FileSizeSection>
                {isError && (
                    <MobileErrorMessage>
                        <ErrorIcon />
                        {errorMessage ? errorMessage : "Something went wrong"}
                    </MobileErrorMessage>
                )}
            </ExtendedNameSection>
        </>
    );

    const renderDefault = () => (
        <>
            <NameSection>{renderNameDescription()}</NameSection>
            <FileSizeSection>{fileSize ? fileSize : "-"}</FileSizeSection>
            {isError && (
                <MobileErrorMessage>
                    <ErrorIcon />
                    {errorMessage ? errorMessage : "Something went wrong"}
                </MobileErrorMessage>
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
            <ContentSection $hasThumbnail={!!thumbnailImageDataUrl}>
                {content}
            </ContentSection>
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
                    loading={isLoading || !ready}
                    icon={<DownloadIcon />}
                />
            </ActionContainer>
        );
    };

    return (
        <Item data-testid={id}>
            <Box onClick={handleDownload} $error={isError}>
                {renderContents()}
                {renderActions()}
            </Box>
        </Item>
    );
};

export const FileListCard = memo(Component);
