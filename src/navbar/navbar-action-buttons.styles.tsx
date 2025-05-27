import styled, { css } from "styled-components";
import { Button } from "../button";
import { MediaQuery, Spacing } from "@/theme";
import { Typography } from "../typography/typography";

// =============================================================================
// WRAPPER
// =============================================================================
export const Wrapper = styled.ul`
    display: flex;
    list-style: none;
    margin-left: ${Spacing["spacing-64"]};
    flex-shrink: 0;

    ${MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

export const MobileWrapper = styled.ul`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${Spacing["spacing-64"]};
        flex-shrink: 0;
    }
`;

export const DrawerWrapper = styled.ul`
    display: none;
    list-style: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Spacing["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${MediaQuery.MaxWidth.sm} {
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

    :not(:last-of-type) {
        margin-right: ${Spacing["spacing-16"]};
    }

    ${MediaQuery.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${Spacing["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${(props) =>
                props.$mobile ? Spacing["spacing-16"] : "0"};
        }
    }

    ${MediaQuery.MaxWidth.sm} {
        ${(props) => {
            if (props.$mobile) {
                return css`
                    padding: 0 ${Spacing["spacing-16"]};
                `;
            }
        }}
    }
`;

export const ActionButton = styled(Button.Small)`
    ${MediaQuery.MaxWidth.lg} {
        width: 100%;
    }
`;

// =============================================================================
// DOWNLOAD APP
// =============================================================================
export const DownloadAppWrapper = styled.div`
    display: none;

    ${MediaQuery.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Spacing["spacing-40"]};
    }
`;

export const DownloadAppTitle = styled(Typography.BodyMD)`
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const DownloadAppImageLinkWrapper = styled.div`
    display: flex;
`;

export const DownloadAppImageLink = styled.a`
    :not(:last-child) {
        margin-right: ${Spacing["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${MediaQuery.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${MediaQuery.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`;
