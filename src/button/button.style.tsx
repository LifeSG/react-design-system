import styled from "styled-components";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import { V3_MediaQuery } from "../v3_theme";
import {
    Border,
    Button as ButtonTokens,
    Colour,
    Font,
    Motion,
    Spacing,
} from "../theme";

export const Main = styled.button`
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
    min-width: 4rem;
    border: ${Border["width-010"]} ${Border.solid} transparent;
    transition: all ${Motion["duration-250"]} ${Motion["ease-default"]};
    border-radius: ${ButtonTokens.radius};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -------------------------------------------------------------------------
    &.mainDefault {
        background-color: ${ButtonTokens["default-colour-bg"]};
        color: ${ButtonTokens["default-colour-text"]};

        ${V3_MediaQuery.MaxWidth.sm} {
            width: 100%;
        }

        &:hover,
        &:active {
            @media (pointer: fine) {
                background-color: ${ButtonTokens["default-colour-bg-hover"]};
            }
        }
    }

    &.mainDefaultDanger {
        background-color: ${Colour["bg-error-strong"]};
        color: ${ButtonTokens["default-colour-text"]};

        ${V3_MediaQuery.MaxWidth.sm} {
            width: 100%;
        }

        &:hover,
        &:active {
            @media (pointer: fine) {
                background-color: ${Colour["bg-error-strong-hover"]};
            }
        }
    }

    &.mainSecondary {
        background-color: ${Colour.bg};
        border-color: ${ButtonTokens["secondary-colour-border"]};
        color: ${ButtonTokens["secondary-colour-text"]};

        &:hover,
        &:active {
            @media (pointer: fine) {
                background-color: ${Colour["bg-hover-neutral"]};
            }
        }
    }

    &.mainSecondaryDanger {
        background-color: ${Colour.bg};
        border-color: ${Colour["border-error-strong"]};
        color: ${Colour["text-error"]};

        &:hover,
        &:active {
            @media (pointer: fine) {
                background-color: ${Colour["bg-hover-neutral"]};
            }
        }
    }

    &.mainLight {
        background-color: ${Colour.bg};
        border-color: ${Colour.border};
        color: ${ButtonTokens["light-colour-text"]};

        &:hover,
        &:active {
            @media (pointer: fine) {
                background-color: ${Colour["bg-hover-neutral"]};
            }
        }
    }

    &.mainLightDanger {
        background-color: ${Colour.bg};
        border-color: ${Colour.border};
        color: ${Colour["text-error"]};

        &:hover,
        &:active {
            @media (pointer: fine) {
                background-color: ${Colour["bg-hover-neutral"]};
            }
        }
    }

    &.mainLink {
        background-color: transparent;
        color: ${ButtonTokens["link-colour-text"]};

        &:hover,
        &:active {
            @media (pointer: fine) {
                background-color: ${Colour["bg-hover-neutral"]};
            }
        }
    }

    &.mainLinkDanger {
        background-color: transparent;
        color: ${Colour["text-error"]};

        &:hover,
        &:active {
            @media (pointer: fine) {
                background-color: ${Colour["bg-hover-neutral"]};
            }
        }
    }

    &.mainDisabled {
        background-color: ${Colour["bg-disabled"]};
        cursor: not-allowed;
        color: ${Colour["text-disabled"]};

        &:hover {
            box-shadow: none;
        }
    }

    // -------------------------------------------------------------------------
    // BUTTON SIZE + TEXT SIZE
    // -------------------------------------------------------------------------
    &.mainSizeDefault {
        height: 3rem;
        ${Font["heading-xs-semibold"]}

        ${V3_MediaQuery.MaxWidth.xxs} {
            height: auto;
        }
    }

    &.mainSmall {
        height: 2.5rem;
        ${Font["body-md-semibold"]}

        ${V3_MediaQuery.MaxWidth.xxs} {
            height: auto;
        }
    }

    &.mainLarge {
        height: 4rem;
        ${Font["heading-md-semibold"]}

        ${V3_MediaQuery.MaxWidth.xxs} {
            height: auto;
        }
    }
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    &.spinnerWithChildren {
        margin-right: 0.5rem;
    }
`;
