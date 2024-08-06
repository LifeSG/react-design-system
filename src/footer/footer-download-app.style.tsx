import { v2_MediaQuery } from "../v2_media";
import { V2_Text } from "../v2_text";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${v2_MediaQuery.MaxWidth.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`;

export const Label = styled(V2_Text.H5).attrs({ as: "p" })`
    margin-bottom: 1rem;
`;

export const Items = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const AppStoreLink = styled.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`;
