import styled from "styled-components";
import { Color } from "../../color";
import { MediaQuery } from "../../media";
import { TextStyleHelper } from "../../text";

interface Props {
    thumbnailImageDataUrl: string;
    renderReplaceButton?: boolean | undefined;
    onReplaceClick?: (() => void) | undefined;
}

export const FileListItemThumbnail = ({
    thumbnailImageDataUrl,
    renderReplaceButton,
    onReplaceClick,
}: Props) => {
    const handleReplace = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onReplaceClick) {
            onReplaceClick();
        }
    };

    return (
        <Container>
            <Image src={thumbnailImageDataUrl} />
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

export const Image = styled.img`
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
