import { DownloadIcon } from "@lifesg/react-icons";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { FileUploadHelper } from "../../file-upload/helper";
import { Breakpoint } from "../../theme";
import { StringHelper } from "../../util";
import {
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
    Spinner,
    Thumbnail,
    ThumbnailContainer,
} from "./file-list-card.styles";
import { FileListItemProps } from "./types";

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
        } catch (error) {
            console.error(error);
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
                    <ErrorIcon aria-hidden />
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
                        <ErrorIcon aria-hidden />
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
                    <ErrorIcon aria-hidden />
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
            <Box onClick={handleDownload} $error={isError}>
                {renderContents()}
                {renderActions()}
            </Box>
        </Item>
    );
};

export const FileListCard = memo(Component);
