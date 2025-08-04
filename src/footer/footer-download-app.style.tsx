import styled from "styled-components";
import { MediaQuery, Spacing } from "../theme";
import { Typography } from "../typography";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`;

export const Label = styled(Typography.BodyMD)`
    margin-bottom: ${Spacing["spacing-16"]};
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
