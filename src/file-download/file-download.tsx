import { DownloadIcon } from "@lifesg/react-icons/download";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { FileUploadHelper } from "../file-upload/helper";
import { MediaWidths } from "../media";
import { Text } from "../text";
import { StringHelper } from "../util/string-helper";
import {
    DSIconButton,
    DownloadContainer,
    DownloadDescription,
    FileName,
    FileSize,
    IconContainer,
    Spinner,
} from "./file-download.styles";
import { FileDownloadProps } from "./types";

export const FileDownload = ({
    "data-testid": testId,
    className,
    fileName,
    truncateText,
    loading,
    file,
    fileSize,
    onClick,
    downloadIcon,
    ariaLabel,
}: FileDownloadProps) => {
    // =========================================================================
    // CONST, STATE, REFS
    // =========================================================================
    const [formattedName, setFormattedName] = useState<string[]>([fileName]);
    const { width: wrapperWidth, ref: wrapperRef } = useResizeDetector();

    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        const setTruncatedText = (value: string) => {
            if (truncateText === false) {
                setFormattedName([fileName]);
                return;
            }

            const shouldTruncateText =
                window.innerWidth <= MediaWidths.mobileL || truncateText;
            if (!shouldTruncateText) {
                setFormattedName([fileName]);
                return;
            }

            setFormattedName(
                StringHelper.truncateToLines(
                    2,
                    value,
                    wrapperWidth,
                    wrapperWidth / 2,
                    wrapperWidth / 2 / 5, // Arbitrary
                    16 // Font size
                )
            );
        };
        setTruncatedText(fileName);
    }, [fileName, truncateText, wrapperWidth]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (loading) {
            return;
        }

        if (onClick) {
            onClick();
            return;
        }

        if (file) {
            saveAs(file, fileName);
        }
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const getDataTestId = () => {
        return testId || "file-download";
    };

    const getAriaLabel = () => {
        return ariaLabel || `Download ${fileName}`;
    };

    const getFileSize = () => {
        if (!fileSize || loading) {
            return "-";
        }

        return FileUploadHelper.formatFileSizeDisplay(fileSize);
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderIconButton = () => {
        const icon = loading ? (
            <Spinner />
        ) : (
            downloadIcon || <DownloadIcon aria-hidden />
        );

        return (
            <DSIconButton
                $loading={loading}
                data-testid={`${getDataTestId()}-download-button`}
                type="button"
                styleType="light"
                sizeType="small"
                aria-hidden="true"
                tabIndex={-1}
            >
                {icon}
            </DSIconButton>
        );
    };

    return (
        <DownloadContainer
            $loading={loading}
            className={className}
            onClick={handleButtonClick}
            data-testid={getDataTestId()}
            aria-label={getAriaLabel()}
            role="button"
            tabIndex={0}
        >
            <DownloadDescription>
                <FileName ref={wrapperRef}>
                    {formattedName.map((text, index) => {
                        return (
                            <Text.BodySmall key={index}>{text}</Text.BodySmall>
                        );
                    })}
                </FileName>
                <FileSize>{getFileSize()}</FileSize>
            </DownloadDescription>
            <IconContainer>{renderIconButton()}</IconContainer>
        </DownloadContainer>
    );
};
