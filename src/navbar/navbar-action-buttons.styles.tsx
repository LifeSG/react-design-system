import styled, { css } from "styled-components";
import { Button } from "../button";
import { v2_MediaQuery } from "../v2_media";
import { v2_Text } from "../v2_text";

// =============================================================================
// WRAPPER
// =============================================================================
export const Wrapper = styled.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${v2_MediaQuery.MaxWidth.tablet} {
        display: none;
    }
`;

export const MobileWrapper = styled.ul`
    display: none;

    ${v2_MediaQuery.MaxWidth.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`;

export const DrawerWrapper = styled.ul`
    display: none;
    list-style: none;

    ${v2_MediaQuery.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
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
        margin-right: 1rem;
    }

    ${v2_MediaQuery.MaxWidth.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${(props) => (props.$mobile ? "1rem" : "0")};
        }
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        ${(props) => {
            if (props.$mobile) {
                return css`
                    padding: 0 1rem;
                `;
            }
        }}
    }
`;

export const ActionButton = styled(Button.Small)`
    ${v2_MediaQuery.MaxWidth.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`;

// =============================================================================
// DOWNLOAD APP
// =============================================================================
export const DownloadAppWrapper = styled.div`
    display: none;

    ${v2_MediaQuery.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`;

export const DownloadAppTitle = styled(v2_Text.BodySmall)`
    margin-bottom: 0.5rem;
`;

export const DownloadAppImageLinkWrapper = styled.div`
    display: flex;
`;

export const DownloadAppImageLink = styled.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${v2_MediaQuery.MaxWidth.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        img {
            max-width: 100%;
        }
    }
`;
