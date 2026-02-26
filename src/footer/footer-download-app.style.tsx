import styled from "styled-components";
import { V3_MediaQuery, V3_Spacing } from "../v3_theme";
import { Typography } from "../typography";
import { V3_ThemeFooter } from "../v3_theme/components/theme-helper";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${V3_MediaQuery.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`;

export const Label = styled(Typography.BodyMD)`
    margin-bottom: ${V3_Spacing["spacing-16"]};
    color: ${V3_ThemeFooter["footer-colour-text"]};
`;

export const AppButtonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: ${V3_Spacing["spacing-16"]};
    column-gap: ${V3_Spacing["spacing-16"]};
`;

export const AppStoreLink = styled.a`
    img {
        width: auto;
        height: 3.75rem;
        object-fit: contain;
        display: block;
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        img {
            height: 3rem;
            width: 100%;
        }
    }
`;
