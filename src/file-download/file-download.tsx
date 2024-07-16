import {
    Container,
    Description,
    DescriptionContainer,
    TextContainer,
    Title,
    TitleContainer,
} from "./file-download.styles";
import { FileListCard } from "./file-list-card";
import { FileDownloadProps, FileItemProps } from "./types";

export const FileDownload = ({
    fileItems,
    title,
    description,
    onDownload,
    "data-testid": testId,
    className,
    styleType = "bordered",
}: FileDownloadProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDownloadItem = async (item: FileItemProps) => {
        if (onDownload) {
            await onDownload(item);
        }
    };
    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderTitle = () => {
        if (!title) {
            return null;
        }

        if (typeof title === "string") {
            return <Title weight="regular">{title}</Title>;
        }

        return <TitleContainer>{title}</TitleContainer>;
    };

    const renderDescription = () => {
        if (!description) {
            return null;
        }

        if (typeof description === "string") {
            return <Description weight="regular">{description}</Description>;
        }

        return <DescriptionContainer>{description}</DescriptionContainer>;
    };

    return (
        <Container
            className={className}
            data-testid={testId}
            $border={styleType === "bordered"}
        >
            {(title || description) && (
                <TextContainer>
                    {renderTitle()}
                    {renderDescription()}
                </TextContainer>
            )}
            {fileItems &&
                fileItems.length > 0 &&
                fileItems.map((item) => (
                    <FileListCard
                        key={item.id}
                        fileItem={item}
                        onDownload={handleDownloadItem}
                    />
                ))}
        </Container>
    );
};
