import { css } from "@linaria/core";

import { Border, Colour, Font, MediaQuery, Radius, Shadow } from "../theme";

export const tokens = {
    container: {
        top: "--fds-internal-smartAppBanner-container-top",
    },
};

export const smartAppBannerContainer = css`
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
    position: fixed;
    margin: 0.5rem 1.25rem;
    ${tokens.container.top}: initial;
    top: var(${tokens.container.top});
    left: 0;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    z-index: 9001;
    background: ${Colour.bg};
    border-radius: ${Radius.md};
`;

export const smartAppBannerContainerLight = css`
    box-shadow: ${Shadow["md-subtle"]};
`;

export const smartAppBannerContainerDark = css`
    border: ${Border["width-010"]} ${Border.solid} ${Colour.border};
`;

export const smartAppBannerContainerAnimated = css`
    @keyframes smart-app-banner-slide-down {
        from {
            opacity: 0;
            transform: translateY(-20%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    animation: smart-app-banner-slide-down 0.3s;
`;

export const dismissContainer = css`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`;

export const dismissButton = css`
    padding: 0;
`;

export const cross = css`
    color: ${Colour.icon};
    height: 1.25rem;
    width: 1.25rem;
`;

export const proceedContainer = css`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`;

export const textContainer = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${MediaQuery.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`;

export const bannerIcon = css`
    width: 2.65rem;
    height: auto;
    align-self: center;
`;

export const buttonContainer = css`
    max-width: 30%;
`;

export const styledButton = css`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${Font["body-xs-semibold"]}
    }
`;

export const title = css`
    font-weight: ${Font.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${MediaQuery.MaxWidth.xs} {
        ${Font["body-xs-bold"]}
    }
`;

export const description = css`
    overflow-wrap: anywhere;
`;

export const ratingContainer = css`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`;

export const starIconStyleBase = css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`;
