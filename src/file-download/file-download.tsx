import clsx from "clsx";

import { DashedBorder } from "../dashed-border";
import { Markup } from "../markup";
import { Border, Colour, Radius } from "../theme";
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
            return <p className={styles.title}>{title}</p>;
        }

        return (
            <Markup className={styles.titleContainer} baseTextSize="heading-xs">
                {title}
            </Markup>
        );
    };

    const renderDescription = () => {
        if (!description) {
            return null;
        }

        if (typeof description === "string") {
            return <p className={styles.description}>{description}</p>;
        }

        return (
            <Markup
                className={styles.descriptionContainer}
                baseTextSize="body-md"
            >
                {description}
            </Markup>
        );
    };

    const isBordered = styleType === "bordered";

    return (
        <DashedBorder
            id={id ? `${id}-file-download` : "file-download"}
            className={clsx(
                styles.container,
                isBordered && styles.containerBordered,
                className
            )}
            data-testid={testId}
            enabled={isBordered}
            thickness={Border["width-040"]}
            radius={Radius["sm"]}
            colour={Colour["border"]}
        >
            {(title || description) && (
                <div className={styles.textContainer}>
                    {renderTitle()}
                    {renderDescription()}
                </div>
            )}
            <ul className={styles.listWrapper}>
                {fileItems &&
                    fileItems.length > 0 &&
                    fileItems.map((item) => (
                        <FileListCard
                            key={item.id}
                            fileItem={item}
                            onDownload={handleDownloadItem}
                        />
                    ))}
            </ul>
        </DashedBorder>
    );
};
