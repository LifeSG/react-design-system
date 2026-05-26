import clsx from "clsx";

import * as styles from "./file-download.styles";
import { FileListCard } from "./file-list-card";
import type { FileDownloadProps, FileItemDownloadProps } from "./types";

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
            return <styles.Title>{title}</styles.Title>;
        }

        return (
            <styles.TitleContainer baseTextSize="heading-xs">
                {title}
            </styles.TitleContainer>
        );
    };

    const renderDescription = () => {
        if (!description) {
            return null;
        }

        if (typeof description === "string") {
            return <styles.Description>{description}</styles.Description>;
        }

        return (
            <styles.DescriptionContainer baseTextSize="body-md">
                {description}
            </styles.DescriptionContainer>
        );
    };

    const isBordered = styleType === "bordered";

    return (
        <styles.Container
            id={id ? `${id}-file-download` : "file-download"}
            className={clsx(isBordered && "containerBordered", className)}
            data-testid={testId}
            enabled={isBordered}
        >
            {(title || description) && (
                <styles.TextContainer>
                    {renderTitle()}
                    {renderDescription()}
                </styles.TextContainer>
            )}
            <styles.ListWrapper>
                {fileItems &&
                    fileItems.length > 0 &&
                    fileItems.map((item) => (
                        <FileListCard
                            key={item.id}
                            fileItem={item}
                            onDownload={handleDownloadItem}
                        />
                    ))}
            </styles.ListWrapper>
        </styles.Container>
    );
};
