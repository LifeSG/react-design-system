import styled from "styled-components";

import { ImagePlaceholder } from "../shared/image-placeholder";

export const tokens = {
    imageBox: {
        fit: "--fds-internal-statefulImage-imageBox-fit",
    },
};

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageBox = styled.img`
    ${tokens.imageBox.fit}: initial;

    height: 100%;
    width: 100%;
    object-fit: var(${tokens.imageBox.fit}, contain);
`;

export const DefaultPlaceholder = styled(ImagePlaceholder)`
    width: 100%;
    height: 100%;
`;
