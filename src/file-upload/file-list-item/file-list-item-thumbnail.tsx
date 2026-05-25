import clsx from "clsx";

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
        <styles.Container data-testid={testId}>
            <styles.Thumbnail
                data-testid={testId ? `${testId}-image` : undefined}
                src={displaySrc}
                className={clsx(isPdf && styles.thumbnailPdf)}
            />
            {renderReplaceButton && (
                <styles.ReplaceButton type="button" onClick={handleReplace}>
                    Replace
                </styles.ReplaceButton>
            )}
        </styles.Container>
    );
};
