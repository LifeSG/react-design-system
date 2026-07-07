import clsx from "clsx";

import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";
import { FileUploadHelper } from "../helper";
import * as styles from "./file-list-item-thumbnail.styles";

interface Props {
    thumbnailImageDataUrl?: string | undefined;
    fileType?: string | undefined;
    "data-testid"?: string | undefined;
    renderReplaceButton?: boolean | undefined;
    onReplaceClick?: (() => void) | undefined;
}

export const FileListItemThumbnail = ({
    thumbnailImageDataUrl,
    fileType,
    "data-testid": testId,
    renderReplaceButton,
    onReplaceClick,
}: Props) => {
    const handleReplace = () => {
        if (onReplaceClick) {
            onReplaceClick();
        }
    };

    const isPdf = fileType === FileUploadHelper.PDF_MIME_TYPE;
    const displaySrc = isPdf
        ? thumbnailImageDataUrl || FileUploadHelper.PDF_ICON_URL
        : thumbnailImageDataUrl || "";

    return (
        <div className={styles.container} data-testid={testId}>
            <ImageWithFallback
                data-testid={testId ? `${testId}-image` : undefined}
                src={displaySrc}
                className={clsx(styles.thumbnail, isPdf && styles.thumbnailPdf)}
            />
            {renderReplaceButton && (
                <button
                    type="button"
                    onClick={handleReplace}
                    className={styles.replaceButton}
                >
                    Replace
                </button>
            )}
        </div>
    );
};
