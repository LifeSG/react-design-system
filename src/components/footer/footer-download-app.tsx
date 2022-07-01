import React from "react";
import styled from "styled-components";
import { MediaQuery } from "../styles/spec";
import { Text } from "../text";
import appStoreIcon from "../../assets/img/download/apple-app-store.png";
import playStoreIcon from "../../assets/img/download/google-play-store.png";

export const DownloadApp = () => (
    <Wrapper data-testid="download-app-section">
        <Label weight="semibold">Download the app</Label>
        <Items>
            <AppStoreLink
                href="https://apps.apple.com/sg/app/moments-of-life/id1383218758"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={appStoreIcon} alt="apple-app-store" />
            </AppStoreLink>
            <AppStoreLink
                href="https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={playStoreIcon} alt="google-play-store" />
            </AppStoreLink>
        </Items>
    </Wrapper>
);

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${MediaQuery.MaxWidth.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`;

export const Label = styled(Text.H5).attrs({ as: "p" })`
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

    ${MediaQuery.MaxWidth.mobileL} {
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
