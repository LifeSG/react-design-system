import styled from "styled-components";
import { Color } from "../../color";
import { MediaQuery } from "../../media";
import { ImageWithFallback } from "../../shared/image-with-fallback/image-with-fallback";
import { TextStyleHelper } from "../../text";

interface Props {
    thumbnailImageDataUrl: string;
    "data-testid"?: string | undefined;
}

export const FileListItemThumbnail = ({
    thumbnailImageDataUrl,
    "data-testid": testId,
}: Props) => {
    return (
        <Container data-testid={testId}>
            <Thumbnail
                data-testid={testId ? `${testId}-image` : undefined}
                src={thumbnailImageDataUrl}
            />
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

    ${MediaQuery.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`;
