import styled from "styled-components";
import { ImagePlaceholder } from "../shared/image-placeholder";

interface ImageStyleProps {
    $fit?: React.CSSProperties["objectFit"];
}

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageBox = styled.img<ImageStyleProps>`
    height: 100%;
    width: 100%;
    object-fit: ${(props) => props.$fit || "contain"};
`;

export const DefaultPlaceholder = styled(ImagePlaceholder)`
    width: 100%;
    height: 100%;
`;
