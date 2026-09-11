import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";

import type { FormLabelProps } from "../../form/form-label/types";
import { Typography } from "../../typography";
import * as styles from "./file-item-details.styles";
import type { FileItemMode } from "./types";

interface Props {
    mode: Exclude<FileItemMode, "edit">;
    formattedName: string | undefined;
    description: string | undefined;
    fileSize: string;
    errorMessage: string | React.ReactNode | undefined;
    isLoading: boolean;
    descriptionLabel?: FormLabelProps | undefined;
    detailSectionRef: React.Ref<HTMLDivElement>;
    children?: React.ReactNode;
}

export const FileItemDetails = ({
    mode,
    formattedName,
    description,
    fileSize,
    errorMessage,
    isLoading,
    descriptionLabel,
    detailSectionRef,
    children,
}: Props) => {
    if (mode === "error") {
        return (
            <div ref={detailSectionRef} className={styles.nameSection}>
                <Typography.BodyMD
                    weight={description ? "semibold" : "regular"}
                >
                    {formattedName}
                </Typography.BodyMD>
                <Typography.BodyMD className={styles.descriptionFileSizeText}>
                    {fileSize}
                </Typography.BodyMD>
                {errorMessage && (
                    <Typography.BodySM
                        className={styles.errorMessage}
                        weight="semibold"
                    >
                        <ExclamationCircleFillIcon
                            className={styles.errorIcon}
                            aria-hidden
                        />
                        {errorMessage}
                    </Typography.BodySM>
                )}
            </div>
        );
    }

    return (
        <div ref={detailSectionRef} className={styles.nameSection}>
            <Typography.BodyMD weight={description ? "semibold" : "regular"}>
                {formattedName}
            </Typography.BodyMD>
            {description && (
                <>
                    <Typography.BodyMD className={styles.itemDescriptionLabel}>
                        {descriptionLabel?.children ?? "Photo description"}
                    </Typography.BodyMD>
                    <Typography.BodyMD className={styles.itemDescriptionText}>
                        {description}
                    </Typography.BodyMD>
                </>
            )}
            {!isLoading && (
                <Typography.BodyMD className={styles.descriptionFileSizeText}>
                    {fileSize}
                </Typography.BodyMD>
            )}
            {children}
        </div>
    );
};
