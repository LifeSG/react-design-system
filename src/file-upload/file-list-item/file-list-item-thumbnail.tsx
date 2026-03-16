import styled from "styled-components";

import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";

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
    margin-right: ${V3_Spacing["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`;

export const Thumbnail = styled(ImageWithFallback)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${V3_Radius["sm"]};
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    object-fit: cover;

    ${V3_MediaQuery.MaxWidth.md} {
        width: 64px;
        height: 64px;
    }
`;

export const ReplaceButton = styled.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${V3_Spacing["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${V3_Font["body-md-semibold"]}
    color: ${V3_Colour["text-primary"]};

    &:hover {
        color: ${V3_Colour["text-hover"]};
    }
`;
