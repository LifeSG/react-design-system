import styled, { css } from "styled-components";
import { Button } from "../button";
import { V3_MediaQuery, V3_Spacing } from "../v3_theme";
import { Typography } from "../typography";

// =============================================================================
// WRAPPER
// =============================================================================
export const Wrapper = styled.ul`
    display: flex;
    list-style: none;
    margin-left: ${V3_Spacing["spacing-64"]};
    flex-shrink: 0;

    ${V3_MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

export const MobileWrapper = styled.ul`
    display: none;

    ${V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${V3_Spacing["spacing-64"]};
        flex-shrink: 0;
    }
`;

export const DrawerWrapper = styled.ul`
    display: none;
    list-style: none;

    ${V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${V3_Spacing["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`;

// =============================================================================
// BUTTON ITEMS
// =============================================================================
export const ButtonItem = styled.li<{ $mobile?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
        margin-right: ${V3_Spacing["spacing-16"]};
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${V3_Spacing["spacing-16"]};
        justify-content: center;

        &:not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${(props) =>
                props.$mobile ? V3_Spacing["spacing-16"] : "0"};
        }
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        ${(props) => {
            if (props.$mobile) {
                return css`
                    padding: 0 ${V3_Spacing["spacing-16"]};
                `;
            }
        }}
    }
`;

export const ActionButton = styled(Button.Small)`
    ${V3_MediaQuery.MaxWidth.lg} {
        width: 100%;
    }
`;

// =============================================================================
// DOWNLOAD APP
// =============================================================================
export const DownloadAppWrapper = styled.div`
    display: none;

    ${V3_MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${V3_Spacing["spacing-40"]};
    }
`;

export const DownloadAppTitle = styled(Typography.BodyMD)`
    margin-bottom: ${V3_Spacing["spacing-8"]};
`;

export const DownloadAppImageLinkWrapper = styled.div`
    display: flex;
`;

export const DownloadAppImageLink = styled.a`
    &:not(:last-child) {
        margin-right: ${V3_Spacing["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${V3_MediaQuery.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`;
