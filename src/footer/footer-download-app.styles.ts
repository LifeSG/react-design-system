import styled from "styled-components";

import { ComponentToken, MediaQuery, Spacing } from "../theme";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`;

export const Label = styled.div`
    margin-bottom: ${Spacing["spacing-16"]};
    color: ${ComponentToken.Footer["colour-text"]};
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
`;

export const AppButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${Spacing["spacing-16"]};
    column-gap: ${Spacing["spacing-16"]};
`;

export const AppStoreLink = styled.a`
    img {
        width: auto;
        height: 3.75rem;
        object-fit: contain;
        display: block;
    }

    ${MediaQuery.MaxWidth.lg} {
        img {
            height: 3rem;
            width: 100%;
        }
    }
`;
