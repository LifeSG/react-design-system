import {
    Container,
    Description,
    DescriptionContainer,
    ListWrapper,
    TextContainer,
    Title,
    TitleContainer,
} from "./file-download.styles";
import { FileListCard } from "./file-list-card";
import { FileDownloadProps, FileItemDownloadProps } from "./types";

export const FileDownload = ({
    id,
    fileItems,
    title,
    description,
    onDownload,
    "data-testid": testId,
    className,
    styleType = "bordered",
}: FileDownloadProps) => {
    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleDownloadItem = async (item: FileItemDownloadProps) => {
        if (onDownload) {
            await onDownload(item);
        }
    };

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
            id={id ? `${id}-file-download` : "file-download"}
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
            <ListWrapper>
                {fileItems &&
                    fileItems.length > 0 &&
                    fileItems.map((item) => (
                        <FileListCard
                            key={item.id}
                            fileItem={item}
                            onDownload={handleDownloadItem}
                        />
                    ))}
            </ListWrapper>

        </Container>
    );
};
