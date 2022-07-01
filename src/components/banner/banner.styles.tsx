import styled, { css } from "styled-components";
import { BannerProps } from "./types";
import { Text } from "../text";
import { Color } from "../styles/theme";
import { MediaQuery } from "../styles/spec";
import { Layout } from "../layout";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface ForegroundOverlayProps {
    foreground: string;
}

interface HeadingTextFlags {
    foreground: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled(Layout.Section)`
    background: ${Color.Neutral[7]};
    width: 100%;
    position: relative;
    padding-left: 0 !important; // overwrite default
    padding-right: 0 !important; // overwrite default

    ${({ imgset }: BannerProps) =>
        imgset &&
        imgset.desktop &&
        `
        background-image: url('${imgset.desktop}');
        background-size: cover;
        background-blend-mode: multiply;
        background-repeat: no-repeat;
        background-position: center center;
    `}

    ${({ imgset }) =>
        imgset &&
        imgset.desktop &&
        imgset.foreground &&
        `
        background-image: url('${imgset.desktop}'), linear-gradient(to right, rgba(14, 15, 57, 0.88) -20%, rgba(168, 173, 231, 0.73) 35%, rgba(255, 255, 255, 0.4), rgba(168, 173, 231, 0.73));
    `}
`;

export const Background = styled.div<BannerProps>`
    width: 100%;
    ${MediaQuery.MaxWidth.tablet} {
        ${({ imgset }) =>
            imgset &&
            imgset.mobile &&
            css`
                background-image: url("${imgset.mobile}");
                background-blend-mode: multiply;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                position: relative;

                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    bottom: 0px;
                    right: 0px;
                    background: linear-gradient(
                        to left bottom,
                        rgba(81, 38, 14, 0.72),
                        rgba(14, 15, 57, 0.88)
                    );
                    z-index: 1;
                }
            `}
    }
`;

export const Container = styled(Layout.Container)`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding: 4rem 0;
    position: relative;

    ${MediaQuery.MaxWidth.tablet} {
        align-items: flex-start;
        padding: 2.5rem 1.5rem;
    }
`;

export const ForegroundOverlay = styled.div<ForegroundOverlayProps>`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 1;

    ${({ foreground }) =>
        foreground &&
        `
        background-image: url('${foreground}');
        background-blend-mode: multiply;
        background-size: contain;
        background-position: right center;
		background-repeat: no-repeat;

        ${MediaQuery.MaxWidth.tablet} {
            background-size: cover;
            background-position: 15vw center;
        }
    `}
`;

export const HeadingFocusText = styled(Text.H1)`
    color: ${Color.Brand[1]};
    width: 80%;
    margin-left: -0.1rem;
    padding: 0;
    display: flex;
    align-items: center;

    ${MediaQuery.MaxWidth.tablet} {
        width: 100%;
    }
`;

export const HeadingText = styled(Text.H1)<HeadingTextFlags>`
    width: 80%;
    display: flex;
    align-items: center;
    white-space: pre-line;
    margin-left: -0.1rem;
    max-width: 45rem;
    z-index: 20;

    ${MediaQuery.MaxWidth.tablet} {
        width: 100%;
        margin-bottom: 1.25rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        position: relative;
        width: 100%;
        color: rgb(255, 255, 255);
        line-height: 3rem;
        margin-bottom: 1rem;
    }

    ${(props) => {
        if (props.foreground) {
            return `
				color: ${Color.Neutral[8](props)};
			`;
        } else {
            return `
				color: ${Color.Neutral[1](props)};
				${MediaQuery.MaxWidth.mobileL} {
					color: ${Color.Neutral[8](props)};
				}
			`;
        }
    }}
`;
