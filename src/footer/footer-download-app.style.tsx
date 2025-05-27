import styled from "styled-components";
import { MediaQuery, Spacing } from "@/theme";
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

export const Items = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const AppStoreLink = styled.a`
    &:not(:last-child) {
        margin-right: ${Spacing["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${MediaQuery.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${Spacing["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`;
