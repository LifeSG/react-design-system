import { DownloadIcon } from "@lifesg/react-icons";
import { memo, useState } from "react";
import { FileUploadHelper } from "../../file-upload/helper";
import { FileListItemThumbnail } from "./file-list-card-thumbnail";
import {
    ActionContainer,
    Box,
    ContentSection,
    DesktopErrorMessage,
    ExtendedNameSection,
    FileSizeSection,
    IconButton,
    Item,
    ItemText,
    NameSection,
    Spinner,
} from "./file-list-card.styles";
import { FileListItemProps } from "./types";

const Component = ({ fileItem, onDownload }: FileListItemProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const { id, name, size, errorMessage, thumbnailImageDataUrl } = fileItem;

    // Local variables
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const fileSize = FileUploadHelper.formatFileSizeDisplay(size);

    // =========================================================================
    // EFFECTS
    // =========================================================================

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDownload = async () => {
        setIsLoading(true);
        try {
            await onDownload(fileItem);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderNameDescription = () => (
        <>
            <ItemText weight={isError ? "semibold" : "regular"}>
                {name}
            </ItemText>
            {isError && (
                <DesktopErrorMessage>
                    {errorMessage ? errorMessage : "Something went wrong"}
                </DesktopErrorMessage>
            )}
        </>
    );

    const renderWithThumbnail = () => (
        <>
            <FileListItemThumbnail
                thumbnailImageDataUrl={thumbnailImageDataUrl}
                data-testid={`${id}-thumbnail`}
            />
            <ExtendedNameSection>
                <NameSection>{renderNameDescription()}</NameSection>
                <FileSizeSection>
                    <ItemText>{fileSize}</ItemText>
                </FileSizeSection>
            </ExtendedNameSection>
        </>
    );

    const renderDefault = () => (
        <>
            <NameSection>{renderNameDescription()}</NameSection>
            <FileSizeSection $hideInMobile={isLoading}>
                <ItemText>{fileSize ? fileSize : "-"}</ItemText>
            </FileSizeSection>
        </>
    );

    const renderContents = () => {
        let content: JSX.Element;

        if (thumbnailImageDataUrl) {
            content = renderWithThumbnail();
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
                    key="download"
                    data-testid={`${id}-dowload-button`}
                    data-no-dnd="true"
                    type="button"
                    styleType="light"
                    sizeType="small"
                    aria-label={`download ${name}`}
                >
                    {isLoading ? (
                        <Spinner
                            $buttonStyle="light"
                            $buttonSizeStyle="small"
                            size={16}
                            aria-hidden
                        />
                    ) : (
                        <DownloadIcon aria-hidden />
                    )}
                </IconButton>
            </ActionContainer>
        );
    };

    return (
        <Item id={id}>
            <Box onClick={handleDownload}>
                {renderContents()}
                {renderActions()}
            </Box>
        </Item>
    );
};

export const FileListCard = memo(Component);
