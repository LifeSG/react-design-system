import styled from "styled-components";
import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";
import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../../theme";
import { FileUploadHelper } from "../helper";

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
        ? FileUploadHelper.PDF_ICON_URL
        : thumbnailImageDataUrl || "";

    return (
        <Container data-testid={testId}>
            <Thumbnail
                data-testid={testId ? `${testId}-image` : undefined}
                src={displaySrc}
                $isPdf={isPdf}
            />
            {renderReplaceButton && (
                <ReplaceButton type="button" onClick={handleReplace}>
                    Replace
                </ReplaceButton>
            )}
        </Container>
    );
};

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    width: auto;
    margin-right: ${Spacing["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`;

export const Thumbnail = styled(ImageWithFallback)<{ $isPdf?: boolean }>`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${Radius["sm"]};
    border: ${(props) =>
        props.$isPdf
            ? "none"
            : `${Border["width-010"]} ${Border["solid"]} ${Colour["border"]}`};
    object-fit: cover;

    ${MediaQuery.MaxWidth.md} {
        width: 64px;
        height: 64px;
    }
`;

export const ReplaceButton = styled.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${Spacing["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${Font["body-md-semibold"]}
    color: ${Colour["text-primary"]};

    &:hover {
        color: ${Colour["text-hover"]};
    }
`;
