import styled, { css } from "styled-components";
import { Pill } from "../pill";
import { V3_Colour, V3_Font, V3_MediaQuery, V3_Radius } from "../v3_theme";
import { Typography } from "../typography";
import { Variant } from "./types";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

interface TimelineWrapperStyleProps {
    $startCol?: number | undefined;
    $colSpan?: number | undefined;
}

interface VariantStyleProps {
    $variant: Variant;
}

// =============================================================================
// STYLE INTERFACES
// =============================================================================
export const CircleIndicator = styled.div<VariantStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;

    ${(props) => {
        switch (props.$variant) {
            case "current":
                return css`
                    background-color: ${V3_Colour["icon-primary-subtle"]};
                `;
            case "upcoming-active":
                return css`
                    border: 4px solid ${V3_Colour["icon-primary-subtle"]};
                `;
            case "upcoming-inactive":
                return css`
                    border: 4px solid ${V3_Colour["icon-subtle"]};
                `;
            case "disabled":
                return css`
                    background-color: ${V3_Colour["icon-disabled-subtle"]};
                `;
            case "completed":
                return css`
                    background-color: ${V3_Colour["icon-success"]};
                    svg {
                        color: ${V3_Colour["icon-inverse"]};
                    }
                `;
            case "numeric":
                return css`
                    background-color: ${V3_Colour["icon-info"]};
                    color: ${V3_Colour["text-inverse"]};
                    font-size: ${V3_Font["body-sm-bold"]};
                `;
            case "error":
                return css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${V3_Colour["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `;
        }
    }}
`;

export const LineIndicator = styled.div<VariantStyleProps>`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: ${V3_Radius["full"]};

    ${(props) => {
        switch (props.$variant) {
            case "current":
            case "upcoming-active":
                return css`
                    background-color: ${V3_Colour["icon-primary-subtle"]};
                `;
            case "upcoming-inactive":
                return css`
                    background-color: ${V3_Colour["icon-subtle"]};
                `;
            case "disabled":
                return css`
                    background-color: ${V3_Colour["icon-disabled-subtle"]};
                `;
            case "completed":
                return css`
                    background-color: ${V3_Colour["icon-success"]};
                `;
            case "numeric":
                return css`
                    background-color: ${V3_Colour["icon-info"]};
                `;
            case "error":
                return css`
                    margin-left: -0.15rem;
                    background-color: ${V3_Colour["icon-error"]};
                `;
        }
    }}
`;

export const TimelineIndicators = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`;

export const TimelineWrapper = styled.div<TimelineWrapperStyleProps>`
    grid-column: ${(props) => (props.$startCol ? props.$startCol : 3)} / span
        ${(props) => (props.$colSpan ? props.$colSpan : 8)};

    ${V3_MediaQuery.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${V3_MediaQuery.MaxWidth.sm} {
        grid-column: span 8;
    }
`;

export const TimelineTitle = styled(Typography.HeadingSM)`
    margin-bottom: 1rem;

    ${V3_MediaQuery.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`;

export const TimelineItemTitle = styled(Typography.HeadingXS)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`;

// default is 2-8-2 on desktop
export const TimelineItem = styled.div`
    display: flex;

    &:last-of-type ${LineIndicator} {
        margin-bottom: 0;
    }
`;

export const TimelineItemContent = styled.div`
    margin-bottom: 2rem;
    width: 100%;
`;

export const TimelinePills = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`;

export const TimelinePill = styled(Pill)`
    padding: 0.125rem 0.5rem;
`;
