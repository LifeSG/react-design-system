import styled from "styled-components";
import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";
import { Border, Colour, Font, MediaQuery, Radius, Spacing } from "../../theme";

interface Props {
    thumbnailImageDataUrl: string;
    "data-testid"?: string | undefined;
    renderReplaceButton?: boolean | undefined;
    onReplaceClick?: (() => void) | undefined;
}

export const FileListItemThumbnail = ({
    thumbnailImageDataUrl,
    "data-testid": testId,
    renderReplaceButton,
    onReplaceClick,
}: Props) => {
    const handleReplace = () => {
        if (onReplaceClick) {
            onReplaceClick();
        }
    };

    return (
        <Container data-testid={testId}>
            <Thumbnail
                data-testid={testId ? `${testId}-image` : undefined}
                src={thumbnailImageDataUrl}
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

export const Thumbnail = styled(ImageWithFallback)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${Radius["sm"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    object-fit: cover;

    ${MediaQuery.MaxWidth.sm} {
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

    :hover {
        color: ${Colour["text-hover"]};
    }
`;
