import styled from "styled-components";
import { Color } from "../../color";
import { v2_MediaQuery } from "../../v2_media";
import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";
import { TextStyleHelper } from "../../text";

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
    const handleReplace = (event: React.MouseEvent<HTMLButtonElement>) => {
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
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`;

export const Thumbnail = styled(ImageWithFallback)`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid ${Color.Neutral[5]};
    object-fit: cover;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`;

export const ReplaceButton = styled.button`
    width: 100%;
    height: 1.625rem;
    margin-top: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    ${TextStyleHelper.getTextStyle("BodySmall", "semibold")};
    color: ${Color.Primary};
    :hover {
        color: ${Color.PrimaryDark};
    }
`;
