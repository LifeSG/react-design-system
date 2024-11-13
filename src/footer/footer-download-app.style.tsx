import { MediaQuery } from "../theme";
import { Typography } from "../typography";
import styled from "styled-components";

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

    ${MediaQuery.MaxWidth.sm} {
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
